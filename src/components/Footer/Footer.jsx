import styles from 'components/Footer/Footer.module.scss'

// photo
import Kelly from 'assets/photos/Kelly.jpg'
import Chc from 'assets/photos/CH Chu.jpg'
import Kevin from 'assets/photos/Kevin_L.png'
import Ywj from 'assets/photos/YWJ.png'
import AvatarToolTip from 'components/ToolTips/AvatarToolTip'

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
            <a
              href="https://github.com/magic9701"
              className={styles.avatarContainer}
            >
              <img src={Kelly} alt={Kelly} />
              <AvatarToolTip name="Kelly" />
            </a>
            <a
              href="https://github.com/jiasyuanchu"
              className={styles.avatarContainer}
            >
              <img src={Chc} alt={Chc} data-name="Chc" />
              <AvatarToolTip name="Chc" />
            </a>
            <a
              href="https://github.com/av124773"
              className={styles.avatarContainer}
            >
              <img src={Kevin} alt={Kevin} />
              <AvatarToolTip name="Kevin" />
            </a>
            <a
              href="https://github.com/ywcheng1207"
              className={styles.avatarContainer}
            >
              <img src={Ywj} alt={Ywj} />
              <AvatarToolTip name="Ywj" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
