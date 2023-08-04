import styles from 'components/ToolTips/AvatarToolTip.module.scss'
import { useState } from 'react'

export default function AvatarToolTip({ name }) {
  const [isVisible, setIsVisible] = useState(false)

  const getPersonData = (name) => {
    switch (name) {
      case 'Kelly':
        return { name: 'Kelly', title: 'Front-End' }
      case 'Kevin':
        return { name: 'Kevin', title: 'Back-End' }
      case 'Chc':
        return { name: 'Chc', title: 'Back-End' }
      case 'Ywj':
        return { name: 'Ywj', title: 'Front-End' }
    }
  }

  const person = getPersonData(name)

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className={styles.tooltip}>
          <div className={styles.title}>{person.title}</div>
          <div className={styles.Name}>{person.name}</div>
        </div>
      )}
    </div>
  )
}
