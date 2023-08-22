// hook
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// component
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsListCard from 'components/TrailsList/TrailsListCard/TrailsListCard'
import CardSkeleton from 'components/Skeleton/CardSkeleton'
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'

// api
import { getAllTrails, searchTrailByKeyword } from 'api/trail'
import styles from './TrailsMainContent.module.scss'

// style
const { container, innerContainer, youHaveNothingContainer, search, list } =
  styles

//
const filterList = {
  難易度: ['低', '中', '高'],
  里程: ['5公里以內', '5 - 10公里', '10公里以上'],
  所需時間: ['單日行程', '多日行程', '超過1週']
}

const TrailsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [trailData, setTrailData] = useState(null)
  const [filterOption, setFilterOption] = useState({
    difficulty: '',
    distance: '',
    duration: ''
  })

  const handleFilterOption = async ({ type, value }) => {
    if (type === '難易度') {
      try {
        if (value !== '') {
          setFilterOption((pre) => ({
            ...pre,
            difficulty: (item) => {
              const difficultyValues = item.difficulty.split('-')
              return difficultyValues.includes(value)
            }
          }))
        } else {
          setFilterOption((pre) => ({
            ...pre,
            difficulty: ''
          }))
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (type === '里程') {
      try {
        if (value === '5公里以內') {
          setFilterOption((pre) => ({
            ...pre,
            distance: (item) => {
              return parseFloat(item.distance.match(/\d+(\.\d+)?/)) < 5
            }
          }))
        } else if (value === '5 - 10公里') {
          setFilterOption((pre) => ({
            ...pre,
            distance: (item) => {
              const distance = parseFloat(item.distance.match(/\d+(\.\d+)?/))
              return distance >= 5 && distance <= 10
            }
          }))
        } else if (value === '10公里以上') {
          setFilterOption((pre) => ({
            ...pre,
            distance: (item) => {
              return parseFloat(item.distance.match(/\d+(\.\d+)?/)) > 10
            }
          }))
        } else {
          setFilterOption((pre) => ({
            ...pre,
            distance: ''
          }))
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (type === '所需時間') {
      setFilterOption((pre) => ({ ...pre, duration: value }))
      try {
        if (value === '單日行程') {
          setFilterOption((pre) => ({
            ...pre,
            duration: (item) => {
              return !item.duration.split('').includes('天')
            }
          }))
        } else if (value === '多日行程') {
          setFilterOption((pre) => ({
            ...pre,
            duration: (item) => {
              return (
                item.duration.split('').includes('天') &&
                Number(/(\d+)\s+天/g.exec(item.duration)[1]) >= 1 &&
                Number(/(\d+)\s+天/g.exec(item.duration)[1]) <= 7
              )
            }
          }))
        } else if (value === '超過1週') {
          setFilterOption((pre) => ({
            ...pre,
            duration: (item) => {
              return (
                item.duration.split('').includes('天') &&
                Number(/(\d+)\s+天/g.exec(item.duration)[1]) >= 7
              )
            }
          }))
        } else {
          setFilterOption((pre) => ({
            ...pre,
            duration: ''
          }))
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allTrails') {
        const { trails } = await getAllTrails()
        setTrailData(trails)
      } else {
        const { trails } = await searchTrailByKeyword(keyword)
        setTrailData(trails)
      }
      if (filterOption.difficulty !== '') {
        setTrailData((pre) =>
          pre.filter((item) => filterOption.difficulty(item))
        )
      }
      if (filterOption.distance !== '') {
        setTrailData((pre) => pre.filter((item) => filterOption.distance(item)))
      }
      if (filterOption.duration !== '') {
        setTrailData((pre) => pre.filter((item) => filterOption.duration(item)))
      }
    }
    getData()
  }, [location, keyword, filterOption])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="trail" onFilterOption={handleFilterOption} />
          <FilterToggole
            filterList={filterList}
            filterOption={filterOption}
            onFilterOption={handleFilterOption}
          />
        </div>
        {trailData && trailData.length === 0 ? (
          <div className={youHaveNothingContainer}>
            <YouHaveNothing robotDescription="沒有符合的搜尋結果" />
          </div>
        ) : (
          <div className={list}>
            {trailData
              ? trailData.map((item) => (
                  <TrailsListCard key={item.id} data={item} />
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TrailsMainContent
