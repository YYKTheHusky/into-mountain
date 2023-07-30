import styles from './ReviewsList.module.scss'
import ReviewListCard from './ReviewsListCard/ReviewsListCard'
const { reviewListContainer } = styles
// postId,title, category, description, image, difficulty, recommend, userId,
// createdAt,updatedAt, userName(心得作者名字), userAvatar(心得作者頭像), favoriteCount(心得被收藏總數), likeCount(心得被like總數), isLike(使用者是否like)
const data = [
  {
    postId: 1,
    title: '珠穆朗瑪峰',
    category: '困難',
    description: '9',
    image: 'https://picsum.photos/200/300',
    difficulty: '困難',
    recommend: '5',
    userId: '1',
    createdAt: '2023-7-30',
    updatedAt: '2023-7-30',
    userName: '使用者名稱',
    userAvatar: 'https://picsum.photos/id/237/200/300',
    favoriteCount: '3',
    likeCount: '10',
    isLike: 'true'
  }
]

const ReviewList = () => {
  return (
    <div className={reviewListContainer}>
      <ReviewListCard data={data[0]} />
    </div>
  )
}

export default ReviewList
