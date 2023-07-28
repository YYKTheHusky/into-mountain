import { useState } from 'react'
import styles from './FollowCard.module.scss'
import { SecondaryButton } from 'components/Button/Button'
const { followerCardCointainer, cardAvatar, cardTitle, cardButton } = styles

const FollowerCard = () => {
  const [isFollow, setIsFollow] = useState(false)

  return (
    <div className={followerCardCointainer}>
      <div className={cardAvatar}>
        <img src="https://picsum.photos/id/237/200/300" alt="" />
      </div>
      <div className={cardTitle}>名稱</div>
      <div className={cardButton}>
        <SecondaryButton
          onClick={() => {
            setIsFollow(!isFollow)
          }}
        >
          {isFollow ? '追隨中' : '追隨'}
        </SecondaryButton>
      </div>
    </div>
  )
}

export default FollowerCard
