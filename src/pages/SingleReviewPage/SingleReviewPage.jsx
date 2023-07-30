// scss
import styles from 'pages/SingleReviewPage/SingleReviewPage.module.scss'

// svg and photo
import photo from 'assets/photos/AdminPage-photo.JPG'
import FavoriteIcon from 'assets/icons/icon-label.svg'
import shareIcon from 'assets/icons/share-icon.svg'
import likeIcon from 'assets/icons/like-icon.svg'
import reportIcon from 'assets/icons/report-icon.svg'

// components
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'
import { SecondaryButton } from 'components/Button/Button'

export default function SingleReviewPage() {
  return (
    <div>
      <div className={styles.navbar}>
        <Nav />
      </div>
      <div className={styles.emptyNav} />
      <div className={`mx-auto ${styles.container}`}>
        <section className={styles.reviewInfo}>
          {/* 標題 */}
          <div className={styles.title}>
            <h2>柳杉林，竹林，石頭屋，前進三峽插角，牛角坑山，連走牛角尖</h2>
          </div>
          {/* 作者資訊 */}
          <div className={styles.authorAndButton}>
            <div className={styles.author}>
              <div>
                <span>Saiyan Broly</span>
                <span>2023-07-30 發表</span>
                <span>22 個讚</span>
              </div>
              <div className={styles.buttonContainer}>
                <SecondaryButton>關注作者</SecondaryButton>
              </div>
            </div>
            {/* 案讚、收藏、檢舉、分享按鈕 */}
            <div className={styles.socialButtons}>
              <div className={`cursor-point ${styles.buttons}`}>
                <img
                  className={styles.icon}
                  src={likeIcon}
                  alt="likeIcon"
                ></img>
                <span>案讚</span>
              </div>
              <div className={`cursor-point ${styles.buttons}`}>
                <img
                  className={styles.icon}
                  src={FavoriteIcon}
                  alt="FavoriteIcon"
                ></img>
                <span>收藏</span>
              </div>
              <div className={`cursor-point ${styles.buttons}`}>
                <img
                  className={styles.icon}
                  src={reportIcon}
                  alt="reportIcon"
                ></img>
                <span>檢舉</span>
              </div>
              <div className={`cursor-point ${styles.buttons}`}>
                <img
                  className={styles.icon}
                  src={shareIcon}
                  alt="shareIcon"
                ></img>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div className={styles.label}></div>
        </section>
        <section className={styles.reviewPhoto}>
          <img className={styles.photo} src={photo} alt="步道圖片片片片" />
        </section>
        <section className={styles.reviewText}>
          <div className={styles.divide}>
            <hr className={styles.line}></hr>
            <span className={styles.words}>
              以下內容為網友分享，不代表登山小站立場。
            </span>
          </div>
          <div className={styles.text}>
            HTML 的水平分隔線元素是hr標籤所構成的元素，主要用來區隔不同主題段落
            ( thematic break
            )，只要在需要分段區隔的位置放入hr，就會出現一條預設樣式的水平分隔線，將上下兩段內容分隔。
            <br></br>
            HTML 的水平分隔線元素是hr標籤所構成的元素，主要用來區隔不同主題段落
            ( thematic break
            )，只要在需要分段區隔的位置放入hr，就會出現一條預設樣式的水平分隔線，將上下兩段內容分隔。
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
