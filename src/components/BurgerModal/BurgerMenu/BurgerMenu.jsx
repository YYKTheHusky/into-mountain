import { useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
const {
  menuContainer,
  menuListItem,
  login,
  account,
  accountTitle,
  chevron,
  accountList
} = styles

const BurgerMenu = () => {
  const [accountToggle, setAccountToggle] = useState(false)

  return (
    <>
      <div className={menuContainer}>
        <div className={menuListItem}>首頁</div>
        <div className={menuListItem}>路徑</div>
        <div className={menuListItem}>找心得</div>
        <div
          className={`${menuListItem} ${account}`}
          data-phase={accountToggle}
        >
          <div
            className={accountTitle}
            onClick={() => setAccountToggle(!accountToggle)}
          >
            我的帳號
            <IconChevronRight className={chevron} />
          </div>
          <div className={accountList}>
            <div>關於我</div>
            <div>我的收藏</div>
            <div>我的心得</div>
          </div>
        </div>
        <div className={menuListItem}>通知</div>
        <button>+我的心得</button>
        <span></span>
      </div>
      <div className={login}>登入</div>
    </>
  )
}

export default BurgerMenu
