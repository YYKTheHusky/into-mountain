// import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './MyFollowing.module.scss'
import FollowerCard from 'components/UserContent/FollowCard/FollowCard'
const { myFollowingContainer } = styles

const MyFollowing = () => {
  return (
    <RightSideContainer title="關注">
      <div className={myFollowingContainer}>
        {/* <div>
          <YouHaveNothing robotTitle="關注" robotDescription="沒有關注任何人" />
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
export default MyFollowing
