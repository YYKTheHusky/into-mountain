import styles from './InfoCard.module.scss'
import { ReactComponent as IconGear } from 'assets/icons/icon-gear.svg'
import iconUser, {
  ReactComponent as IconDefaultUser
} from 'assets/icons/icon-user.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconMinus } from 'assets/icons/icon-minus.svg'
import { useEffect, useState } from 'react'
import { followUser, unFollowUser } from 'api/followship'

const {
  infoCardContainer,
  card,
  avatar,
  defaultImg,
  myName,
  aboutMe,
  count,
  infoSet,
  countTitle,
  countTitle2,
  information,
  infoSetGroup,
  infoSetIcon
} = styles

const InfoCard = ({ data, onAcitveContent, theUserId, followingList }) => {
  let currentUserId = ''
  if (localStorage.getItem('currentUserId')) {
    currentUserId = localStorage.getItem('currentUserId')
  }
  const [checkFollowing, setCheckFollowing] = useState(null)
  const handleFollow = async ({ isFollow, theUserId }) => {
    try {
      if (isFollow) {
        await unFollowUser(theUserId)
        setCheckFollowing(null)
      } else {
        await followUser(theUserId)
        setCheckFollowing(theUserId)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setCheckFollowing(
      followingList.find((item) => String(item.followingId) === theUserId)
    )
  }, [followingList, theUserId])

  return (
    <div className={infoCardContainer}>
      <div className={card}>
        <div className={avatar}>
          {data.avatar === null ? (
            <IconDefaultUser className={defaultImg} />
          ) : (
            <img
              src={data.avatar}
              onError={(e) => {
                e.target.src = iconUser
              }}
              alt="avatar"
            />
          )}
        </div>
        <div className={information}>
          <div className={myName}>{data.name}</div>
          <div className={aboutMe}>{data.introduction}</div>
          <span></span>
          <div className={count}>
            <div>
              <div className={countTitle}>關注</div>
              <div onClick={() => onAcitveContent('following')}>
                {data.followingCount}
              </div>
            </div>
            <div>
              <div className={countTitle}>粉絲</div>
              <div onClick={() => onAcitveContent('follower')}>
                {data.followerCount}
              </div>
            </div>
            <div>
              <div className={countTitle2}>被收藏</div>
              <div>{data.favoritePostCount}</div>
            </div>
          </div>
          <InfoCardBtn
            theUserId={theUserId}
            currentUserId={currentUserId.toString()}
            onAcitveContent={onAcitveContent}
            checkFollowing={checkFollowing}
            onFollow={handleFollow}
          />
        </div>
      </div>
    </div>
  )
}

export default InfoCard

const InfoCardBtn = ({
  theUserId,
  currentUserId,
  onAcitveContent,
  checkFollowing,
  onFollow
}) => {
  if (currentUserId === '') {
    return
  }
  if (theUserId === currentUserId) {
    return (
      <>
        <span></span>
        <div className={infoSet} onClick={() => onAcitveContent('setting')}>
          <IconGear className={infoSetIcon} />
          編輯個人資料
        </div>
      </>
    )
  } else {
    return (
      <>
        <span></span>
        <div className={infoSet}>
          {checkFollowing ? (
            <div
              className={infoSetGroup}
              onClick={() => onFollow?.({ isFollow: true, theUserId })}
            >
              <IconMinus className={infoSetIcon} />
              <div>取消追隨</div>
            </div>
          ) : (
            <div
              className={infoSetGroup}
              onClick={() => onFollow?.({ isFollow: false, theUserId })}
            >
              <IconAdd className={infoSetIcon} />
              <div>追隨</div>
            </div>
          )}
        </div>
      </>
    )
  }
}
