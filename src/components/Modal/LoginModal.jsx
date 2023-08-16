import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Toast from 'utils/sweetAlertConfig.js'
// scss
import styles from 'components/Modal/LoginModal.module.scss'

// components
import {
  PrimaryButtonBright,
  PrimaryButtonWhite
} from 'components/Button/Button'
import InputBox from 'components/Input/InputBox'

// svg
import googleLogo from 'assets/icons/google-logo.svg'
import facebookLogo from 'assets/icons/facebook-logo.svg'

// api
import { login } from 'api/auth.js'

export default function LoginModal() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState('')
  const navigate = useNavigate()
  // 登入功能
  const handleLogin = async () => {
    if (email.trim().length === 0 || password.trim().length === 0 || isError) {
      return
    }

    const { token, id, avatar, isSuspended, message } = await login({
      email,
      password
    })
    if (isSuspended) {
      Toast.fire({
        icon: 'error',
        title: '使用者已被停權!'
      })
    } else if (token) {
      localStorage.setItem('token', token)
      localStorage.setItem('currentUserId', id)
      localStorage.setItem('currentUserAvatar', avatar)
      Toast.fire({
        icon: 'success',
        title: '登入成功!'
      })
      navigate('/')
    } else if (!token) {
      Toast.fire({
        icon: 'error',
        title: message
      })
    }
  }
  return (
    <div className={styles.modalContainer}>
      <h2>登入</h2>
      <div className={styles.inputGroup}>
        <InputBox
          label="Email"
          value={email}
          onChange={(inputValue) => setEmail(inputValue)}
          setIsError={setIsError}
        />
        <InputBox
          label="密碼"
          type="password"
          value={password}
          onChange={(inputValue) => setPassword(inputValue)}
          setIsError={setIsError}
        />
        <PrimaryButtonBright onClick={handleLogin}>登入</PrimaryButtonBright>
      </div>
      <div className={styles.text}>
        還不是會員嗎?
        <Link className={styles.links} to="/regist">
          前往註冊
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButtonWhite>使用google登入</PrimaryButtonWhite>
        <img className={styles.logo} src={googleLogo} alt={googleLogo} />
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButtonWhite>使用facebook登入</PrimaryButtonWhite>
        <img className={styles.logo} src={facebookLogo} alt={facebookLogo} />
      </div>
    </div>
  )
}
