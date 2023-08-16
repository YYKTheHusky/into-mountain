// scss
import styles from 'components/Modal/ShareModal.module.scss'
// svg
import { ReactComponent as LineIcon } from 'assets/icons/line-logo.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-logo.svg'

export default function ShareModal({ RWD }) {
  const currentURL = window.location.href
  return (
    <div className={RWD ? styles.RWDModalBody : styles.normalModalBody}>
      <div className={styles.text}>分享至</div>
      <a
        className={styles.buttonContainer}
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className={styles.icon} />
        facebook
      </a>
      <a
        className={styles.buttonContainer}
        href={`https://social-plugins.line.me/lineit/share?url=${currentURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LineIcon className={styles.icon} />
        line
      </a>
    </div>
  )
}
