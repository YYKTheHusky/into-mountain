import styles from './UserContent.module.scss'
import MyReview from './MyReview/MyReview'
import MyCollection from './MyCollection/MyCollection'
import MyNotice from './MyNotice/MyNotice'
import MyFollowing from './MyFollowing/MyFollowing'
import MyFollower from './MyFollower/MyFollower'
import InfoSetting from './InfoSetting/InfoSetting'

const { userContentContainer } = styles

const UserContent = ({
  theUserData,
  acitveContent,
  theUserId,
  onUpdateCardInfo,
  followingList
}) => {
  if (acitveContent === 'myReviews') {
    return (
      <div className={userContentContainer}>
        <MyReview theUserId={theUserId} />
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
        <MyFollowing
          theUserId={theUserId}
          onUpdateCardInfo={onUpdateCardInfo}
        />
      </div>
    )
  } else if (acitveContent === 'follower') {
    return (
      <div className={userContentContainer}>
        <MyFollower theUserId={theUserId} onUpdateCardInfo={onUpdateCardInfo} />
      </div>
    )
  } else if (acitveContent === 'setting') {
    return (
      <div className={userContentContainer}>
        <InfoSetting
          theUserData={theUserData}
          onUpdateCardInfo={onUpdateCardInfo}
        />
      </div>
    )
  }
}

export default UserContent
