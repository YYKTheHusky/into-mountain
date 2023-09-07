// hook
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// scss
import styles from './TrailsMainContent.module.scss'

// component
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsListCard from 'components/TrailsList/TrailsListCard/TrailsListCard'
import CardSkeleton from 'components/Skeleton/CardSkeleton'
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'

// api
import { getAllTrails, searchTrailByKeyword } from 'api/trail'

// style
const { container, innerContainer, search, list, nothing } = styles

const filterList = {
  難易度: ['低', '中', '高'],
  里程: ['5公里以內', '5 - 10公里', '10公里以上'],
  所需時間: ['單日行程', '多日行程', '超過1週']
}

const TrailsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [trailData, setTrailData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filter, setFilter] = useState({
    難易度: '',
    里程: '',
    所需時間: ''
  })

  const filteredDifficulty = () => {
    if (filter.難易度 !== '' && filter.難易度 !== undefined) {
      setFilteredData((pre) =>
        pre.filter((item) => {
          const difficultyValues = item.difficulty.split('-')
          return difficultyValues.includes(filter.難易度)
        })
      )
    }
  }

  const filteredDistance = () => {
    if (filter.里程 !== '' && filter.里程 !== undefined) {
      if (filter.里程 === '5公里以內') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            return parseFloat(item.distance.match(/\d+(\.\d+)?/)) < 5
          })
        )
      } else if (filter.里程 === '5 - 10公里') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            const distance = parseFloat(item.distance.match(/\d+(\.\d+)?/))
            return distance >= 5 && distance <= 10
          })
        )
      } else if (filter.里程 === '10公里以上') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            return parseFloat(item.distance.match(/\d+(\.\d+)?/)) > 10
          })
        )
      }
    }
  }

  const filteredTime = () => {
    if (filter.所需時間 !== '' && filter.所需時間 !== undefined) {
      if (filter.所需時間 === '單日行程') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            return !item.duration.split('').includes('天')
          })
        )
      } else if (filter.所需時間 === '多日行程') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            return (
              item.duration.split('').includes('天') &&
              Number(/(\d+)\s+天/g.exec(item.duration)[1]) >= 1 &&
              Number(/(\d+)\s+天/g.exec(item.duration)[1]) <= 7
            )
          })
        )
      } else if (filter.所需時間 === '超過1週') {
        setFilteredData((pre) =>
          pre.filter((item) => {
            return (
              item.duration.split('').includes('天') &&
              Number(/(\d+)\s+天/g.exec(item.duration)[1]) >= 7
            )
          })
        )
      }
    }
  }

  const handleFilter = () => {
    filteredDifficulty(filteredDistance(filteredTime()))
  }

  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allTrails') {
        const { trails } = await getAllTrails()
        setTrailData(trails)
        setFilteredData(trails)
      } else {
        const { trails } = await searchTrailByKeyword(keyword)
        setTrailData(trails)
        setFilteredData(trails)
      }
      setIsLoading(false)
    }
    getData()
  }, [location, keyword])

  useEffect(() => {
    const fetchData = async () => {
      console.log(filter)
      setFilteredData(trailData)
      handleFilter()
    }

    fetchData()
  }, [filter, trailData])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="trail" />
          <FilterToggole filterList={filterList} setFilter={setFilter} />
        </div>
        {isLoading ? (
          <div className={list}>
            {Array.from({ length: 12 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredData && filteredData.length === 0 && (
              <div className={nothing}>
                <YouHaveNothing robotDescription="沒有符合的搜尋結果" />
              </div>
            )}
            {filteredData && filteredData.length !== 0 && (
              <div className={list}>
                {filteredData.map((item) => (
                  <TrailsListCard key={item.id} data={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default TrailsMainContent
