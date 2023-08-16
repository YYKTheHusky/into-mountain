import { useNavigate } from 'react-router-dom'
import { formatDateWithTime } from 'utils/time.js'
// scss
import styles from 'components/TrailsInformation/TrailReport.module.scss'

// svg
import defaultUser from 'assets/icons/user.svg'

export default function TrailReport({ report }) {
  const navigate = useNavigate()
  return (
    <div className={styles.trailReport}>
      <div className={styles.userInfo}>
        <div className={styles.user}>
          <img
            className={`${styles.userIcon} cursor-point`}
            src={report.User.avatar ? report.User.avatar : defaultUser}
            alt="userIcon"
            onClick={() => navigate(`/user/${report.User.id}/myReviews`)}
          />
          <span
            className={`${styles.userName} cursor-point`}
            onClick={() => navigate(`/user/${report.User.id}/myReviews`)}
          >
            {report.User.name}
          </span>
        </div>
        <span className={styles.time}>
          {formatDateWithTime(report.createdAt)}
        </span>
      </div>
      <div className={styles.messageContainer}>
        <span className={styles.message}>{report.description}</span>
      </div>
    </div>
  )
}
