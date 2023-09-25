import styles from 'components/ToolTips/AvatarToolTip.module.scss'
import { useState } from 'react'

export default function AvatarToolTip({ contributor }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className={styles.tooltip}>
          <div className={styles.title}>{contributor.title}</div>
          <div className={styles.Name}>{contributor.name}</div>
        </div>
      )}
    </div>
  )
}
