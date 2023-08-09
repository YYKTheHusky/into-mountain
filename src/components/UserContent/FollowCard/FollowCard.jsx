import styles from './FollowCard.module.scss'
import { SecondaryButton } from 'components/Button/Button'
const { followerCardCointainer, cardHead, cardAvatar, cardTitle, cardButton } =
  styles

const FollowerCard = ({ data, fallow }) => {
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
        onClick={() => {
          console.log(data.id)
        }}
        >
          {data.isFollow ? '追隨中' : '追隨'}
        </SecondaryButton>
      </div>
    </div>
  )
}

export default FollowerCard
