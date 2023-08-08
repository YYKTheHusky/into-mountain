import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

// scss
import styles from 'pages/EditReviewPage/EditReviewPage.module.scss'

// components
import MainLayout from 'components/MainLayout/MainLayout'
import WholePageModal from 'components/Modal/WholePageModal'
import IconRadioInput from 'components/Input/IconRadioInput'
import {
  SecondaryButton,
  SecondaryButtonGray,
  SecondaryButtonLight
} from 'components/Button/Button'
import ImgDropzone from 'components/Input/ImgDropzone'

export default function EditReviewPage() {
  const location = useLocation()
  const [isNewPost, setIsNewPost] = useState(null)
  const formRef = useRef(null)
  // 輸入內容state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [difficulty, setDifficulty] = useState(null)
  const [recommend, setRecommend] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)

  // 困難度與推薦度
  const handleDifficultyChange = (number) => {
    setDifficulty(number)
  }

  const handleRecommendChange = (number) => {
    setRecommend(number)
  }

  // 封面圖片
  const handleDrop = (acceptedFiles) => {
    // 在這裡處理接受的檔案
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setUploadedImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
    formValues.difficulty = difficulty
    formValues.recommend = recommend
    formValues.image = uploadedImage

    // 檢查輸入內容
    const checkInput = () => {
      const whitespaceRegex = /^\s*$/
      if (whitespaceRegex.test(title)) {
        console.log('請輸入標題')
      } else if (!formValues.category) {
        console.log('請選擇心得分類')
      } else if (!difficulty) {
        console.log('請選擇困難度1-5分')
      } else if (!recommend) {
        console.log('請選擇推薦指數1-5分')
      } else if (!uploadedImage) {
        console.log('請上傳一張封面圖片')
      } else if (whitespaceRegex.test(description)) {
        console.log('請輸入內容')
      }
    }

    // 在這裡進行發布心得的相關邏輯
    console.log(formValues)
    checkInput()
  }

  useEffect(() => {
    if (location.pathname === '/newReview') {
      setIsNewPost(true)
    }
  }, [location])

  return (
    <MainLayout>
      <WholePageModal>
        <h3 className={styles.title}>{isNewPost ? '新增心得' : '編輯心得'}</h3>
        <form className={styles.form} ref={formRef} onSubmit={handleFormSubmit}>
          {/* 心得標題 */}
          <label htmlFor="title" className={styles.inputLabel}>
            心得標題
          </label>
          <input
            type="text"
            maxLength="40"
            id="title"
            name="title"
            value={title}
            placeholder="請輸入標題"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={styles.titleLength}>{title.length} / 40</div>
          {/* 心得分類 */}
          <label className={styles.inputLabel}>心得分類</label>
          <div>
            <input type="radio" id="baiyue" name="category" value="百岳" />
            <label htmlFor="baiyue">百岳</label>
            <input type="radio" id="subur" name="category" value="郊山" />
            <label htmlFor="subur">郊山</label>
            <input type="radio" id="oversea" name="category" value="海外" />
            <label htmlFor="oversea">海外</label>
          </div>
          {/* 困難度 */}
          <label className={styles.inputLabel}>困難度</label>
          <IconRadioInput
            iconType="difficulty"
            onChange={handleDifficultyChange}
          />
          {/* 推薦指數 */}
          <label className={styles.inputLabel}>推薦指數</label>
          <IconRadioInput
            iconType="recommend"
            onChange={handleRecommendChange}
          />
          {/* 上傳封面圖片 */}
          <label className={styles.inputLabel}>上傳封面圖片</label>
          <ImgDropzone uploadedImage={uploadedImage} onDrop={handleDrop} />
          {/* 心得內容 */}
          <label className={styles.inputLabel}>心得內容</label>
          <textarea
            maxLength="5000"
            placeholder="請輸入心得內容"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles.descriptionLength}>
            {description.length} / 5000
          </div>
          {/* 按鈕 */}
          <div className={styles.buttonGroup}>
            <div className={styles.buttonContainer}>
              <SecondaryButtonGray>取消</SecondaryButtonGray>
            </div>
            <div className={styles.buttonContainer}>
              <SecondaryButtonLight>暫存心得</SecondaryButtonLight>
            </div>
            <div className={styles.buttonContainer}>
              <SecondaryButton type="submit">發布心得</SecondaryButton>
            </div>
          </div>
        </form>
      </WholePageModal>
    </MainLayout>
  )
}
