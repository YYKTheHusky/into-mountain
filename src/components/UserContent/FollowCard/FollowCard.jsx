import styles from './FollowCard.module.scss'
import { SecondaryButton } from 'components/Button/Button'
const { followerCardCointainer, cardHead, cardAvatar, cardTitle, cardButton } =
  styles

const FollowerCard = ({ data, fallow, onFollow }) => {
  let theId
  if (data.Following) {
    theId = data.Following.id
  } else {
    theId = data.Follower.id
  }
  return (
    <div className={followerCardCointainer}>
      <div className={cardHead}>
        <div className={cardAvatar}>
          <img src={fallow.avatar} alt="" />
        </div>
        <div className={cardTitle}>{fallow.name}</div>
      </div>
      <div className={cardButton}>
        <SecondaryButton
          onClick={() => onFollow?.({ isFollow: data.isFollow, id: theId })}
        >
          {data.isFollow ? '追隨中' : '追隨'}
        </SecondaryButton>
      </div>
    </div>
  )
}

export default FollowerCard
