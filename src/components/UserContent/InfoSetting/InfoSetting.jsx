import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './InfoSetting.module.scss'
import UpLoad from 'components/UserContent/InfoSetting/UpLoad/UpLoad'
import { useRef, useState } from 'react'
const { infoSettingContainer, infoItem, saveChange } = styles

const InfoSetting = () => {
  const inputRef = useRef({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (inputName) => (event) => {
    const { value } = event.target
    inputRef.current[inputName] = value
  }

  // function handleInputChange(inputName, event) {
  //   const { value } = event.target
  //   inputRef.current[inputName] = value
  //   console.log(inputRef.current)
  // }
  // function handleInputChange(inputName) {
  //   return function (event) {
  //     const { value } = event.target
  //     inputRef.current[inputName] = value
  //     console.log(inputRef.current)
  //   }
  // }
  const handleSubmit = () => {
    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      console.table(inputRef.current)
      setIsSubmitting(false)
      alert('儲存成功!')
    }, 3000)
  }

  return (
    <RightSideContainer title="編輯個人資料">
      <div className={infoSettingContainer}>
        <div className={infoItem}>
          <UpLoad />
        </div>
        <div className={infoItem}>
          <input
            type="text"
            onChange={handleInputChange('暱稱')}
            readOnly={isSubmitting}
          />
          <label>暱稱</label>
        </div>
        <div className={infoItem}>
          <textarea
            id="關於我"
            cols="20"
            rows="5"
            onChange={handleInputChange('關於我')}
            readOnly={isSubmitting}
          ></textarea>
          <label>關於我</label>
        </div>
        <div className={infoItem}>
          <input
            type="text"
            onChange={handleInputChange('Email')}
            readOnly={isSubmitting}
          />
          <label>Email</label>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('密碼')}
            readOnly={isSubmitting}
          />
          <label>密碼</label>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('密碼確認')}
            readOnly={isSubmitting}
          />
          <label>密碼確認</label>
        </div>
        <div className={saveChange} disabled={isSubmitting}>
          <button onClick={() => handleSubmit()}>
            {isSubmitting ? '傳送中...' : '儲存'}
          </button>
        </div>
      </div>
    </RightSideContainer>
  )
}
export default InfoSetting
