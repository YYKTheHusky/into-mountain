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

export default function LoginModal() {
  return (
    <div className={styles.modalContainer}>
      <h2>登入</h2>
      <div className={styles.inputGroup}>
        <InputBox label="Email" value="123"></InputBox>
        <InputBox label="密碼" type="password" value=""></InputBox>
        <PrimaryButtonBright>登入</PrimaryButtonBright>
      </div>
      <div className={styles.text}>
        還不是會員嗎?
        <a className={styles.links} href="/regist">
          前往註冊
        </a>
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
