// scss
import Button from 'components/Button/Button'
import styles from 'components/Modal/ConfirmModal.module.scss'

// 父層設定一個State、兩個function，點選兩個按鈕做某些事情
// const [ isModalOpen, setIsModalOpen] = useState(false)
// const confirmFunction = () => {
//   setIsModalOpen(false)
// }
// const cancelFunction = (event) => {
//   if (event.target === event.currentTarget) {
//     setIsModalOpen(false)
//   }
// }
// 引用方式
// <ConfirmModal
//   isModalOpen={isModalOpen}
//   message="確定要刪除嗎?"
//   confirmFunction={confirmFunction}
//   cancelFunction={cancelFunction}
// />

export default function ConfirmModal({
  isModalOpen,
  message,
  confirmFunction,
  cancelFunction
}) {
  // 當isModalOpen為false，不會顯示modal
  // isModalOpen透過父層設state控制
  if (!isModalOpen) {
    return null
  }

  return (
    <div className="modalBackground">
      <div className={styles.modalBody}>
        <h5>{message}</h5>
        <div className={styles.buttonGroup}>
          <div className={styles.buttonContainer}>
            <Button
              style="secondaryButtonBright"
              text="確定"
              onClick={(event) => {
                event.stopPropagation()
                confirmFunction()
              }}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button
              style="secondaryButtonGray"
              text="取消"
              onClick={(event) => {
                event.stopPropagation()
                cancelFunction()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
