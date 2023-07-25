// scss
import { SecondaryButtonBright, SecondaryButtonGray } from 'components/Button/Button'
import styles from 'components/Modal/ConfirmModal.module.scss'

// 父層設定開啟/關閉function
// const [ isModalOpen, setIsModalOpen] = useState(false)
// const openModal = () => {
//   setIsModalOpen(true)
// }
// const closeModal = (event) => {
//   if (event.target === event.currentTarget) {
//     setIsModalOpen(false)
//   }
// }

export default function ConfirmModal({ isModalOpen, message, confirmFunction, cancelFunction }) {
  // 當isModalOpen為false，不會顯示modal
  // isModalOpen透過父層設state控制
  if (!isModalOpen) {
    return null
  }

  return (
    <div className={styles.background}>
      <div className={styles.modalBody}>
        <h5>{message}</h5>
        <div className={styles.buttonGroup}>
          <div className={styles.buttonContainer}>
            <SecondaryButtonBright onclick={confirmFunction}>確定</SecondaryButtonBright>
          </div>
          <div className={styles.buttonContainer}>
            <SecondaryButtonGray onclick={cancelFunction}>取消</SecondaryButtonGray>
          </div>
        </div>
      </div>
    </div>
  )
}
