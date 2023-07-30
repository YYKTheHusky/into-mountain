import styles from './AdminNav.module.scss'
import { ReactComponent as IconPerson } from 'assets/icons/icon-person.svg'
import { ReactComponent as IconNotification2 } from 'assets/icons/icon-notification2.svg'
import { ReactComponent as IconUserSlash } from 'assets/icons/icon-user-large-slash.svg'
import { ReactComponent as IconUserGroup } from 'assets/icons/icon-user-group.svg'
import { ReactComponent as IconAlignLeft } from 'assets/icons/icon-align-left.svg'
import { ReactComponent as IconCaretLeft } from 'assets/icons/icon-caret-left.svg'
import { clsx } from 'clsx'
import { useState } from 'react'
const {
  adminNavContainer,
  headerInfo,
  content,
  listItem,
  listItemLabel,
  expand,
  footer,
  footerTrans,
  icon
} = styles

const AdminNav = ({ onPage }) => {
  const [navExpand, setNavExpand] = useState(false)
  const [fixed, setFixed] = useState(false)

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
          <IconPerson className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            管理員1號
          </span>
        </div>
        <div className={listItem} title="最新通知">
          <IconNotification2 className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            最新通知
          </span>
        </div>
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
        <div
          className={listItem}
          title="使用者清單"
          onClick={() => onPage?.('userList')}
        >
          <IconUserGroup className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            使用者清單
          </span>
        </div>
        <div
          className={listItem}
          title="被停權的使用者"
          onClick={() => onPage?.('susUserList')}
        >
          <IconUserSlash className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            被停權的使用者
          </span>
        </div>

        <div
          className={listItem}
          title="被檢舉的心得清單"
          onClick={() => onPage?.('reviewList')}
        >
          <IconAlignLeft className={icon} />
          <span className={clsx(listItemLabel, navExpand && expand)}>
            被檢舉的心得清單
          </span>
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
