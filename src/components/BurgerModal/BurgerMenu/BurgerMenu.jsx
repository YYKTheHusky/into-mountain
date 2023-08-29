import { useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
import Button from 'components/Button/Button'
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
        <div
          className={menuListItem}
          onClick={() => handleNavigate('/search/allTrails')}
        >
          找路徑
        </div>
        <div
          className={menuListItem}
          onClick={() => handleNavigate('/search/allReviews')}
        >
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
              onClick={() => {
                if (currentUserId) {
                  handleNavigate(`/user/${currentUserId}/myReviews`)
                } else {
                  navigate('/login')
                }
              }}
            >
              關於我
            </div>
            <div
              onClick={() => {
                if (currentUserId) {
                  handleNavigate(`/user/${currentUserId}/trailCollection`)
                } else {
                  navigate('/login')
                }
              }}
            >
              我的收藏
            </div>
            <div
              onClick={() => {
                if (currentUserId) {
                  handleNavigate(`/user/${currentUserId}/myReviews`)
                } else {
                  navigate('/login')
                }
              }}
            >
              我的心得
            </div>
          </div>
        </div>
        <div
          className={menuListItem}
          onClick={() => {
            if (currentUserId) {
              navigate(`/user/${currentUserId}/notification`)
            } else {
              navigate('/login')
            }
          }}
        >
          通知
        </div>
        <div className={postReviewButton}>
          <Button
            style="ovalButtonSmall"
            text="+ 我的心得"
            onClick={() => navigate('/newReview')}
          />
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
