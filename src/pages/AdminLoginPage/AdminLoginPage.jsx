// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'

// components
import AdminLoginModal from 'components/Modal/AdminLoginModal'

// img
import AdminLoginPhoto from 'assets/photos/AdminPage-photo.JPG'

export default function AdminLoginPage() {
  return (
    <div className={styles.outerContainer}>
      <img className={styles.adminPhoto} src={AdminLoginPhoto} alt="photo" />
      <div className={styles.adminModalContainer}>
        <AdminLoginModal />
      </div>
    </div>
  )
}
