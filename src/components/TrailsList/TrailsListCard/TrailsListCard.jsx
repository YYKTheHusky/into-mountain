import { ReactComponent as IconLabel } from 'assets/icons/icon-label.svg'
import { ReactComponent as IconStar } from 'assets/icons/icon-star.svg'
import { ReactComponent as IconClock } from 'assets/icons/icon-clock.svg'
import styles from './TrailsListCard.module.scss'
import { useState } from 'react'
import { DifficultyTag } from 'components/Tag/Tag'
import { useNavigate } from 'react-router-dom'
const {
  trailsListCardContainer,
  label,
  descriptionContainer,
  descriptionType1,
  descriptionType2,
  difTag
} = styles

const TrailsListCard = ({ data }) => {
  const navigate = useNavigate()
  const [cardLabel, setCardLabel] = useState(false)

  return (
    <div>
      <div className={trailsListCardContainer}>
        <img
          className="cursor-point"
          src={data.image}
          alt="cover-photo"
          onClick={() => navigate(`/trail/${data.trailID}/detail`)}
        />
        <IconLabel
          className={label}
          data-favorite={cardLabel}
          onClick={() => setCardLabel(!cardLabel)}
        />
        <div className={difTag}>
          <DifficultyTag>{data.difficulty}</DifficultyTag>
        </div>
      </div>
      <div className={descriptionContainer}>
        <div
          className={`${descriptionType1} cursor-point`}
          onClick={() => navigate(`/trail/${data.trailID}/detail`)}
        >
          {' '}
          {data.title}
        </div>
        <div className={descriptionType2}>
          <span>距離 {data.distance}</span>
          <span>
            <IconClock /> {data.duration}
          </span>
          <span>
            <IconStar /> {data.favoriteCount}人收藏
          </span>
        </div>
      </div>
    </div>
  )
}

export default TrailsListCard
