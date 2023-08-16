import { useState } from 'react'
import Toast from 'utils/sweetAlertConfig.js'
// styles
import styles from 'components/Modal/ReportModal.module.scss'
// svg
import xmark from 'assets/icons/icon-xmark.svg'
// components
import { SecondaryButtonBright } from 'components/Button/Button'
// api
import { addReport } from 'api/post'

// 父層設定一個State控制modal開關
// const [ isReportModalOpen, setIsReportModalOpen] = useState(false)

export default function ReportPostModal({
  isReportModalOpen,
  setIsReportModalOpen,
  postId
}) {
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  // 點選確認送出後
  const confirmFunction = async () => {
    if (content.trim().length === 0) {
      // 有異常跳提示框
      Toast.fire({
        icon: 'info',
        title: '請輸入內容!'
      })
    } else {
      const { success, message } = await addReport({
        postId,
        category,
        content
      })
      if (success) {
        setIsReportModalOpen(false)
        Toast.fire({
          icon: 'success',
          title: '您已送出檢舉!'
        })
      } else if (message) {
        Toast.fire({
          icon: 'error',
          title: '檢舉失敗! 請勿重複檢舉!'
        })
      }
    }
  }
  // 輸入內容改變Description
  const handleValueChange = (event) => {
    setContent(event.target.value)
  }
  // 改變category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
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
        <h4>檢舉心得</h4>
        <div className={styles.category}>
          <label className={styles.title}>檢舉原因</label>
          <div>
            <input
              type="radio"
              id="廣告"
              value="廣告"
              name="category"
              onChange={handleCategoryChange}
            />
            <label htmlFor="廣告">廣告</label>
            <input
              type="radio"
              id="情色"
              value="情色"
              name="category"
              onChange={handleCategoryChange}
            />
            <label htmlFor="情色">情色</label>
            <input
              type="radio"
              id="侵權"
              value="侵權"
              name="category"
              onChange={handleCategoryChange}
            />
            <label htmlFor="侵權">侵權</label>
            <input
              type="radio"
              id="其他"
              value="其他"
              name="category"
              onChange={handleCategoryChange}
            />
            <label htmlFor="其他">其他</label>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="content" className={styles.title}>
            檢舉內容
          </label>
          <textarea
            id="content"
            value={content}
            placeholder="請輸入檢舉原因，字數限制100字"
            maxLength="100"
            onChange={handleValueChange}
          />
        </div>
        <div className={styles.alertMessageContainer}>
          {content.length === 100 && (
            <div className={styles.alertMessage}>已達字數上限100字!</div>
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
