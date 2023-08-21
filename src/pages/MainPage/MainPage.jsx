import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// scss
import styles from 'pages/MainPage/MainPage.module.scss'

// components
import { OvalButtonHuge } from 'components/Button/Button'
import { SearchBarMain } from 'components/SearchBar/SearchBar'
import MainPageScrollCard from 'components/ScrollCardGroup/MainPageScrollCard'
import MainLayout from 'components/MainLayout/MainLayout'

// photo
import mainPagePhoto from 'assets/photos/mainpage-photo.JPG'
import mainPagePhotoPlaceholder from 'assets/photos/mainpage-photo-placeholder.jpg'

// api
import { getNTrails } from 'api/trail'
import { getTopPosts } from 'api/post'

export default function MainPage() {
  const navigate = useNavigate()
  const [trailData, setTrailData] = useState(null)
  const [postData, setPostData] = useState(null)
  const [mainPhotoLoaded, setMainPhotoLoaded] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const [{ trails }, { posts }] = await Promise.all([
        getNTrails(5),
        getTopPosts(10)
      ])
      setTrailData(trails)
      setPostData(posts)
    }
    getData()
  }, [])

  return (
    <MainLayout>
      <div className={styles.photoContainer}>
        <img
          className={styles.mainPagePhoto}
          src={mainPhotoLoaded ? mainPagePhoto : mainPagePhotoPlaceholder}
          alt="mainPagePhoto"
          onLoad={() => setMainPhotoLoaded(true)}
        />
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>100+ Ways </h1>
          <h1 className={styles.slogan}>to Meet Nature</h1>
          <div className={styles.buttonContainer}>
            <OvalButtonHuge onClick={() => navigate('/search/allTrails')}>
              探索所有步道
            </OvalButtonHuge>
          </div>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBarMain />
      </div>
      <div className={styles.trailsContainer}>
        <MainPageScrollCard
          data={trailData}
          title="最受歡迎路線Top10"
          type="trail"
        />
        <MainPageScrollCard data={postData} title="最新心得" type="review" />
      </div>
    </MainLayout>
  )
}
