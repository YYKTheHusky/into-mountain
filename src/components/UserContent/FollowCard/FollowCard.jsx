import styles from './FollowCard.module.scss'
import { SecondaryButton } from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as IconDefaultUser } from 'assets/icons/icon-user.svg'
const {
  followerCardCointainer,
  cardHead,
  cardAvatar,
  cardTitle,
  cardButton,
  defaultImg,
  userAvatar
} = styles

const FollowerCard = ({ data, follow, onFollow }) => {
  const navigate = useNavigate()
  let theId
  if (data.Following) {
    theId = data.Following.id
  } else {
    theId = data.Follower.id
  }
  return (
    <div
      className={followerCardCointainer}
      onClick={() => navigate(`/user/${theId}/myReviews`)}
    >
      <div className={cardHead}>
        <div className={cardAvatar}>
          {follow.avatar === null ? (
            <IconDefaultUser className={defaultImg} />
          ) : (
            <div className={userAvatar}>
              <img src={follow.avatar} alt="" />
            </div>
          )}
        </div>
        <div className={cardTitle}>{follow.name}</div>
      </div>
      <div className={cardButton}>
        <SecondaryButton
          onClick={(event) => {
            event.stopPropagation()
            onFollow?.({ isFollow: data.isFollow, id: theId })
          }}
        >
          {data.isFollow ? '追隨中' : '追隨'}
        </SecondaryButton>
      </div>
    </div>
  )
}

export default FollowerCard
