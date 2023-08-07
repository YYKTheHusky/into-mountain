import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from 'utils/sweetAlertConfig.js'
// scss
import styles from 'components/Modal/SignUpModal.module.scss'

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
import { signUp, login } from 'api/auth.js'

export default function SignUpModal() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [isError, setIsError] = useState('')
  const navigate = useNavigate()

  // 檢查輸入內容
  const isNotValid =
    name.trim().length === 0 ||
    password.trim().length === 0 ||
    passwordCheck.trim().length === 0 ||
    email.trim().length === 0

  // 註冊功能
  const handleSignUp = async () => {
    // 檢查輸入內容
    if (password !== passwordCheck) {
      Toast.fire({
        icon: 'warning',
        title: '密碼與確認密碼不同!'
      })
    } else if (isError || isNotValid) {
      Toast.fire({
        icon: 'warning',
        title: '請檢查輸入內容!'
      })
      return
    }

    const { success, message } = await signUp({
      name,
      email,
      password,
      passwordCheck
    })
    if (success === true) {
      Toast.fire({
        icon: 'success',
        title: '註冊成功!'
      })
      // 註冊成功後直接登入
      const { token, id, avatar } = await login({
        email,
        password
      })
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('currentUserId', id)
        localStorage.setItem('currentUserAvatar', avatar)
        navigate('/')
      } else if (!token) {
        navigate('/login')
      }
    } else if (message === 'Error: Email already exists!') {
      Toast.fire({
        icon: 'warning',
        title: 'Email已經註冊過了!'
      })
    }
  }
  return (
    <div className={styles.modalContainer}>
      <h2>註冊</h2>
      <div className={styles.inputGroup}>
        <InputBox
          label="暱稱"
          value={name}
          maxLength="30"
          onChange={(inputValue) => setName(inputValue)}
          setIsError={setIsError}
        />
        <InputBox
          label="Email"
          value={email}
          maxLength="100"
          onChange={(inputValue) => setEmail(inputValue)}
          setIsError={setIsError}
        />
        <InputBox
          label="密碼"
          type="password"
          value={password}
          maxLength="20"
          onChange={(inputValue) => setPassword(inputValue)}
          setIsError={setIsError}
        />
        <InputBox
          label="確認密碼"
          type="password"
          value={passwordCheck}
          onChange={(inputValue) => setPasswordCheck(inputValue)}
          setIsError={setIsError}
        />
        <PrimaryButtonBright onClick={handleSignUp}>註冊</PrimaryButtonBright>
      </div>
      <div className={styles.text}>
        已經有帳號了嗎?
        <a className={styles.links} href="/login">
          前往登入
        </a>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButtonWhite>使用google註冊</PrimaryButtonWhite>
        <img className={styles.logo} src={googleLogo} alt={googleLogo} />
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButtonWhite>使用facebook註冊</PrimaryButtonWhite>
        <img className={styles.logo} src={facebookLogo} alt={facebookLogo} />
      </div>
    </div>
  )
}
