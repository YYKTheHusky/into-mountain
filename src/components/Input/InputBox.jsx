import { useState, useEffect } from 'react'
// scss
import styles from 'components/Input/InputBox.module.scss'

export default function InputBox({
  label,
  type,
  value,
  onChange,
  maxLength,
  setIsError
}) {
  const [errorMessage, setErrorMessage] = useState('')

  // 檢查password輸入內容是否符合要求
  const checkPassword = () => {
    if (value.length === 20) {
      setErrorMessage('字數上限20字！')
    } else if (value.includes(' ')) {
      setErrorMessage('不可使用空格！')
    } else {
      setErrorMessage('')
    }
  }

  // 檢查name
  const checkName = () => {
    const whitespaceRegex = /^\s*$/

    if (value.length === 30) {
      setErrorMessage('字數上限30字！')
    } else if (whitespaceRegex.test(value) && value.length !== 0) {
      setErrorMessage('請輸入內容！')
    } else {
      setErrorMessage('')
    }
  }

  // 檢查description
  const checkDescription = () => {
    const whitespaceRegex = /^\s*$/

    if (value.length === 80) {
      setErrorMessage('字數上限80字！')
    } else if (whitespaceRegex.test(value) && value.length !== 0) {
      setErrorMessage('請輸入內容！')
    } else {
      setErrorMessage('')
    }
  }

  // 檢查email
  const checkEmail = () => {
    const whitespaceRegex = /^\s*$/

    if (value.length === 100) {
      setErrorMessage('字數上限100字！')
    } else if (whitespaceRegex.test(value) && value.length !== 0) {
      setErrorMessage('請輸入內容！')
    } else {
      setErrorMessage('')
    }
  }

  useEffect(() => {
    if (label === '密碼' || label === '密碼確認') {
      checkPassword()
    } else if (label === '暱稱') {
      checkName()
    } else if (label === '自我介紹') {
      checkDescription()
    } else if (label === 'Email') {
      checkEmail()
    }
  }, [value, label])

  useEffect(() => {
    if (errorMessage !== '') {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [errorMessage])

  return (
    <div className={styles.inputBoxContainer}>
      <label
        className={`${styles.inputLabel} ${value !== '' && styles.active}`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`${styles.inputBox} ${errorMessage !== '' && 'danger'}`}
        id={label}
        type={type || 'text'}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        maxLength={maxLength || ''}
      />
      <span className={styles.error}>{errorMessage}</span>
    </div>
  )
}
