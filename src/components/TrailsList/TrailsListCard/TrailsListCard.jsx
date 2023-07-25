import { ReactComponent as IconLabel } from 'assets/icons/icon-label.svg'
import { ReactComponent as IconStar } from 'assets/icons/icon-star.svg'
import { ReactComponent as IconClock } from 'assets/icons/icon-clock.svg'
import styles from './TrailsListCard.module.scss'
import { useState } from 'react'
const {
  trailsListCardContainer,
  label,
  descriptionContainer,
  descriptionType1,
  descriptionType2,
  descriptionType3
} = styles

const TrailsListCard = ({ data }) => {
  const [cardLabel, setCardLabel] = useState(false)

  return (
    <div>
      <div className={trailsListCardContainer}>
        <img src="https://picsum.photos/seed/picsum/200/200" alt="fake" />
        <IconLabel
          className={label}
          data-favorite={cardLabel}
          onClick={() => setCardLabel(!cardLabel)}
        />
      </div>
      <div className={descriptionContainer}>
        <div className={descriptionType1}>
          <span>
            {data.difficulty}‧<IconStar /> {data.favoriteCount}
          </span>
        </div>
        <div className={descriptionType2}> {data.title}</div>
        <div className={descriptionType3}>
          <span>距離 {data.distance}</span>
          <span>
            <IconClock /> {data.duration}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TrailsListCard
