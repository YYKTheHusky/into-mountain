// scss
import styles from 'pages/MainPage/MainPage.module.scss'
import Nav from 'components/Nav/Nav'
// components
import Footer from 'components/Footer/Footer'
import { OvalButtonHuge } from 'components/Button/Button'
import { SearchBarMain } from 'components/SearchBar/SearchBar'

// svg
import mainPagePhoto from 'assets/photos/mainpage-photo.svg'

export default function MainPage() {
  return (
    <div>
      <div className={styles.navbar}>
        <Nav />
      </div>
      <div className={styles.emptyNav}></div>
      <div className={styles.photoContainer}>
        <img
          className={styles.mainPagePhoto}
          src={mainPagePhoto}
          alt="mainPagePhoto"
        ></img>
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>Discover your</h1>
          <h1 className={styles.slogan}>essence in nature</h1>
          <div className={styles.buttonContainer}>
            <OvalButtonHuge>探索所有步道</OvalButtonHuge>
          </div>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBarMain></SearchBarMain>
      </div>
      <Footer />
    </div>
  )
}
