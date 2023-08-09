import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './MyFollower.module.scss'
import FollowerCard from 'components/UserContent/FollowCard/FollowCard'
import { getUserFollowers } from 'api/user'
import { useState, useEffect } from 'react'
const { myFollowerContainer } = styles

const MyFollower = ({ theUserId }) => {
  const [followersList, setFollowersList] = useState([])

  useEffect(() => {
    const getUserFollowersAsync = async () => {
      try {
        const data = await getUserFollowers(theUserId)
        setFollowersList(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUserFollowersAsync()
  }, [])

  return (
    <RightSideContainer title="粉絲">
      {followersList.length === 0 && (
        <div>
          <YouHaveNothing robotDescription="沒有粉絲" />
        </div>
      )}
      <div className={myFollowerContainer}>
        {followersList.map((item) => (
          <FollowerCard key={item.id} data={item} fallow={item.Follower} />
        ))}
      </div>
    </RightSideContainer>
  )
}
export default MyFollower
