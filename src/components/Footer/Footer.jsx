import styles from 'components/Footer/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.sectionOne}>
          <p>© 2023 登山小站 All rights reserved</p>
          <p>
            非商業製作，步道內容引用自 <a href="https://hiking.biji.co/">健行筆記</a>
          </p>
        </div>
        <div className={styles.contributors}>
          <p>製作者</p>
          <div className={styles.socialLinkContainer}>
            <div className={styles.socialLink}></div>
            <div className={styles.socialLink}></div>
            <div className={styles.socialLink}></div>
            <div className={styles.socialLink}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
