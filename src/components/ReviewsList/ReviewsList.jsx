import styles from './ReviewsList.module.scss'
import ReviewListCard from './ReviewsListCard/ReviewsListCard'
const { reviewListContainer } = styles
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
  },
  {
    postId: 2,
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
  },
  {
    postId: 3,
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
  },
  {
    postId: 4,
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
  },
  {
    postId: 5,
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
  },
  {
    postId: 6,
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
  },
  {
    postId: 7,
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
  },
  {
    postId: 8,
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
  },
  {
    postId: 9,
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
  },
  {
    postId: 10,
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
      {data.map((item) => (
        <ReviewListCard key={item.postId} data={item} />
      ))}
    </div>
  )
}

export default ReviewList
