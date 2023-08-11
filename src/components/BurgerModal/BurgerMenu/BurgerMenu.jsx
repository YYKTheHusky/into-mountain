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
  const currentUserId = localStorage.getItem('currentUserId')

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
            <div
              onClick={() => handleNavigate(`/user/${currentUserId}/myReviews`)}
            >
              關於我
            </div>
            <div
              onClick={() =>
                handleNavigate(`/user/${currentUserId}/trailCollection`)
              }
            >
              我的收藏
            </div>
            <div
              onClick={() => handleNavigate(`/user/${currentUserId}/myReviews`)}
            >
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
      {currentUserId ? (
        <div
          className={login}
          onClick={() => {
            handleNavigate('/')
            localStorage.clear()
          }}
        >
          登出
        </div>
      ) : (
        <div className={login} onClick={() => handleNavigate('/login')}>
          登入
        </div>
      )}
    </>
  )
}

export default BurgerMenu
