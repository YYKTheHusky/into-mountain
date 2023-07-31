// scss
import styles from 'pages/EditReviewPage/EditReviewPage.module.scss'

// components
import MainLayout from 'components/MainLayout/MainLayout'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function EditReviewPage() {
  const location = useLocation()
  const [isNewPost, setIsNewPost] = useState('')
  if (location.pathname === 'newReview') {
    setIsNewPost(true)
  }
  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        <div className={`mx-auto ${styles.container}`}>
          <h3>{isNewPost ? '新增心得' : '編輯心得'}</h3>
          <form>
            <label htmlFor="title">心得標題</label>
            <br />
            <input id="title" />
            <br />
            <label>心得分類</label>
            <br />
            <input type="radio" id="baiyue" name="type" value="百岳" checked />
            <label htmlFor="baiyue">百岳</label>
            <input type="radio" id="subur" name="type" value="郊山" />
            <label htmlFor="subur">郊山</label>
            <input type="radio" id="oversea" name="type" value="海外" />
            <label htmlFor="oversea">海外</label>
            <br />
          </form>
        </div>
      </div>
    </MainLayout>
  )
}
