import styles from './MainLayout.module.scss'
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'
const { mainLayoutContainer, navContainer, contentContainer, footerContainer } =
  styles

const MainLayout = ({ children }) => {
  return (
    <div className={mainLayoutContainer}>
      <div className={navContainer}>
        <Nav />
      </div>
      <div className={contentContainer}>{children}</div>
      <div className={footerContainer}>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
