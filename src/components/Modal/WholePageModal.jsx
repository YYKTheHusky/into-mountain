import styles from 'components/Modal/WholePageModal.module.scss'

export default function WholePageModal({ children }) {
  return (
    <div className={styles.pageContainer}>
      <div className={`mx-auto ${styles.container}`}>{children}</div>
    </div>
  )
}
