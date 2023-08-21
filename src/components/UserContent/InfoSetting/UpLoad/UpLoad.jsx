import { useRef, useState } from 'react'
import styles from './UpLoad.module.scss'
import { ReactComponent as IconDefaultUser } from 'assets/icons/icon-user.svg'
const { upLoadContainer, avatar, defaultImg, text } = styles

const AVT = ({ theUserData }) => {
  if (theUserData.avatar === null) {
    return <IconDefaultUser className={defaultImg} />
  }
  return <img src={theUserData.avatar} alt="" />
}

const UpLoad = ({ onAvatarImg, theUserData }) => {
  const inpuRef = useRef(null)
  const [image, setImage] = useState('')

  const handleImageClick = () => {
    inpuRef.current.click()
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 1024 * 1024 * 10) {
      return
    }
    onAvatarImg(file)
    setImage(file)
  }

  return (
    <div className={upLoadContainer}>
      <div>
        {image ? (
          <div className={avatar}>
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        ) : (
          <div className={avatar}>
            <AVT theUserData={theUserData} />
          </div>
        )}
      </div>
      <div>
        <button onClick={() => handleImageClick()}>上傳照片</button>
        <div className={text}>
          (檔案大小上限 <span>10MB</span>)
        </div>
      </div>

      <input
        type="file"
        ref={inpuRef}
        style={{ display: 'none' }}
        onChange={(e) => handleImageChange(e)}
      />
    </div>
  )
}

export default UpLoad
