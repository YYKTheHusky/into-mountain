import React, { useEffect, useState } from 'react'
import styles from 'components/Input/IconRadioInput.module.scss'

// svg
import difficultyIcon from 'assets/icons/difficulty.svg'
import difficultyIconWhite from 'assets/icons/difficulty-white.svg'
import recommendIcon from 'assets/icons/recommended-like-active.svg'
import recommendIconWhite from 'assets/icons/recommended-like.svg'

export default function IconRadioInput({ iconType, onChange, score }) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [defaultIcon, setDefaultIcon] = useState(null)
  const [activeIcon, setActiveIcon] = useState(null)
  const [icons, setIcons] = useState([])

  useEffect(() => {
    if (iconType === 'difficulty') {
      setDefaultIcon(difficultyIconWhite)
      setActiveIcon(difficultyIcon)
    } else if (iconType === 'recommend') {
      setDefaultIcon(recommendIconWhite)
      setActiveIcon(recommendIcon)
    }
  }, [iconType])

  const handleIconClick = (iconNumber) => {
    if (iconNumber > 5) {
      iconNumber = 5
    }
    setSelectedIcon(iconNumber)

    if (onChange) {
      onChange(iconNumber)
    }
  }

  useEffect(() => {
    if (iconType === 'difficulty') {
      setDefaultIcon(difficultyIconWhite)
      setActiveIcon(difficultyIcon)
    } else if (iconType === 'recommend') {
      setDefaultIcon(recommendIconWhite)
      setActiveIcon(recommendIcon)
    }
  }, [iconType])

  useEffect(() => {
    const selectedCount = score || selectedIcon || 0
    const unselectedCount = 5 - selectedCount
    const iconElements = []
    for (let i = 1; i <= selectedCount; i++) {
      iconElements.push(
        <div key={`selected-${i}`} onClick={() => handleIconClick(i)}>
          <img
            className={`${styles.icon} ${styles.iconHover}`}
            src={activeIcon}
            alt="active icon"
          />
        </div>
      )
    }
    for (let i = 1; i <= unselectedCount; i++) {
      iconElements.push(
        <div
          key={`unselected-${i}`}
          onClick={() => handleIconClick(selectedCount + i)}
        >
          <img
            className={`${styles.icon} ${styles.iconHover}`}
            src={defaultIcon}
            alt="default icon"
          />
        </div>
      )
    }
    setIcons(iconElements)
  }, [score, selectedIcon, activeIcon, defaultIcon])

  return <div className={styles.iconInput}>{icons}</div>
}

// --- 原版
// export default function IconRadioInput({ iconType, onChange, score }) {
//   const [selectedIcon, setSelectedIcon] = useState(null)
//   const [defaultIcon, setDefaultIcon] = useState(null)
//   const [activeIcon, setActiveIcon] = useState(null)

//   useEffect(() => {
//     if (iconType === 'difficulty') {
//       setDefaultIcon(difficultyIconWhite)
//       setActiveIcon(difficultyIcon)
//     } else if (iconType === 'recommend') {
//       setDefaultIcon(recommendIconWhite)
//       setActiveIcon(recommendIcon)
//     }
//   }, [iconType])

//   const handleIconClick = (iconNumber) => {
//     setSelectedIcon(iconNumber)

//     if (onChange) {
//       onChange(iconNumber)
//     }
//   }

//   const renderIcons = () => {
//     const icons = []
//     const selectedCount = score || selectedIcon || 0
//     const unselectedCount = 5 - selectedCount
//     console.log(selectedCount)
//     for (let i = 1; i <= selectedCount; i++) {
//       icons.push(
//         <div key={`selected-${i}`} onClick={() => handleIconClick(i)}>
//           <img
//             className={`${styles.icon} ${!score && styles.iconHover}`}
//             src={activeIcon}
//             alt="active icon"
//           />
//         </div>
//       )
//     }

//     for (let i = 1; i <= unselectedCount; i++) {
//       icons.push(
//         <div
//           key={`unselected-${i}`}
//           onClick={() => handleIconClick(selectedCount + i)}
//         >
//           <img
//             className={`${styles.icon} ${!score && styles.iconHover}`}
//             src={defaultIcon}
//             alt="default icon"
//           />
//         </div>
//       )
//     }

//     return icons
//   }

//   return <div className={styles.iconInput}>{renderIcons()}</div>
// }
