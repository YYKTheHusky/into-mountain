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

export default function SignUpModal() {
  return (
    <div className={styles.modalContainer}>
      <h2>註冊</h2>
      <div className={styles.inputGroup}>
        <InputBox label="暱稱" value="123" />
        <InputBox label="Email" value="123" />
        <InputBox label="密碼" type="password" value="" />
        <InputBox label="確認密碼" type="password" value="" />
        <PrimaryButtonBright>註冊</PrimaryButtonBright>
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
