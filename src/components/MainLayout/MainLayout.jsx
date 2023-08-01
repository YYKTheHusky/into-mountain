import styles from './MainLayout.module.scss'
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'
const { mainLayoutContainer, navContainer, contentContainer } = styles

const MainLayout = ({ children }) => {
  return (
    <div className={mainLayoutContainer}>
      <div className={navContainer}>
        <Nav />
      </div>
      <div className={contentContainer}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
