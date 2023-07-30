import styles from './ReviewsMainContent.module.scss'
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import ReviewList from 'components/ReviewsList/ReviewsList'
const {
  reviewssMainContentContainer,
  search,
  searchBarContainer,
  filterContainer,
  list
} = styles

const ReviewsMainContent = () => {
  return (
    <div className={reviewssMainContentContainer}>
      <div className={search}>
        <div className={searchBarContainer}>
          <TrailsSearchBar />
        </div>
        <div className={filterContainer}>
          <FilterToggole />
        </div>
      </div>
      <div className={list}>
        <ReviewList />
      </div>
    </div>
  )
}

export default ReviewsMainContent
