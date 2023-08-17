import Dropzone from 'react-dropzone'
import styles from 'components/Input/ImgDropzone.module.scss'
import photoIcon from 'assets/icons/photo-icon.svg'
import Toast from 'utils/sweetAlertConfig'

export default function ImgDropzone({ uploadedImage, onDrop }) {
  const fileValidator = (file) => {
    if (file.size > 10485760) {
      Toast.fire({
        icon: 'error',
        title: '檔案太大囉!'
      })
    }

    return null
  }
  const renderDropzoneContent = ({ getRootProps, getInputProps }) => {
    return (
      <section>
        <div {...getRootProps()} className={styles.dropzone}>
          <input {...getInputProps()} />
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" className={styles.img} />
          ) : (
            <div className={styles.info}>
              <>
                <img src={photoIcon} className={styles.icon} />
                <span>
                  <span className={styles.highLigh}>拖曳</span>或
                  <span className={styles.highLigh}>點擊</span>
                  上傳你的檔案
                </span>
                <span>
                  檔案大小上限<span className={styles.limit}>10MB</span>
                </span>
              </>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <Dropzone onDrop={onDrop} maxSize={10485760} validator={fileValidator}>
      {renderDropzoneContent}
    </Dropzone>
  )
}
