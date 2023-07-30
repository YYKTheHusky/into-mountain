import styles from './ReviewList.module.scss'
import ReviewListCard from './ReviewListCard/ReviewListCard'
const { reviewListContainer } = styles

const ReviewList = () => {
  return (
    <div className={reviewListContainer}>
      <ReviewListCard />
    </div>
  )
}

export default ReviewList
