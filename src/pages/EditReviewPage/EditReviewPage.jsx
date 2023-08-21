import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Toast from 'utils/sweetAlertConfig.js'

// scss
import styles from 'pages/EditReviewPage/EditReviewPage.module.scss'

// components
import MainLayout from 'components/MainLayout/MainLayout'
import WholePageModal from 'components/Modal/WholePageModal'
import IconRadioInput from 'components/Input/IconRadioInput'
import { SecondaryButton, SecondaryButtonLight } from 'components/Button/Button'
import ImgDropzone from 'components/Input/ImgDropzone'
import UpLoadingSpinner from 'components/Spinner/UpLoadingSpinner'
// api
import { editPost, getPostForEdit, publishPost, scratchPost } from 'api/post'

export default function EditReviewPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { reviewID } = useParams()
  const [isNewPost, setIsNewPost] = useState(null)
  const [isDraft, setIsDraft] = useState(null)
  const [isLoading, setIsLoading] = useState('')
  const formRef = useRef(null)
  // 輸入內容state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [difficulty, setDifficulty] = useState(null)
  const [recommend, setRecommend] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState(null)

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
    setImage(file)
  }

  // 送出前檢查項目
  const isNotValid =
    /^\s*$/.test(title) ||
    !category ||
    !difficulty ||
    !recommend ||
    !uploadedImage ||
    /^\s*$/.test(description)

  const postData = {
    title,
    category,
    description,
    image,
    difficulty,
    recommend
  }

  // 發布功能
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    // 檢查輸入內容無空白
    if (isNotValid) {
      Toast.fire({
        icon: 'info',
        title: '請確認每個項目都有輸入!'
      })
    } else {
      setIsLoading('上傳中')

      // 區別上傳新文章 或 舊文章，call 不同的API
      if (isNewPost) {
        // 發布新文章
        const { postId } = await publishPost(postData)
        if (postId) {
          setIsLoading('')
          Toast.fire({
            icon: 'success',
            title: '發布成功!'
          })
          navigate(`/review/${postId}`)
        } else if (!postId) {
          setIsLoading('')
        }
      } else if (!isNewPost) {
        // 編輯舊文章，編輯草稿後發布
        const { success } = await editPost({
          reviewID,
          ...postData,
          inProgress: false
        })
        if (success) {
          setIsLoading('')
          Toast.fire({
            icon: 'success',
            title: '編輯成功!'
          })
          navigate(`/review/${reviewID}`)
        } else if (!success) {
          setIsLoading('')
        }
      }
    }
  }

  // 編輯草稿
  const handleEditScratch = async (event) => {
    event.preventDefault()
    // 檢查輸入內容無空白
    if (isNotValid) {
      Toast.fire({
        icon: 'info',
        title: '請確認每個項目都有輸入!'
      })
    } else {
      setIsLoading('上傳中')
      const { success } = await editPost({
        reviewID,
        ...postData,
        inProgress: true
      })
      if (success) {
        setIsLoading('')
        Toast.fire({
          icon: 'success',
          title: '編輯成功!'
        })
        navigate(`/review/${reviewID}`)
      } else if (!success) {
        setIsLoading('')
      }
    }
  }

  // 暫存心得
  const handleScratch = async (event) => {
    event.preventDefault()
    if (isNotValid) {
      Toast.fire({
        icon: 'info',
        title: '請確認每個項目都有輸入!'
      })
    } else {
      setIsLoading('上傳中')
      const currentUserId = localStorage.getItem('currentUserId')
      const { postId } = await scratchPost(postData)
      if (postId) {
        setIsLoading('')
        Toast.fire({
          icon: 'success',
          title: '暫存心得成功!'
        })
        navigate(`/user/${currentUserId}/myReviews`)
      } else if (!postId) {
        setIsLoading('')
      }
    }
  }

  useEffect(() => {
    const editOrNew = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login')
      }
      if (location.pathname === '/newReview') {
        setIsNewPost(true)
      } else {
        setIsNewPost(false)
        setIsLoading('讀取中')
        const { postData } = await getPostForEdit(reviewID)
        if (postData) {
          if (postData.inProgress === false) {
            setIsDraft(false)
          } else if (postData.inProgress === true) {
            setIsDraft(true)
          }
          setTitle(postData.title)
          setDescription(postData.description)
          setUploadedImage(postData.image)
          setDifficulty(postData.difficulty)
          setRecommend(postData.recommend)
          setCategory(postData.category)
          setIsLoading('')
        } else {
          Toast.fire({
            icon: 'error',
            title: '您無法修改此篇文章!'
          })
          setIsLoading('')
          navigate('/search/allReviews')
        }
      }
    }
    editOrNew()
  }, [location])

  return (
    <div>
      {isLoading !== '' && <UpLoadingSpinner text={isLoading} />}
      <MainLayout>
        <WholePageModal>
          <h3 className={styles.title}>
            {isNewPost ? '新增心得' : isDraft ? '編輯草稿' : '編輯心得'}
          </h3>
          <form className={styles.form} ref={formRef}>
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
              <input
                type="radio"
                id="baiyue"
                name="category"
                value="百岳"
                checked={category === '百岳'}
                readOnly
              />
              <label htmlFor="baiyue" onClick={(e) => setCategory('百岳')}>
                百岳
              </label>
              <input
                type="radio"
                id="subur"
                name="category"
                value="郊山"
                checked={category === '郊山'}
                readOnly
              />
              <label htmlFor="subur" onClick={(e) => setCategory('郊山')}>
                郊山
              </label>
              <input
                type="radio"
                id="oversea"
                name="category"
                value="海外"
                checked={category === '海外'}
                readOnly
              />
              <label htmlFor="oversea" onClick={(e) => setCategory('海外')}>
                海外
              </label>
            </div>
            {/* 困難度 */}
            <label className={styles.inputLabel}>困難度</label>
            <IconRadioInput
              iconType="difficulty"
              onChange={handleDifficultyChange}
              score={difficulty}
            />
            {/* 推薦指數 */}
            <label className={styles.inputLabel}>推薦指數</label>
            <IconRadioInput
              iconType="recommend"
              onChange={handleRecommendChange}
              score={recommend}
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
              {isNewPost ? (
                <>
                  <div className={styles.buttonContainer}>
                    <SecondaryButtonLight onClick={handleScratch}>
                      暫存心得
                    </SecondaryButtonLight>
                  </div>
                  <div className={styles.buttonContainer}>
                    <SecondaryButton onClick={handleFormSubmit}>
                      發布心得
                    </SecondaryButton>
                  </div>
                </>
              ) : isDraft ? (
                <>
                  <div className={styles.buttonContainer}>
                    <SecondaryButtonLight onClick={handleEditScratch}>
                      暫存草稿
                    </SecondaryButtonLight>
                  </div>
                  <div className={styles.buttonContainer}>
                    <SecondaryButton onClick={handleFormSubmit}>
                      發布草稿
                    </SecondaryButton>
                  </div>
                </>
              ) : (
                <div className={styles.buttonContainer}>
                  <SecondaryButton onClick={handleFormSubmit}>
                    編輯心得
                  </SecondaryButton>
                </div>
              )}
            </div>
          </form>
        </WholePageModal>
      </MainLayout>
    </div>
  )
}
