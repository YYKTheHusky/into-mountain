import { useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
import { OvalButtonSmall } from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'

const {
  menuContainer,
  menuListItem,
  login,
  account,
  accountTitle,
  chevron,
  accountList,
  postReviewButton
} = styles

const BurgerMenu = ({ onBurgerToggle }) => {
  const [accountToggle, setAccountToggle] = useState(false)
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path)
    onBurgerToggle()
  }

  return (
    <>
      <div className={menuContainer}>
        <div className={menuListItem} onClick={() => handleNavigate('/')}>
          首頁
        </div>
        <div className={menuListItem} onClick={() => handleNavigate('/trail')}>
          找路徑
        </div>
        <div className={menuListItem} onClick={() => handleNavigate('/review')}>
          找心得
        </div>
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
            <div onClick={() => handleNavigate('/user/1/myReviews')}>
              關於我
            </div>
            <div onClick={() => handleNavigate('/user/1/trailCollection')}>
              我的收藏
            </div>
            <div onClick={() => handleNavigate('/user/1/myReviews')}>
              我的心得
            </div>
          </div>
        </div>
        <div className={menuListItem}>通知</div>
        <div className={postReviewButton}>
          <OvalButtonSmall>+我的心得</OvalButtonSmall>
        </div>
        <span></span>
      </div>
      <div className={login}>登入</div>
    </>
  )
}

export default BurgerMenu
