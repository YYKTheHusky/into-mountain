import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
import styles from './InfoSetting.module.scss'
import UpLoad from 'components/UserContent/InfoSetting/UpLoad/UpLoad'
const { infoSettingContainer, infoItem, saveChange } = styles

const InfoSetting = () => {
  return (
    <RightSideContainer title="編輯個人資料">
      <div className={infoSettingContainer}>
        <div className={infoItem}>
          <UpLoad />
        </div>
        <div className={infoItem}>
          <input type="text" />
          <label>暱稱</label>
        </div>
        <div className={infoItem}>
          <textarea id="關於我" cols="20" rows="5"></textarea>
          <label>關於我</label>
        </div>
        <div className={infoItem}>
          <input type="text" />
          <label>Email</label>
        </div>
        <div className={infoItem}>
          <input type="password" />
          <label>密碼</label>
        </div>
        <div className={infoItem}>
          <input type="password" />
          <label>密碼確認</label>
        </div>
        <div className={saveChange}>
          <button>儲存</button>
        </div>
      </div>
    </RightSideContainer>
  )
}
export default InfoSetting
