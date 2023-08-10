// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'

// components
import AdminLoginModal from 'components/Modal/AdminLoginModal'

// img
import AdminLoginPhoto from 'assets/photos/AdminPage-photo.JPG'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function AdminLoginPage() {
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('adminToken')){
      navigate('/admin/allUser')
    }
  },[])

  return (
    <div className={styles.outerContainer}>
      <img className={styles.adminPhoto} src={AdminLoginPhoto} alt="photo" />
      <div className={styles.adminModalContainer}>
        <AdminLoginModal />
      </div>
    </div>
  )
}
