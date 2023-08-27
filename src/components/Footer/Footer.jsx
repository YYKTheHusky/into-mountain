import styles from 'components/Footer/Footer.module.scss'

// photo
import Kelly from 'assets/photos/Kelly.jpg'
import Chc from 'assets/photos/CH Chu.jpg'
import Kevin from 'assets/photos/Kevin_L.png'
import Ywj from 'assets/photos/YWJ.png'
import AvatarToolTip from 'components/ToolTips/AvatarToolTip'

export default function Footer() {
  const contributors = [
    { name: 'Ya-Yun', link: 'https://github.com/magic9701', image: Kelly },
    { name: 'Willy', link: 'https://github.com/ywcheng1207', image: Ywj },
    { name: 'Chia-Hsuan', link: 'https://github.com/jiasyuanchu', image: Chc },
    { name: 'Kevin', link: 'https://github.com/av124773', image: Kevin }
  ]

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
            {contributors.map((contributor) => (
              <a
                href={contributor.link}
                className={styles.avatarContainer}
                key={contributor.name}
              >
                <img src={contributor.image} alt={contributor.name} />
                <AvatarToolTip name={contributor.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
