import styles from './Nav.module.scss'
import Burgur from 'components/Burger/Burger'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import { ReactComponent as IconAdd } from 'assets/icons/icon-add.svg'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification.svg'
import { ReactComponent as IconUser } from 'assets/icons/icon-user.svg'
const { navContainer, left, right, user, burger } = styles

const Nav = () => {
  return (
    <div className={navContainer}>
      <div className={left}>
        <div className={burger}>
          <Burgur />
        </div>
        <IconLogo />
        <span>登山小站</span>
      </div>
      <div className={right}>
        <div>找路徑</div>
        <div>找心得</div>
        <button>
          <IconAdd />
          我的心得
        </button>
        <IconNotification />
        <IconUser className={user} />
      </div>
    </div>
  )
}
export default Nav
