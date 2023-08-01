import React, { useEffect, useState } from 'react'
import styles from 'components/Input/IconRadioInput.module.scss'

// svg
import difficultyIcon from 'assets/icons/difficulty.svg'
import difficultyIconWhite from 'assets/icons/difficulty-white.svg'
import recommendIcon from 'assets/icons/recommended-like-active.svg'
import recommendIconWhite from 'assets/icons/recommended-like.svg'

export default function IconRadioInput({ iconType, onChange }) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [defaultIcon, setDefaultIcon] = useState(null)
  const [activeIcon, setActiveIcon] = useState(null)

  useEffect(() => {
    if (iconType === 'difficulty') {
      setDefaultIcon(difficultyIconWhite)
      setActiveIcon(difficultyIcon)
    } else if (iconType === 'recommend') {
      setDefaultIcon(recommendIconWhite)
      setActiveIcon(recommendIcon)
    }
  }, [])

  const handleIconClick = (iconNumber) => {
    setSelectedIcon(iconNumber)
    onChange(iconNumber)
  }

  const renderIcons = () => {
    const icons = []
    const selectedCount = selectedIcon || 0
    const unselectedCount = 5 - selectedCount

    for (let i = 1; i <= selectedCount; i++) {
      icons.push(
        <div key={`selected-${i}`} onClick={() => handleIconClick(i)}>
          <img className={styles.icon} src={activeIcon} />
        </div>
      )
    }

    for (let i = 1; i <= unselectedCount; i++) {
      icons.push(
        <div
          key={`unselected-${i}`}
          onClick={() => handleIconClick(selectedCount + i)}
        >
          <img className={styles.icon} src={defaultIcon} />
        </div>
      )
    }

    return icons
  }

  return <div className={styles.iconInput}>{renderIcons()}</div>
}
