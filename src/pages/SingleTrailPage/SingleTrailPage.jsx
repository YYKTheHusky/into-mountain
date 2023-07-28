import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// scss
import styles from 'pages/SingleTrailPage/SingleTrailPage.module.scss'

// svg and photo
import photo from 'assets/photos/AdminPage-photo.JPG'
import defaultFavorite from 'assets/icons/icon-label.svg'
import shareIcon from 'assets/icons/share-icon.svg'

// components
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'
import TrailReport from 'components/TrailsInformation/TrailReport'
import { SecondaryButton } from 'components/Button/Button'
import InformationTable from 'components/TrailsInformation/InformationTable'
import MapTable from 'components/TrailsInformation/MapTable.jsx'

export default function SingleTrailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(null)
  useEffect(() => {
    if (location.pathname.includes('detail')) {
      setActiveTab('detail')
    } else if (location.pathname.includes('gpx')) {
      setActiveTab('gpx')
    }
  }, [navigate])
  return (
    <div className={styles.pageContainer}>
      <div className={styles.navbar}>
        <Nav />
      </div>
      <div className={styles.emptyNav} />
      <div className={`mx-auto ${styles.container}`}>
        {/* 標題、圖片、步道回報 */}
        <section className={styles.trailNameAndPhoto}>
          <div className={styles.nameAndLike}>
            <h2 className={styles.title}>步道的名字字字字</h2>
            <div className={styles.socialButtons}>
              <div className={`cursor-point ${styles.favorite}`}>
                <img
                  className={styles.icon}
                  src={defaultFavorite}
                  alt="defaultFavorite"
                ></img>
                <span>收藏</span>
              </div>
              <div className={`cursor-point ${styles.share}`}>
                <img
                  className={styles.icon}
                  src={shareIcon}
                  alt="shareIcon"
                ></img>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div className={styles.photoAndReport}>
            <div className={styles.photoContainer}>
              <img className={styles.photo} src={photo} alt="步道圖片片片片" />
            </div>
            <div className={styles.reportContainer}>
              <div className={styles.reportHeader}>
                <h4>路況回報</h4>
                <div className={styles.reportButton}>
                  <SecondaryButton>我要回報</SecondaryButton>
                </div>
              </div>
              <div className={styles.reports}>
                <TrailReport></TrailReport>
                <TrailReport></TrailReport>
                <TrailReport></TrailReport>
                <TrailReport></TrailReport>
                <TrailReport></TrailReport>
              </div>
            </div>
          </div>
        </section>
        {/* 基本介紹 */}
        <section className={styles.trailIntroduction}>
          <h4>路線介紹</h4>
          <span>
            這是一篇假的文章，這是一篇假的文章，這是一篇假的文章，這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章， 這是一篇假的文章，
            這是一篇假的文章，
            這是一篇假的文章，這是一篇假的文章，這是一篇假的文章，
          </span>
        </section>
        {/* 詳細資料 */}
        <section className={styles.trailDetail}>
          <div className={styles.tabs}>
            <Link to={`/trail/trailID/detail`}>
              <div
                className={`cursor-point ${styles.tabOne} ${
                  activeTab === 'detail' && styles.active
                }`}
              >
                <h4>基本資訊</h4>
              </div>
            </Link>
            <Link to={`/trail/trailID/gpx`}>
              <div
                className={`cursor-point ${styles.tabTwo} ${
                  activeTab === 'gpx' && styles.active
                }`}
              >
                <h4>路線地圖</h4>
              </div>
            </Link>
          </div>
          <div className={styles.information}>
            {activeTab === 'detail' && <InformationTable></InformationTable>}
            {activeTab === 'gpx' && <MapTable></MapTable>}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
