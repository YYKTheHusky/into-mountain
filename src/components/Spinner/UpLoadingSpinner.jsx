import styles from 'components/Spinner/UpLoadingSpinner.module.scss'

export default function UpLoadingSpinner({ text }) {
  return (
    <div className={styles.background}>
      <div className={styles.spinner}>
        <div className={styles.word}>{text}</div>
        <div className={`${styles.spinnerRed} ${styles.spinnerSector}`}></div>
        <div className={`${styles.spinnerGreen} ${styles.spinnerSector}`}></div>
        <div className={`${styles.spinnerBlue} ${styles.spinnerSector}`}></div>
      </div>
    </div>
  )
}
