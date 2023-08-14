import { useRef, useState } from 'react'
import styles from './UpLoad.module.scss'
// import { ReactComponent as IconDefaultUser } from 'assets/icons/icon-user.svg'
const { upLoadContainer, avatar } = styles

const UpLoad = ({ onAvatarImg, theUserData }) => {
  const inpuRef = useRef(null)
  const [image, setImage] = useState('')

  const handleImageClick = () => {
    inpuRef.current.click()
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
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
          // <IconDefaultUser className={`${avatar} ${defaultImg}`} />
          <div className={avatar}>
            <img src={theUserData.avatar} alt="" />
          </div>
        )}
      </div>
      <button onClick={() => handleImageClick()}>點擊上傳</button>
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
