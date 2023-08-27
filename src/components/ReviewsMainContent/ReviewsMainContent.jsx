import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// scss
import styles from './ReviewsMainContent.module.scss'
// component
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import ReviewListCard from 'components/ReviewsList/ReviewsListCard/ReviewsListCard'
import CardSkeleton from 'components/Skeleton/CardSkeleton'
// api
import { getAllPost, searchPostByKeyword } from 'api/post'
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'

const { container, innerContainer, search, list } = styles

const filterList = {
  步道類型: ['郊山', '百岳', '海外']
}

const ReviewsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [reviewData, setReviewData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filter, setFilter] = useState({
    步道類型: ''
  })

  const handleFilter = () => {
    if (filter.步道類型 !== '') {
      setFilteredData((pre) =>
        pre.filter((item) => {
          return item.category === filter.步道類型
        })
      )
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allReviews') {
        const { posts } = await getAllPost()
        setReviewData(posts)
        setFilteredData(posts)
      } else {
        const { posts } = await searchPostByKeyword(keyword)
        setReviewData(posts)
        setFilteredData(posts)
      }
      setIsLoading(false)
    }
    getData()
  }, [location, keyword])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setFilteredData(reviewData)
      handleFilter()
      setIsLoading(false)
    }

    fetchData()
  }, [filter])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="review" />
          <FilterToggole filterList={filterList} setFilter={setFilter} />
        </div>
        {isLoading ? (
          <div className={list}>
            {Array.from({ length: 12 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div>
            {filteredData && filteredData.length === 0 && (
              <YouHaveNothing robotDescription="沒有符合的搜尋結果" />
            )}
            {filteredData && filteredData.length !== 0 && (
              <div className={list}>
                {filteredData.map((item) => (
                  <ReviewListCard key={item.id} data={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewsMainContent
