import { useState } from 'react'
import Toast from 'utils/sweetAlertConfig.js'
// styles
import styles from 'components/Modal/ReportModal.module.scss'
// svg
import xmark from 'assets/icons/icon-xmark.svg'
// components
import { SecondaryButtonBright } from 'components/Button/Button'
// api
import { postCondition } from 'api/trail'

// 父層設定一個State控制modal開關
// const [ isReportModalOpen, setIsReportModalOpen] = useState(false)

export default function ReportModal({
  isReportModalOpen,
  setIsReportModalOpen,
  trailId,
  setReRender
}) {
  const [description, setDescription] = useState('')

  // 點選確認送出後
  const confirmFunction = async () => {
    if (description.trim().length === 0) {
      // 有異常跳提示框
      Toast.fire({
        icon: 'info',
        title: '請輸入內容!'
      })
    } else {
      const { success } = await postCondition({ trailId, description })
      if (success) {
        setIsReportModalOpen(false)
        setReRender(true)
      }
    }
  }
  // 輸入內容改變Description
  const handleValueChange = (event) => {
    setDescription(event.target.value)
  }
  // 點擊關閉ICON
  const handleClose = () => {
    setIsReportModalOpen(false)
  }

  // 顯示與否(開啟或關閉)
  if (!isReportModalOpen) {
    return null
  }

  return (
    <div className="modalBackground">
      <div className={styles.modalContainer}>
        <div
          className={`${styles.closeContainer} cursor-point`}
          onClick={handleClose}
        >
          <img src={xmark} alt="close" onClick={handleClose} />
        </div>
        <h4>步道狀況回報</h4>
        <div className={styles.inputGroup}>
          <label htmlFor="report" className={styles.title}>
            回報內容
          </label>
          <textarea
            id="report"
            value={description}
            placeholder="請輸入要回報的內容，字數限制200字"
            maxLength="200"
            onChange={handleValueChange}
          />
        </div>
        <div className={styles.alertMessageContainer}>
          {description.length === 200 && (
            <div className={styles.alertMessage}>字數不可超過200字!</div>
          )}
        </div>
        <div className={styles.outerButtonContainer}>
          <div className={styles.buttonContainer}>
            <SecondaryButtonBright onClick={confirmFunction}>
              確認送出
            </SecondaryButtonBright>
          </div>
        </div>
      </div>
    </div>
  )
}
