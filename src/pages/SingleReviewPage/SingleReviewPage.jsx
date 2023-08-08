import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Toast from 'utils/sweetAlertConfig.js'
import formatDateTime from 'utils/time.js'
// scss
import styles from 'pages/SingleReviewPage/SingleReviewPage.module.scss'

// svg and photo
import { ReactComponent as FavoriteIcon } from 'assets/icons/icon-label.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/like-icon.svg'
import { ReactComponent as ShareIcon } from 'assets/icons/share-icon.svg'
import { ReactComponent as ReportIcon } from 'assets/icons/report-icon.svg'

// components
import { SecondaryButton, SecondaryButtonGray } from 'components/Button/Button'
import { ColorTag } from 'components/Tag/Tag'
import MainLayout from 'components/MainLayout/MainLayout'
import WholePageModal from 'components/Modal/WholePageModal'
import IconRadioInput from 'components/Input/IconRadioInput'

// api
import {
  collectPost,
  discollectPost,
  dislikePost,
  likePost,
  getOnePost
} from 'api/post.js'
import { followUser, unFollowUser } from 'api/followship.js'

export default function SingleReviewPage() {
  const navigate = useNavigate()
  const [post, setPost] = useState('')
  const { reviewID } = useParams()

  // 追蹤使用者
  const handleFollow = async () => {
    const { success } = await followUser(post.User.id)
    if (success) {
      const updatedUser = { ...post.User, isFollow: true }
      const updatedPost = { ...post, User: updatedUser }
      setPost(updatedPost)
    } else {
      Toast.fire({
        icon: 'error',
        title: '追蹤時遇到一點問題!'
      })
    }
  }

  // 退追蹤使用者
  const handleUnFollow = async () => {
    const { success } = await unFollowUser(post.User.id)
    if (success) {
      const updatedUser = { ...post.User, isFollow: false }
      const updatedPost = { ...post, User: updatedUser }
      setPost(updatedPost)
    } else {
      Toast.fire({
        icon: 'error',
        title: '退追蹤時遇到一點問題!'
      })
    }
  }

  // 按讚/取消讚
  const handleLike = async () => {
    if (!post.isLike) {
      const { success } = await likePost(reviewID)
      if (success) {
        const updatedPost = { ...post, isLike: true }
        setPost(updatedPost)
      } else {
        Toast.fire({
          icon: 'error',
          title: '按讚時遇到一點問題!'
        })
      }
    } else if (post.isLike) {
      const { success } = await dislikePost(reviewID)
      if (success) {
        const updatedPost = { ...post, isLike: false }
        setPost(updatedPost)
      } else {
        Toast.fire({
          icon: 'error',
          title: '取消讚時遇到一點問題!'
        })
      }
    }
  }

  // 按收藏/取消收藏
  const handleCollect = async () => {
    if (!post.isFavorite) {
      const { success } = await collectPost(reviewID)
      if (success) {
        const updatedPost = { ...post, isFavorite: true }
        setPost(updatedPost)
      } else {
        Toast.fire({
          icon: 'error',
          title: '收藏時遇到一點問題!'
        })
      }
    } else if (post.isFavorite) {
      const { success } = await discollectPost(reviewID)
      if (success) {
        const updatedPost = { ...post, isFavorite: false }
        setPost(updatedPost)
      } else {
        Toast.fire({
          icon: 'error',
          title: '取消收藏時遇到一點問題!'
        })
      }
    }
  }

  useEffect(() => {
    const getPost = async () => {
      const { status, postData, message } = await getOnePost(reviewID)
      if (status === 'success') {
        const updatedPost = {
          ...postData,
          createdAt: formatDateTime(postData.createdAt)
        }
        setPost(updatedPost)
      } else if (
        message ===
        "TypeError: Cannot read properties of null (reading 'toJSON')"
      ) {
        // 頁面不存在，導向error page
        navigate('/error')
      } else {
        // 其他錯誤狀況
        Toast.fire({
          icon: 'error',
          title: '遇到一點問題，請嘗試刷新網頁!'
        })
      }
    }
    getPost()
  }, [reviewID])

  return (
    <MainLayout>
      {post && (
        <WholePageModal>
          <section className={styles.reviewInfo}>
            {/* 標題 */}
            <div className={styles.title}>
              <h2>{post.title}</h2>
            </div>
            {/* 作者資訊 */}
            <div className={styles.authorAndButton}>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <div className={styles.nameAndFollow}>
                    <img
                      className={`cursor-point ${styles.avatar}`}
                      src={post.User.avatar}
                      alt="user-avatar"
                      onClick={() =>
                        navigate(`/user/${post.User.id}/myReviews`)
                      }
                    />
                    <span
                      className={`cursor-point ${styles.authorName}`}
                      onClick={() =>
                        navigate(`/user/${post.User.id}/myReviews`)
                      }
                    >
                      {post.User.name}
                    </span>
                    <div className={styles.buttonContainer}>
                      {post.User.isFollow ? (
                        <SecondaryButtonGray onClick={handleUnFollow}>
                          已追蹤
                        </SecondaryButtonGray>
                      ) : (
                        <SecondaryButton onClick={handleFollow}>
                          關注作者
                        </SecondaryButton>
                      )}
                    </div>
                  </div>
                  <div className={styles.otherInfo}>
                    <span>{post.createdAt} 發表</span>
                    <span>{post.likeCount} 個讚</span>
                    <span>{post.favoriteCount} 個收藏</span>
                  </div>
                </div>
              </div>
              {/* 案讚、收藏、檢舉、分享按鈕 */}
              <div className={styles.socialButtons}>
                <div
                  className={`cursor-point ${styles.like}`}
                  onClick={handleLike}
                >
                  <LikeIcon
                    className={`${styles.icon} ${
                      post.isLike && styles.likeActive
                    }`}
                  />
                  <span>案讚</span>
                </div>
                <div
                  className={`cursor-point ${styles.favorite}`}
                  onClick={handleCollect}
                >
                  <FavoriteIcon
                    className={`${styles.icon} ${
                      post.isFavorite && styles.favoriteActive
                    }`}
                  />
                  <span>收藏</span>
                </div>
                <div className={`cursor-point ${styles.report}`}>
                  <ReportIcon className={styles.icon} />
                  <span>檢舉</span>
                </div>
                <div className={`cursor-point ${styles.share}`}>
                  <ShareIcon className={styles.icon} />
                  <span>分享</span>
                </div>
              </div>
            </div>
            <div className={styles.recommend}>
              <div className={styles.icon}>
                <span>困難度</span>
                <IconRadioInput iconType="difficulty" score={post.difficulty} />
              </div>
              <div className={styles.icon}>
                <span>推薦指數</span>
                <IconRadioInput iconType="recommend" score={post.recommend} />
              </div>
            </div>
            <div className={styles.tag}>
              <ColorTag>{post.category}</ColorTag>
            </div>
          </section>
          <section className={styles.reviewPhoto}>
            <img className={styles.photo} src={post.image} alt="步道圖片" />
          </section>
          <section className={styles.reviewText}>
            <div className={styles.divide}>
              <hr className={styles.line} />
              <span className={styles.words}>
                以下內容為網友分享，不代表登山小站立場。
              </span>
            </div>
            <div className={styles.text}>{post.description}</div>
          </section>
        </WholePageModal>
      )}
    </MainLayout>
  )
}
