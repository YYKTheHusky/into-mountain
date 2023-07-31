import styles from 'components/Tag/Tag.module.scss'
import { useEffect, useState } from 'react'

export function BlackTag({ children }) {
  return <div className={styles.BlackTag}>{children}</div>
}

export function ColorTag({ children }) {
  const [style, setStyle] = useState('')
  useEffect(() => {
    if (children === '百岳') {
      setStyle('baiyue')
    } else if (children === '郊山') {
      setStyle('subur')
    } else if (children === '海外') {
      setStyle('oversea')
    } else {
      setStyle('gray')
    }
  }, [children])
  return (
    <div className={`${styles[style]} ${styles.basicOval}`}>{children}</div>
  )
}

export function DifficultyTag({ children }) {
  const [style, setStyle] = useState('')
  useEffect(() => {
    if (children === '低') {
      setStyle('defLow')
    } else if (children === '低-中') {
      setStyle('defLowMid')
    } else if (children === '中') {
      setStyle('defMid')
    } else if (children === '中-高') {
      setStyle('defMidHigh')
    } else if (children === '高') {
      setStyle('defHigh')
    }
  }, [children])
  return (
    <div className={`${styles[style]} ${styles.basicOval}`}>
      難易度：{children}
    </div>
  )
}
