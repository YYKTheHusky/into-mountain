// postId,title, image, difficulty, userId, userAvatar, createdAt, updatedAt,...
import styles from './ReviewsListCard.module.scss'
import { ReactComponent as IconStar } from 'assets/icons/icon-star.svg'
import { ReactComponent as IconLikeActive } from 'assets/icons/like-active.svg'
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
  infoCollectCount
} = styles

const ReviewListCard = ({ data }) => {
  return (
    <div className={reviewListCarContainer}>
      <div className={reviewListCarImg}>
        <img src={data.image} alt="" />
      </div>
      <div className={reviewListCarTitle}>
        {data.title}
        {/* <span>({data.difficulty})</span> */}
      </div>
      <div className={reviewListCarInfo}>
        <div className={avatar}>
          <img src={data.userAvatar} alt="" />
        </div>
        <div className={info}>
          <div className={infoName}>{data.userName}</div>
          <div className={infoContainer}>
            <div className={infoTime}>{data.createdAt}</div>
            <div className={infoCollectCount}>{data.favoriteCount}人收藏</div>
            <div>
              <IconStar />
              {data.recommend}
            </div>
            <div>
              <IconLikeActive />
              {data.likeCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewListCard
