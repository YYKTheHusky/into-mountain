// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'
import Nav from 'components/Nav/Nav'
// components
import Footer from 'components/Footer/Footer'
import AdminLoginModal from 'components/Modal/AdminLoginModal'

// img
import AdminLoginPhoto from 'assets/photos/AdminPage-photo.JPG'

export default function AdminLoginPage() {
  return (
    <div>
      <div className={styles.navbar}>
        <Nav />
      </div>
      <div className={styles.emptyNav}></div>
      <div className={styles.outerContainer}>
        <img className={styles.photo} src={AdminLoginPhoto} alt="photo"></img>
        <div className={styles.modalContainer}>
          <AdminLoginModal></AdminLoginModal>
        </div>
      </div>
      <Footer />
    </div>
  )
}
