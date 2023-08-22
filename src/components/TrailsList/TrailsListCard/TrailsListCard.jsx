import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// scss
import styles from './TrailsListCard.module.scss'
// svg
import { ReactComponent as IconLabel } from 'assets/icons/icon-label.svg'
import { ReactComponent as IconStar } from 'assets/icons/icon-star.svg'
import { ReactComponent as IconClock } from 'assets/icons/icon-clock.svg'
// component
import { DifficultyTag } from 'components/Tag/Tag'
// api
import { addFavoriteTrail, deleteFavoriteTrail } from 'api/trail'

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
  const [cardLabel, setCardLabel] = useState(data.isFavorite)
  const [favoriteCount, setFavoriteCount] = useState(data.favoriteCount)

  const handleFavorite = async () => {
    if (!cardLabel) {
      const { success } = await addFavoriteTrail(data.id)
      if (success === true) {
        setCardLabel(true)
        setFavoriteCount(favoriteCount + 1)
      }
    } else if (cardLabel) {
      const { success } = await deleteFavoriteTrail(data.id)
      if (success === true) {
        setCardLabel(false)
        setFavoriteCount(favoriteCount - 1)
      }
    }
  }

  return (
    <div>
      <div className={trailsListCardContainer}>
        <img
          className="cursor-point"
          src={data.image}
          alt="cover-photo"
          onClick={() => navigate(`/trail/${data.id}/detail`)}
        />
        <IconLabel
          className={label}
          data-favorite={cardLabel}
          onClick={handleFavorite}
        />
        <div className={difTag}>
          <DifficultyTag>{data.difficulty}</DifficultyTag>
        </div>
      </div>
      <div className={descriptionContainer}>
        <div
          className={`${descriptionType1} cursor-point`}
          onClick={() => navigate(`/trail/${data.id}/detail`)}
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
            <IconStar /> {favoriteCount}人收藏
          </span>
        </div>
      </div>
    </div>
  )
}

export default TrailsListCard
