import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
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
  const navigate = useNavigate()

  // alert
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })

  // 如果已經登入，導向首頁
  useEffect(() => {
    const checkUserToken = () => {
      const token = localStorage.getItem('token')
      if (token) {
        navigate('/')
        Toast.fire({
          icon: 'error',
          title: '您已經登入囉!'
        })
      }
    }
    checkUserToken()
  }, [navigate])

  return (
    <MainLayout>
      <div className={styles.outerContainer}>
        <img
          className={styles.photo}
          src={location.pathname.includes('login') ? LoginPhoto : SignUpPhoto}
          alt="photo"
        ></img>
        <div className={styles.modalContainer}>
          {location.pathname.includes('login') ? (
            <LoginModal />
          ) : (
            <SignUpModal />
          )}
        </div>
      </div>
    </MainLayout>
  )
}
