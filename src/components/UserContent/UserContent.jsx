import styles from './UserContent.module.scss'
import MyReview from './MyReview/MyReview'
import MyCollection from './MyCollection/MyCollection'
import MyNotice from './MyNotice/MyNotice'
import MyFollowing from './MyFollowing/MyFollowing'
import MyFollower from './MyFollower/MyFollower'
import InfoSetting from './InfoSetting/InfoSetting'

const { userContentContainer } = styles

const UserContent = ({ acitveContent, theUserId }) => {
  if (acitveContent === 'myReviews') {
    return (
      <div className={userContentContainer}>
        <MyReview theUserId={theUserId}/>
      </div>
    )
  } else if (
    acitveContent === 'trailCollection' ||
    acitveContent === 'reviewCollection'
  ) {
    return (
      <div className={userContentContainer}>
        <MyCollection theUserId={theUserId} />
      </div>
    )
  } else if (acitveContent === 'notification') {
    return (
      <div className={userContentContainer}>
        <MyNotice />
      </div>
    )
  } else if (acitveContent === 'following') {
    return (
      <div className={userContentContainer}>
        <MyFollowing />
      </div>
    )
  } else if (acitveContent === 'follower') {
    return (
      <div className={userContentContainer}>
        <MyFollower />
      </div>
    )
  } else if (acitveContent === 'setting') {
    return (
      <div className={userContentContainer}>
        <InfoSetting />
      </div>
    )
  }
}

export default UserContent
