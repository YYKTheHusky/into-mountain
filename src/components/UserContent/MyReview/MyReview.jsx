// components
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import ListItem from './ListItem/ListItem'
// hook
import { useEffect, useState } from 'react'
// style
import styles from './MyReview.module.scss'
// api
import { getUserPosts, getUserAllPosts, deletePost } from 'api/user'

const { myReviewContainer } = styles

const MyReview = ({ theUserId }) => {
  const [dataList, setDataList] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(true)

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id)
      setDataList((pre) => pre.filter((item) => item.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (theUserId === localStorage.getItem('currentUserId')) {
      const getUserAllPostsAsync = async () => {
        try {
          const res = await getUserAllPosts()
          setDataList(res)
          setDataIsLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
      getUserAllPostsAsync()
    } else {
      const getUserPostsAsync = async () => {
        try {
          const res = await getUserPosts(theUserId)
          setDataList(res)
          setDataIsLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
      getUserPostsAsync()
    }
  }, [theUserId])

  return (
    <RightSideContainer title="心得">
      {dataList.length === 0 && !dataIsLoading && (
        <YouHaveNothing robotDescription="未發佈過心得" />
      )}
      {dataList.length > 0 && (
        <div className={myReviewContainer}>
          {dataList.map((item) => (
            <ListItem
              data={item}
              key={item.id}
              theUserId={theUserId}
              onDeletePost={handleDeletePost}
            />
          ))}
        </div>
      )}
    </RightSideContainer>
  )
}
export default MyReview
