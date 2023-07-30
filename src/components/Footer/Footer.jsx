import styles from 'components/Footer/Footer.module.scss'

// photo
import Kelly from 'assets/photos/Kelly.jpg'
import Chc from 'assets/photos/CH Chu.jpg'
import Kevin from 'assets/photos/Kevin_L.png'
import Ywj from 'assets/photos/YWJ.png'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.sectionOne}>
          <p>© 2023 登山小站 All rights reserved</p>
          <p>
            非商業製作，步道內容引用自{' '}
            <a href="https://hiking.biji.co/">健行筆記</a>
          </p>
        </div>
        <div className={styles.contributors}>
          <p>製作者</p>
          <div className={styles.socialLinkContainer}>
            <a href="https://github.com/magic9701" data-name="Kelly">
              <img src={Kelly} alt={Kelly} />
            </a>
            <a href="https://github.com/jiasyuanchu" data-name="Kevin">
              <img src={Chc} alt={Chc} data-name="Chc" />
            </a>
            <a href="https://github.com/av124773" data-name="Kevin">
              <img src={Kevin} alt={Kevin} />
            </a>
            <a href="https://github.com/ywcheng1207" data-name="Ywj">
              <img src={Ywj} alt={Ywj} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
