import AdminNav from 'components/AdminNav/AdminNav'
import styles from './AdminMainPage.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import AdminMainContent from 'components/AdminMainContent/AdminMainContent'
const { adminMainPageContainer, nav, right, rightHead, logo } = styles

export default function AdminMainPage() {
  return (
    <div className="container mx-auto">
      <div className={adminMainPageContainer}>
        <div className={nav}>
          <AdminNav />
        </div>
        <div className={right}>
          <div className={rightHead}>
            <IconLogo className={logo} />
          </div>
          <AdminMainContent />
        </div>
      </div>
    </div>
  )
}
