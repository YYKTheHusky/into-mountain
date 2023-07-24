import styles from './Nav.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification.svg'
import { ReactComponent as IconUser } from 'assets/icons/icon-user.svg'
import BurgerModal from 'components/BurgerModal/BurgerModal'
const {
  navContainer,
  left,
  right,
  rightListItem,
  rightListIcon,
  user,
  burger
} = styles

const Nav = () => {
  return (
    <div className={navContainer}>
      <div className={left}>
        <div className={burger}>
          <BurgerModal />
        </div>
        <IconLogo />
        <span>登山小站</span>
      </div>
      <div className={right}>
        <div className={rightListItem}>找路徑</div>
        <div className={rightListItem}>找心得</div>
        <button>
          <IconAdd />
          我的心得
        </button>
        <IconNotification className={rightListIcon} />
        <IconUser className={`${user} ${rightListIcon}`} />
      </div>
    </div>
  )
}
export default Nav
