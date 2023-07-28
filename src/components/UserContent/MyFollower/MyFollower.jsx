// import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './MyFollower.module.scss'
import FollowerCard from 'components/UserContent/FollowCard/FollowCard'
const { myFollowerContainer } = styles
// followshipId,followingId,name,createdAt,updatedAt, followingAvatar(following的頭像), isFollow(使用者是否follow)
// const data = [{

// }]

const MyFollower = () => {
  return (
    <RightSideContainer title="粉絲">
      <div className={myFollowerContainer}>
        {/* <div>
          <YouHaveNothing robotTitle="粉絲" robotDescription="沒有粉絲" />
        </div> */}
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
      </div>
    </RightSideContainer>
  )
}
export default MyFollower
