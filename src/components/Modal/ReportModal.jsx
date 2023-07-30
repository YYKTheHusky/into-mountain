import { useEffect, useState } from 'react'
import styles from 'components/Modal/ReportModal.module.scss'

// svg
import xmark from 'assets/icons/icon-xmark.svg'
import { SecondaryButtonBright } from 'components/Button/Button'

// 父層設定一個State控制modal開關
// const [ isReportModalOpen, setIsReportModalOpen] = useState(false)

export default function ReportModal({
  isReportModalOpen,
  setIsReportModalOpen
}) {
  const [reportValue, setReportValue] = useState('')
  const [inputNone, setInputNone] = useState(false)

  // 點選確認送出後
  const confirmFunction = () => {
    if (reportValue.trim().length === 0) {
      // 有異常跳提示框
      setInputNone(true)
      return
    }
    console.log(reportValue)
  }
  // 輸入內容改變reportValue
  const handleValueChange = (event) => {
    setReportValue(event.target.value)
  }
  // 點擊關閉ICON
  const handleClose = () => {
    setIsReportModalOpen(false)
  }

  // 顯示與否(開啟或關閉)
  if (!isReportModalOpen) {
    return null
  }

  useEffect(() => {
    if (reportValue.length > 0) {
      setInputNone(false)
    }
  }, [reportValue])

  return (
    <div className="modalBackground">
      <div className={styles.modalContainer}>
        <div
          className={`${styles.closeContainer} cursor-point`}
          onClick={handleClose}
        >
          <img src={xmark} alt="close" onClick={handleClose}></img>
        </div>
        <h4>步道狀況回報</h4>
        <div className={styles.inputGroup}>
          <label htmlFor="report">回報內容</label>
          <textarea
            id="report"
            value={reportValue}
            placeholder="請輸入要回報的內容，字數限制200字"
            maxLength="200"
            onChange={handleValueChange}
          ></textarea>
        </div>
        <div className={styles.alertMessageContainer}>
          {reportValue.length === 200 && (
            <div className={styles.alertMessage}>字數不可超過200字!</div>
          )}
          {inputNone && (
            <div className={styles.alertMessage}>內容不可空白!</div>
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
