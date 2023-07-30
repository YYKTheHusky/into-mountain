import { useLocation } from 'react-router-dom'
// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'
// components
import LoginModal from 'components/Modal/LoginModal'
import SignUpModal from 'components/Modal/SignUpModal'

// img
import LoginPhoto from 'assets/photos/LoginPage-photo.JPG'
import SignUpPhoto from 'assets/photos/SignUpPage-photo.jpg'
import MainLayout from 'components/MainLayout/MainLayout'

export default function LoginPage() {
  const location = useLocation()
  return (
    <MainLayout>
      <div className={styles.emptyNav}></div>
      <div className={styles.outerContainer}>
        <img
          className={styles.photo}
          src={location.pathname.includes('login') ? LoginPhoto : SignUpPhoto}
          alt="photo"
        ></img>
        <div className={styles.modalContainer}>
          {location.pathname.includes('login') ? (
            <LoginModal></LoginModal>
          ) : (
            <SignUpModal></SignUpModal>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
