import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './MyFollowing.module.scss'
import FollowerCard from 'components/UserContent/FollowCard/FollowCard'
import { getUserFollowing } from 'api/user'
import { useEffect, useState } from 'react'
import { followUser, unFollowUser } from 'api/followship'
const { myFollowingContainer } = styles

const MyFollowing = ({ theUserId, onUpdateCardInfo }) => {
  const [followingList, setFollowingList] = useState([])

  const handleFollow = async ({ isFollow, id }) => {
    try {
      if (isFollow) {
        await unFollowUser(id)
      } else {
        await followUser(id)
      }
    } catch (error) {
      console.error(error)
    }
    onUpdateCardInfo()
    setFollowingList((prev) =>
      prev.map((item) => {
        if (item.followingId === id) {
          return { ...item, isFollow: !isFollow }
        }
        return item
      })
    )
  }

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
          <FollowerCard
            key={item.id}
            data={item}
            fallow={item.Following}
            onFollow={handleFollow}
          />
        ))}
      </div>
    </RightSideContainer>
  )
}
export default MyFollowing
