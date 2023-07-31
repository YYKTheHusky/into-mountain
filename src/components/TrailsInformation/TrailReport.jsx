// scss
import styles from 'components/TrailsInformation/TrailReport.module.scss'

// svg
import temptIcon from 'assets/icons/facebook-logo.svg'
import { useNavigate } from 'react-router-dom'

export default function TrailReport() {
  const navigate = useNavigate()
  return (
    <div className={styles.trailReport}>
      <div className={styles.userInfo}>
        <div className={styles.user}>
          <img
            className={`${styles.userIcon} cursor-point`}
            src={temptIcon}
            alt="temptIcon"
            onClick={() => navigate(`/user/userId/myReviews`)}
          />
          <span
            className={`${styles.userName} cursor-point`}
            onClick={() => navigate(`/user/userId/myReviews`)}
          >
            userNameIshere名字字字
          </span>
        </div>
        <span className={styles.time}>2099-11-01, 13:50</span>
      </div>
      <div className={styles.messageContainer}>
        <span className={styles.message}>
          我的回報在這裡幽幽幽幽幽幽一優歐悠悠一歐優依優歐優依優歐優依優歐優悠悠一優
        </span>
      </div>
    </div>
  )
}
