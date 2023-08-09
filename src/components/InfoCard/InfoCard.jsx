import styles from './InfoCard.module.scss'
import { ReactComponent as IconGear } from 'assets/icons/icon-gear.svg'
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
  information,
  infoSetIcon
} = styles

const InfoCard = ({ data, onAcitveContent, theUserId }) => {
  const currentUserId = localStorage.getItem('currentUserId')

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
              <div>{data.favoritePostCount}</div>
            </div>
          </div>

          {theUserId === currentUserId.toString() && (
            <>
              <span></span>
              <div
                className={infoSet}
                onClick={() => onAcitveContent('setting')}
              >
                <IconGear className={infoSetIcon} />
                編輯個人資料
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
