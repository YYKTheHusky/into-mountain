import Dropzone from 'react-dropzone'
import styles from 'components/Input/ImgDropzone.module.scss'
import photoIcon from 'assets/icons/photo-icon.svg'

export default function ImgDropzone({ uploadedImage, onDrop }) {
  const renderDropzoneContent = ({ getRootProps, getInputProps }) => {
    return (
      <section>
        <div {...getRootProps()} className={styles.dropzone}>
          <input {...getInputProps()} />
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" className={styles.img} />
          ) : (
            <div className={styles.info}>
              <img src={photoIcon} className={styles.icon} />
              <p>拖曳或點擊上傳你的檔案</p>
            </div>
          )}
        </div>
      </section>
    )
  }

  return <Dropzone onDrop={onDrop}>{renderDropzoneContent}</Dropzone>
}
