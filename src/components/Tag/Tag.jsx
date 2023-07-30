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
  return <div className={styles[style]}>{children}</div>
}
