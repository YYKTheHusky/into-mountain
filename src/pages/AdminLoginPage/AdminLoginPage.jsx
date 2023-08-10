// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'

// components
import AdminLoginModal from 'components/Modal/AdminLoginModal'
import MainLayout from 'components/MainLayout/MainLayout'

// img
import AdminLoginPhoto from 'assets/photos/AdminPage-photo.JPG'

export default function AdminLoginPage() {
  return (
    <MainLayout>
      <div className={styles.outerContainer}>
        <img className={styles.photo} src={AdminLoginPhoto} alt="photo" />
        <div className={styles.modalContainer}>
          <AdminLoginModal />
        </div>
      </div>
    </MainLayout>
  )
}
