import styles from './Nav.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification.svg'
import { ReactComponent as IconUser } from 'assets/icons/icon-user.svg'
import BurgerModal from 'components/BurgerModal/BurgerModal'
import { OvalButtonSmall } from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'

const {
  navContainer,
  left,
  right,
  rightListItem,
  rightListIcon,
  user,
  burger,
  postReviewButton,
  innerContainer
} = styles

const Nav = () => {
  const navigate = useNavigate()

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
          <div className={rightListItem} onClick={() => navigate('/trail')}>
            找路徑
          </div>
          <div className={rightListItem} onClick={() => navigate('/review')}>
            找心得
          </div>
          <div className={postReviewButton}>
            <OvalButtonSmall>
              <IconAdd /> <span>我的心得</span>
            </OvalButtonSmall>
          </div>
          <IconNotification
            className={rightListIcon}
            onClick={() => navigate('/user/1/notification')}
          />
          <IconUser
            className={`${user} ${rightListIcon}`}
            onClick={() => navigate('/user/1/myReviews')}
          />
        </div>
      </div>
    </div>
  )
}
export default Nav
