// scss
import styles from 'components/Modal/AdminLoginModal.module.scss'

// components
import { PrimaryButton } from 'components/Button/Button'
import InputBox from 'components/Input/InputBox'

export default function AdminLoginModal() {
  return (
    <div className={styles.modalContainer}>
      <h2>後台登入</h2>
      <div className={styles.inputGroup}>
        <InputBox label="Email" value="123"></InputBox>
        <InputBox label="密碼" type="password" value=""></InputBox>
        <PrimaryButton>登入</PrimaryButton>
      </div>
    </div>
  )
}
