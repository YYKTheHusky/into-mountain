import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// scss
import styles from './TrailsMainContent.module.scss'
// component
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsListCard from 'components/TrailsList/TrailsListCard/TrailsListCard'
import CardSkeleton from 'components/Skeleton/CardSkeleton'
// api
import { getAllTrails, searchTrailByKeyword } from 'api/trail'
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'

const { container, innerContainer, search, list, youHaveNothingContainer } =
  styles

const TrailsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [trailData, setTrailData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allTrails') {
        const { trails } = await getAllTrails()
        setTrailData(trails)
      } else {
        const { trails } = await searchTrailByKeyword(keyword)
        setTrailData(trails)
      }
    }
    getData()
  }, [location, keyword])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="trail" />
          <FilterToggole />
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
