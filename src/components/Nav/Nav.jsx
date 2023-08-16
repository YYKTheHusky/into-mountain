import styles from './Nav.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification.svg'
import { ReactComponent as IconUser } from 'assets/icons/icon-user.svg'
import BurgerModal from 'components/BurgerModal/BurgerModal'
import { OvalButtonSmall } from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const {
  navContainer,
  left,
  right,
  rightListItem,
  rightListIcon,
  user,
  avatar,
  burger,
  postReviewButton,
  innerContainer
} = styles

const Nav = ({ updateCardInfo }) => {
  const navigate = useNavigate()
  const currentUserId = localStorage.getItem('currentUserId')
  let currentUserAvatar = localStorage.getItem('currentUserAvatar')
  useEffect(() => {
    currentUserAvatar = localStorage.getItem('currentUserAvatar')
  }, [updateCardInfo])

  return (
    <div className={navContainer}>
      <div className={innerContainer}>
        <div className={burger}>
          <BurgerModal />
        </div>
        <div className={left} onClick={() => navigate('/')}>
          <IconLogo />
          <span>登山小站</span>
        </div>
        <div className={right}>
          <div
            className={rightListItem}
            onClick={() => navigate('/search/allTrails')}
          >
            找路徑
          </div>
          <div
            className={rightListItem}
            onClick={() => navigate('/search/allReviews')}
          >
            找心得
          </div>
          <div
            className={postReviewButton}
            onClick={() => navigate('/newReview')}
          >
            <OvalButtonSmall>
              <IconAdd /> <span>我的心得</span>
            </OvalButtonSmall>
          </div>
          <IconNotification
            className={rightListIcon}
            onClick={() => {
              if (currentUserId) {
                navigate(`/user/${currentUserId}/notification`)
              } else {
                navigate('/login')
              }
            }}
          />
          {currentUserId ? (
            <div
              className={`${avatar} ${rightListIcon}`}
              onClick={() => navigate(`/user/${currentUserId}/myReviews`)}
            >
              <img src={currentUserAvatar} alt="" />
            </div>
          ) : (
            <IconUser
              className={`${user} ${rightListIcon}`}
              onClick={() => navigate('/login')}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default Nav
