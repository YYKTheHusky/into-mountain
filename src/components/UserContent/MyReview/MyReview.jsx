// components
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import ListItem from './ListItem/ListItem'
// hook
import { useEffect, useState } from 'react'
// style
import styles from './MyReview.module.scss'
// api
import { getUserPosts } from 'api/user'

const { myReviewContainer } = styles

const MyReview = ({ theUserId }) => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    const getUserPostsAsync = async () => {
      try {
        const data = await getUserPosts(theUserId)
        setDataList(data)
        // console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUserPostsAsync()
  }, [])

  return (
    <RightSideContainer title="心得">
      {dataList.length === 0 && (
        <YouHaveNothing robotDescription="未發佈過心得" />
      )}
      {dataList.length > 0 && (
        <div className={myReviewContainer}>
          {dataList.map((item) => (
            <ListItem data={item} key={item.id} />
          ))}
        </div>
      )}
    </RightSideContainer>
  )
}
export default MyReview
