import styles from './InfoCard.module.scss'
const {
  infoCardContainer,
  card,
  avatar,
  myName,
  aboutMe,
  count,
  infoSet,
  countTitle,
  countTitle2,
  information
} = styles

const InfoCard = ({ data, onAcitveContent }) => {
  return (
    <div className={infoCardContainer}>
      <div className={card}>
        <div className={avatar}>
          <img src={data.avatar} alt="" />
        </div>
        <div className={information}>
          <div className={myName}>{data.name}</div>
          <div className={aboutMe}>{data.introduction}</div>
          <span></span>
          <div className={count}>
            <div>
              <div className={countTitle}>關注</div>
              <div onClick={() => onAcitveContent('following')}>
                {data.followerCount}
              </div>
            </div>
            <div>
              <div className={countTitle}>粉絲</div>
              <div onClick={() => onAcitveContent('follower')}>
                {data.followingCount}
              </div>
            </div>
            <div>
              <div className={countTitle2}>總讚數</div>
              <div>{data.PostLikeCount}</div>
            </div>
          </div>
          <span></span>
          <div
            className={infoSet}
            onClick={() => onAcitveContent('infoSetting')}
          >
            編輯個人資料
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
