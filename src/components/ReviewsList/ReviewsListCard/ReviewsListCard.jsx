import { useNavigate } from 'react-router-dom'
import formatDateTime from 'utils/time.js'
// scss
import styles from './ReviewsListCard.module.scss'
// svg
import { ReactComponent as IconStar } from 'assets/icons/icon-star.svg'
import { ReactComponent as IconLikeActive } from 'assets/icons/like-active.svg'
import UserIcon from 'assets/icons/user.svg'
// component
import { ColorTag } from 'components/Tag/Tag'

const {
  reviewListCarContainer,
  reviewListCarImg,
  reviewListCarTitle,
  reviewListCarInfo,
  avatar,
  info,
  infoName,
  infoContainer,
  infoTime,
  infoCollectCount,
  tag
} = styles

const ReviewListCard = ({ data }) => {
  const navigate = useNavigate()
  const newTime = formatDateTime(data.createdAt)

  const navigateToPost = (e) => {
    e.stopPropagation()
    navigate(`/review/${data.id}`)
  }

  const navigateToAuthor = (e) => {
    e.stopPropagation()
    navigate(`/user/${data.User.id}/myReviews`)
  }
  return (
    <div
      className={`${reviewListCarContainer} cursor-point`}
      onClick={navigateToPost}
    >
      <div className={reviewListCarImg}>
        <img src={data.image} alt="post-photo" />
        <div className={tag}>
          <ColorTag>{data.category}</ColorTag>
        </div>
      </div>
      <div className={reviewListCarTitle}>{data.title}</div>
      <div className={reviewListCarInfo}>
        <div className={`${avatar} cursor-point`} onClick={navigateToAuthor}>
          <img
            src={data.User.avatar ? data.User.avatar : UserIcon}
            alt="user-avatar"
          />
        </div>
        <div className={info}>
          <div
            className={`${infoName} cursor-point`}
            onClick={navigateToAuthor}
          >
            {data.User.name}
          </div>
          <div className={infoContainer}>
            <div className={infoTime}>{newTime}</div>
            <div className={infoCollectCount}>
              <IconLikeActive />
              {data.likeCount}人案讚
            </div>
            <div className={infoCollectCount}>
              <IconStar />
              {data.favoriteCount}人收藏
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewListCard
