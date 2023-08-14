import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './InfoSetting.module.scss'
import UpLoad from 'components/UserContent/InfoSetting/UpLoad/UpLoad'
import { useRef, useState } from 'react'
import { editUserData } from 'api/user'
const { infoSettingContainer, infoItem, saveChange } = styles

const InfoSetting = ({ theUserData, onUpdateCardInfo }) => {
  const inputRef = useRef({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [avatarImg, setAvatarImg] = useState('')
  const handleInputChange = (inputName) => (event) => {
    const { value } = event.target
    inputRef.current[inputName] = value
  }
  const handleAvatarImg = (picture) => {
    setAvatarImg(picture)
  }

  const handleSubmit = async () => {
    if (isSubmitting) {
      return
    }
    if (!inputRef.current.password) {
      alert('請輸入密碼')
      return
    }
    if (inputRef.current.name === '') {
      alert('暱稱請勿空白')
      return
    }
    if (inputRef.current.introduction === '') {
      alert('請輸入自我介紹')
      return
    }
    if (inputRef.current.password !== inputRef.current.confirm) {
      alert('兩次輸入密碼不相符')
      return
    }

    setIsSubmitting(true)
    try {
      const data = {
        name: inputRef.current.name || theUserData.name,
        email: inputRef.current.email,
        introduction: inputRef.current.introduction || theUserData.introduction,
        password: inputRef.current.password || theUserData.password
      }
      if (avatarImg !== '') {
        data.avatar = avatarImg
      }
      const res = await editUserData({ data })
      console.log(res)
      setIsSubmitting(false)
      onUpdateCardInfo()
      alert('儲存成功!')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RightSideContainer title="編輯個人資料">
      <div className={infoSettingContainer}>
        <div className={infoItem}>
          <UpLoad
            onAvatarImg={handleAvatarImg}
            avatarImg={avatarImg}
            theUserData={theUserData}
          />
        </div>
        <div className={infoItem}>
          <input
            type="text"
            onChange={handleInputChange('name')}
            readOnly={isSubmitting}
            defaultValue={theUserData.name}
          />
          <label>暱稱</label>
        </div>
        <div className={infoItem}>
          <textarea
            id="introduction"
            cols="20"
            rows="5"
            onChange={handleInputChange('introduction')}
            readOnly={isSubmitting}
            defaultValue={theUserData.introduction}
          ></textarea>
          <label>關於我</label>
        </div>
        <div className={infoItem}>
          <input
            type="text"
            onChange={handleInputChange('email')}
            defaultValue={theUserData.email}
            readOnly
          />
          <label>Email</label>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('password')}
            readOnly={isSubmitting}
          />
          <label>密碼</label>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('confirm')}
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
