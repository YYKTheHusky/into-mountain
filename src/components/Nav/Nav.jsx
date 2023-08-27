import styles from './Nav.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification.svg'
import { ReactComponent as IconUser } from 'assets/icons/icon-user.svg'
import { ReactComponent as IconUserDefault } from 'assets/icons/user.svg'
import BurgerModal from 'components/BurgerModal/BurgerModal'
import Button from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getUserNotifications } from 'api/user'

const {
  navContainer,
  left,
  logo,
  right,
  rightListItem,
  rightListIcon,
  user,
  avatar,
  burger,
  postReviewButton,
  innerContainer,
  notificationContainer
} = styles

const Avt = ({ currentUserId, currentUserAvatar }) => {
  const navigate = useNavigate()
  if (!currentUserId) {
    return (
      <IconUser
        className={`${user} ${rightListIcon}`}
        onClick={() => navigate('/login')}
      />
    )
  } else {
    if (currentUserAvatar === 'null') {
      return (
        <IconUserDefault
          className={`${user} ${rightListIcon}`}
          onClick={() => navigate(`/user/${currentUserId}/myReviews`)}
        />
      )
    }
  }
  return (
    <div
      className={`${avatar} ${rightListIcon}`}
      onClick={() => navigate(`/user/${currentUserId}/myReviews`)}
    >
      <img src={currentUserAvatar} alt="" />
    </div>
  )
}

const Nav = ({ updateCardInfo }) => {
  const [notiData, setNotiData] = useState(null)
  const navigate = useNavigate()
  const currentUserId = localStorage.getItem('currentUserId')
  let currentUserAvatar = localStorage.getItem('currentUserAvatar')

  useEffect(() => {
    currentUserAvatar = localStorage.getItem('currentUserAvatar')
  }, [updateCardInfo])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      try {
        const getUserNotificationsAsync = async () => {
          const data = await getUserNotifications(
            localStorage.getItem('currentUserId')
          )
          if (data.filter((item) => !item.isRead).length > 0) {
            setNotiData(data.filter((item) => !item.isRead))
          } else {
            setNotiData(null)
          }
        }
        getUserNotificationsAsync()
      } catch (error) {
        console.error(error)
      }
    }
  }, [updateCardInfo])

  return (
    <div className={navContainer}>
      <div className={innerContainer}>
        <div className={burger}>
          <BurgerModal />
        </div>
        <div className={left} onClick={() => navigate('/')}>
          <IconLogo className={logo} />
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
            <Button
              style="ovalButtonSmall"
              text={
                <>
                  <IconAdd /> <span>我的心得</span>
                </>
              }
            />
          </div>
          <span className={notificationContainer}>
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
            {notiData && <span></span>}
          </span>
          <Avt
            currentUserId={currentUserId}
            currentUserAvatar={currentUserAvatar}
          />
        </div>
      </div>
    </div>
  )
}
export default Nav
