import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// scss
import styles from 'pages/MainPage/MainPage.module.scss'

// components
import { OvalButtonHuge } from 'components/Button/Button'
import { SearchBarMain } from 'components/SearchBar/SearchBar'
import MainPageScrollCard from 'components/ScrollCardGroup/MainPageScrollCard'
import MainLayout from 'components/MainLayout/MainLayout'

// svg
import mainPagePhoto from 'assets/photos/mainpage-photo.svg'

// api
import { getAllTrails } from 'api/trail'
import { getAllPost } from 'api/post'

export default function MainPage() {
  const navigate = useNavigate()
  const [trailData, setTrailData] = useState(null)
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const [{ trails }, { posts }] = await Promise.all([
        getAllTrails(),
        getAllPost()
      ])
      setTrailData(trails.slice(0, 5))
      setPostData(posts.slice(0, 10))
    }
    getData()
  }, [])

  return (
    <MainLayout>
      <div className={styles.photoContainer}>
        <img
          className={styles.mainPagePhoto}
          src={mainPagePhoto}
          alt="mainPagePhoto"
        />
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>100+ Ways </h1>
          <h1 className={styles.slogan}>to Meet Nature</h1>
          <div className={styles.buttonContainer}>
            <OvalButtonHuge onClick={() => navigate('/trail')}>
              探索所有步道
            </OvalButtonHuge>
          </div>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBarMain />
      </div>
      <div className={styles.trailsContainer}>
        {trailData && (
          <MainPageScrollCard
            data={trailData}
            title="最受歡迎路線Top10"
            type="trail"
          />
        )}
        {postData && (
          <MainPageScrollCard data={postData} title="最新心得" type="review" />
        )}
      </div>
    </MainLayout>
  )
}
