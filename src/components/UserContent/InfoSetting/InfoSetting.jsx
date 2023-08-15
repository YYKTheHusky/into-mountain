import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './InfoSetting.module.scss'
import UpLoad from 'components/UserContent/InfoSetting/UpLoad/UpLoad'
import { useRef, useState } from 'react'
import { editUserData } from 'api/user'
const {
  infoSettingContainer,
  infoItem,
  saveChange,
  emailInput,
  errorMessageStyle,
  active,
  disabledBtnStyle
} = styles

const InfoSetting = ({ theUserData, onUpdateCardInfo }) => {
  const inputRef = useRef({
    name: '',
    introduction: '',
    password: '',
    confirm: ''
  })
  const nameRef = useRef()
  const introRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [avatarImg, setAvatarImg] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    name: {
      status: false,
      message: ''
    },
    introduction: {
      status: false,
      message: ''
    },
    password: {
      status: false,
      message: ''
    },
    confirm: {
      status: false,
      message: ''
    }
  })

  const handleInputChange = (inputName) => (event) => {
    const { value } = event.target
    inputRef.current[inputName] = value
    if (inputName === 'name') {
      if (value === '') {
        setErrorMessage((pre) => ({
          ...pre,
          name: { status: true, message: '暱稱請勿空白！' }
        }))
      } else {
        setErrorMessage((pre) => ({
          ...pre,
          name: { status: false, message: '' }
        }))
      }
    } else if (inputName === 'introduction') {
      if (value === '') {
        setErrorMessage((pre) => ({
          ...pre,
          introduction: { status: true, message: '請輸入自我介紹！' }
        }))
      } else if (value.length > 80) {
        setErrorMessage((pre) => ({
          ...pre,
          introduction: { status: true, message: '請勿超過80個字！' }
        }))
      } else {
        setErrorMessage((pre) => ({
          ...pre,
          introduction: { status: false, message: '' }
        }))
      }
    } else if (inputName === 'password') {
      if (value === '') {
        setErrorMessage((pre) => ({
          ...pre,
          password: { status: true, message: '請輸入密碼！' }
        }))
      } else {
        setErrorMessage((pre) => ({
          ...pre,
          password: { status: false, message: '' }
        }))
      }
    } else if (inputName === 'confirm') {
      setErrorMessage((pre) => ({
        ...pre,
        confirm: { status: false, message: '' }
      }))
    }
  }
  const handleAvatarImg = (picture) => {
    setAvatarImg(picture)
  }

  const handleSubmit = async () => {
    if (isSubmitting) {
      return
    }
    if (Object.values(errorMessage).find((item) => item.status === true)) {
      return
    }
    if (passwordRef.current.value === '') {
      setErrorMessage((pre) => ({
        ...pre,
        password: { status: true, message: '請輸入密碼！' }
      }))
      return
    }
    if (nameRef.current.value === '') {
      setErrorMessage((pre) => ({
        ...pre,
        name: { status: true, message: '暱稱請勿空白！' }
      }))
      return
    }
    if (introRef.current.value === '') {
      setErrorMessage((pre) => ({
        ...pre,
        introduction: { status: true, message: '請輸入自我介紹！' }
      }))
      return
    }
    if (passwordRef.current.value !== confirmRef.current.value) {
      setErrorMessage((pre) => ({
        ...pre,
        confirm: { status: true, message: '兩次輸入密碼不相符！' }
      }))
      return
    }

    setIsSubmitting(true)
    try {
      const data = {
        name: inputRef.current.name,
        email: inputRef.current.email,
        introduction: inputRef.current.introduction,
        password: inputRef.current.password
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
            ref={nameRef}
            className={errorMessage.name.status ? active : ''}
          />
          <label>暱稱</label>
          <span className={errorMessageStyle}>
            {errorMessage.name.status ? errorMessage.name.message : ' '}
          </span>
        </div>
        <div className={infoItem}>
          <textarea
            id="introduction"
            cols="20"
            rows="5"
            onChange={handleInputChange('introduction')}
            readOnly={isSubmitting}
            defaultValue={theUserData.introduction}
            ref={introRef}
            className={errorMessage.introduction.status ? active : ''}
          ></textarea>
          <label>關於我</label>
          <span className={errorMessageStyle}>
            {errorMessage.introduction.status
              ? errorMessage.introduction.message
              : ' '}
          </span>
        </div>
        <div className={infoItem}>
          <input
            type="text"
            onChange={handleInputChange('email')}
            defaultValue={theUserData.email}
            readOnly
            className={emailInput}
          />
          <label>Email</label>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('password')}
            readOnly={isSubmitting}
            ref={passwordRef}
            className={errorMessage.password.status ? active : ''}
          />
          <label>密碼</label>
          <span className={errorMessageStyle}>
            {errorMessage.password.status ? errorMessage.password.message : ' '}
          </span>
        </div>
        <div className={infoItem}>
          <input
            type="password"
            onChange={handleInputChange('confirm')}
            readOnly={isSubmitting}
            ref={confirmRef}
            className={errorMessage.confirm.status ? active : ''}
          />
          <label>確認密碼</label>
          <span className={errorMessageStyle}>
            {errorMessage.confirm.status ? errorMessage.confirm.message : ' '}
          </span>
        </div>
        <div className={saveChange} disabled={isSubmitting}>
          <button
            onClick={() => handleSubmit()}
            className={
              Object.values(errorMessage).find(
                (item) => item.status === true
              ) && disabledBtnStyle
            }
          >
            {isSubmitting ? '傳送中...' : '儲存'}
          </button>
          {isSubmitting && <span>123</span>}
        </div>
      </div>
    </RightSideContainer>
  )
}
export default InfoSetting
