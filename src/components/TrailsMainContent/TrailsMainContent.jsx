// hook
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// component
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsListCard from 'components/TrailsList/TrailsListCard/TrailsListCard'
import CardSkeleton from 'components/Skeleton/CardSkeleton'

// api
import { getAllTrails, searchTrailByKeyword } from 'api/trail'
import styles from './TrailsMainContent.module.scss'

// style
const { container, innerContainer, search, list } = styles

//
const filterList = {
  // 步道類型: ['郊山', '百岳', '海外'],
  難易度: ['低', '中', '高'],
  里程: ['5公里以內', '10公里以內', '10公里以上'],
  所需時間: ['3個小時以內', '1天以內', '大於1天']
}

const TrailsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [trailData, setTrailData] = useState(null)
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const [filterOption, setFilterOption] = useState({
    category: '',
    difficulty: '',
    distance: '',
    duration: ''
  })

  const handleFilterOption = ({ type, value }) => {
    if (type === '步道類型') {
      setFilterOption((pre) => ({ ...pre, category: value }))
    }
    if (type === '難易度') {
      setFilterOption((pre) => ({ ...pre, difficulty: value }))
    }
    if (type === '里程') {
      setFilterOption((pre) => ({ ...pre, distance: value }))
    }
    if (type === '所需時間') {
      setFilterOption((pre) => ({ ...pre, duration: value }))
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allTrails') {
        const { trails } = await getAllTrails()
        setTrailData(trails)
        setDataIsLoading(false)
      } else {
        const { trails } = await searchTrailByKeyword(keyword)
        setTrailData(trails)
      }
    }
    getData()
  }, [location, keyword])

  useEffect(() => {
    if (!dataIsLoading) {
      console.log(parseFloat(trailData[0].distance))
    }
  }, [filterOption])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="trail" />
          <FilterToggole
            filterList={filterList}
            onFilterOption={handleFilterOption}
          />
        </div>
        {trailData && trailData.length === 0 ? (
          <div className="">
            {/* <YouHaveNothing robotDescription="沒有符合的搜尋結果" /> */}
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
