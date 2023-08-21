import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// scss
import styles from 'pages/LoginPage/LoginPage.module.scss'

// components
import AdminLoginModal from 'components/Modal/AdminLoginModal'

// img
import AdminLoginPhoto from 'assets/photos/AdminPage-photo.JPG'
import AdminLoginPhotoPlaceholder from 'assets/photos/AdminPage-photo-placeholder.jpg'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [photoLoaded, setPhotoLoaded] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      navigate('/admin/allUser')
    }
  }, [])

  return (
    <div className={styles.outerContainer}>
      <img
        className={styles.adminPhoto}
        src={photoLoaded ? AdminLoginPhoto : AdminLoginPhotoPlaceholder}
        alt="photo"
        onLoad={() => setPhotoLoaded(true)}
      />
      <div className={styles.adminModalContainer}>
        <AdminLoginModal />
      </div>
    </div>
  )
}
