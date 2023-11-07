import styles from './AdminNav.module.scss'
// import { ReactComponent as IconNotification2 } from 'assets/icons/icon-notification2.svg'
import { ReactComponent as IconUserSlash } from 'assets/icons/icon-user-large-slash.svg'
import { ReactComponent as IconUserGroup } from 'assets/icons/icon-user-group.svg'
import { ReactComponent as IconAlignLeft } from 'assets/icons/icon-align-left.svg'
import { ReactComponent as IconCaretLeft } from 'assets/icons/icon-caret-left.svg'
import { ReactComponent as IconLogout } from 'assets/icons/icon-logout.svg'
import { clsx } from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'components/Avatar/Avatar'
const {
  adminNavContainer,
  headerInfo,
  content,
  listItem,
  listItemLabel,
  expand,
  footer,
  footerTrans,
  icon,
  adminPhoto,
  logout,
  active
} = styles

const AdminNav = ({ onPage, page }) => {
  const [navExpand, setNavExpand] = useState(false)
  const [fixed, setFixed] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={adminNavContainer}>
      <div
        className={headerInfo}
        onMouseOver={() => {
          if (fixed) {
            return
          }
          setNavExpand(true)
        }}
        onMouseOut={() => {
          if (fixed) {
            return
          }
          setNavExpand(false)
        }}
      >
        <div className={listItem} title="管理員">
          <div className={adminPhoto}>
            <Avatar avatar={localStorage.getItem('adminAvatar')} />
          </div>
          <span className={clsx(listItemLabel, navExpand && expand)}>
            {localStorage.getItem('adminName')
              ? localStorage.getItem('adminName')
              : '管理員'}
          </span>
        </div>
        {/* <div className={listItem} title="最新通知">
          <IconNotification2 className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            最新通知
          </span>
        </div> */}
      </div>
      <div
        className={content}
        onMouseOver={() => {
          if (fixed) {
            return
          }
          setNavExpand(true)
        }}
        onMouseOut={() => {
          if (fixed) {
            return
          }
          setNavExpand(false)
        }}
      >
        <div>
          <div
            className={`${listItem} ${page === 'userList' ? active : ''}`}
            title="使用者清單"
            onClick={() => {
              onPage?.('userList')
              navigate('/admin/allUser')
            }}
          >
            <IconUserGroup className={icon} />
            <span className={clsx(listItemLabel, navExpand && expand)}>
              使用者清單
            </span>
          </div>
          <div
            className={`${listItem} ${page === 'susUserList' ? active : ''}`}
            title="被停權的使用者"
            onClick={() => {
              onPage?.('susUserList')
              navigate('/admin/blockUser')
            }}
          >
            <IconUserSlash className={icon} />
            <span className={clsx(listItemLabel, navExpand && expand)}>
              被停權的使用者
            </span>
          </div>

          <div
            className={`${listItem} ${page === 'reviewList' ? active : ''}`}
            title="被檢舉的心得清單"
            onClick={() => {
              onPage?.('reviewList')
              navigate('/admin/reportReview')
            }}
          >
            <IconAlignLeft className={icon} />
            <span className={clsx(listItemLabel, navExpand && expand)}>
              被檢舉的心得清單
            </span>
          </div>
        </div>
        <div
          className={`${listItem} ${logout}`}
          title="登出"
          onClick={() => {
            localStorage.clear()
            navigate('/admin/login')
          }}
        >
          <IconLogout className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>登出</span>
        </div>
      </div>
      <div
        className={clsx(footer, navExpand && footerTrans)}
        onClick={() => {
          setNavExpand(!navExpand)
          setFixed(!fixed)
        }}
      >
        <IconCaretLeft className={icon} />
      </div>
    </div>
  )
}

export default AdminNav
