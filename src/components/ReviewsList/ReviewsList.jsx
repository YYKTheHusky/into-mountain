import { useEffect, useState } from 'react'
import Toast from 'utils/sweetAlertConfig.js'
// scss
import styles from './ReviewsList.module.scss'
// component
import ReviewListCard from './ReviewsListCard/ReviewsListCard'
// api
import { getAllPost } from 'api/post'

const { reviewListContainer } = styles

const ReviewList = () => {
  const [allPost, setAllPost] = useState(null)

  useEffect(() => {
    const getAllPosts = async () => {
      const { status, posts } = await getAllPost()
      if (status === 'success') {
        setAllPost(posts)
      } else {
        Toast.fire({
          icon: 'error',
          title: '遇到一點問題，請嘗試刷新網頁!'
        })
      }
    }
    getAllPosts()
  }, [])

  return (
    <div className={reviewListContainer}>
      {allPost &&
        allPost.map((item) => <ReviewListCard key={item.id} data={item} />)}
    </div>
  )
}

export default ReviewList
