import AdminNav from 'components/AdminNav/AdminNav'
import styles from './AdminMainPage.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import AdminMainContent from 'components/AdminMainContent/AdminMainContent'
import { useState } from 'react'
const { adminMainPageContainer, nav, right, rightHead, logo } = styles

export default function AdminMainPage() {
  const [page, setPage] = useState('userList')
  const handlePage = (type) => {
    setPage(type)
  }
  return (
    <div className="container mx-auto">
      <div className={adminMainPageContainer}>
        <div className={nav}>
          <AdminNav onPage={handlePage} />
        </div>
        <div className={right}>
          <div className={rightHead}>
            <IconLogo className={logo} />
            <button>登出</button>
          </div>
          <AdminMainContent page={page} />
        </div>
      </div>
    </div>
  )
}
