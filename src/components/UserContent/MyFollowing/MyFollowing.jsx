import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './MyFollowing.module.scss'
import FollowerCard from 'components/UserContent/FollowCard/FollowCard'
import { getUserFollowing } from 'api/user'
import { useEffect, useState } from 'react'
const { myFollowingContainer } = styles

const MyFollowing = ({ theUserId }) => {
  const [followingList, setFollowingList] = useState([])

  useEffect(() => {
    const getUserFollowingAsync = async () => {
      try {
        const data = await getUserFollowing(theUserId)
        setFollowingList(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUserFollowingAsync()
  }, [])
  return (
    <RightSideContainer title="關注">
      {followingList.length === 0 && (
        <div>
          <YouHaveNothing robotDescription="沒有關注任何人" />
        </div>
      )}
      <div className={myFollowingContainer}>
        {followingList.map((item) => (
          <FollowerCard key={item.id} data={item} fallow={item.Following} />
        ))}
      </div>
    </RightSideContainer>
  )
}
export default MyFollowing
