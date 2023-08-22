import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { WebsiteError } from 'utils/AlertCollection'
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

const { container, innerContainer, search, list, youHaveNothingContainer } =
  styles

const filterList = {
  步道類型: ['郊山', '百岳', '海外']
}

const ReviewsMainContent = () => {
  const { keyword } = useParams()
  const location = useLocation()
  const [reviewData, setReviewData] = useState(null)
  const [filterOption, setFilterOption] = useState({
    category: ''
  })

  const handleFilterOption = async ({ type, value }) => {
    if (type === '步道類型') {
      if (value !== '') {
        setFilterOption((pre) => ({
          ...pre,
          category: (item) => {
            return item.category === value
          }
        }))
      } else {
        setFilterOption((pre) => ({
          ...pre,
          category: ''
        }))
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (location.pathname === '/search/allReviews') {
        try {
          const { posts } = await getAllPost()
          setReviewData(posts)
        } catch (error) {
          WebsiteError()
        }
      } else {
        try {
          const { posts } = await searchPostByKeyword(keyword)
          setReviewData(posts)
        } catch (error) {
          WebsiteError()
        }
      }
      if (filterOption.category !== '') {
        setReviewData((pre) =>
          pre.filter((item) => filterOption.category(item))
        )
      }
    }
    getData()
  }, [location, keyword, filterOption])

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={search}>
          <TrailsSearchBar type="review" onFilterOption={handleFilterOption} />
          <FilterToggole
            filterList={filterList}
            filterOption={filterOption}
            onFilterOption={handleFilterOption}
          />
        </div>
        {reviewData && reviewData.length === 0 ? (
          <div className={youHaveNothingContainer}>
            <YouHaveNothing robotDescription="沒有符合的搜尋結果" />
          </div>
        ) : (
          <div className={list}>
            {reviewData
              ? reviewData.map((item) => (
                  <ReviewListCard key={item.id} data={item} />
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

export default ReviewsMainContent
