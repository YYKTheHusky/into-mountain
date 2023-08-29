// hooks
import { useState, useEffect } from 'react'

// components
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'

// api
import { getUserData } from 'api/user'

// styles
import styles from './MainLayout.module.scss'
const { mainLayoutContainer, navContainer, contentContainer } = styles

const MainLayout = ({ children }) => {
  const [currentUserAvatar, setCurrentUserAvatar] = useState({})
  
  useEffect(() => {
    if (localStorage.getItem('currentUserId')) {
      const getUserDataAsync = async (id) => {
        try {
          const data = await getUserData(id)
          setCurrentUserAvatar(data.avatar)
        } catch (error) {
          console.error(error)
        }
      }
      getUserDataAsync(localStorage.getItem('currentUserId'))
    }
  }, [])

  return (
    <div className={mainLayoutContainer}>
      <div className={navContainer}>
        <Nav currentUserAvatar={currentUserAvatar} />
      </div>
      <div className={contentContainer}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
