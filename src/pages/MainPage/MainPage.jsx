// scss
import styles from 'pages/MainPage/MainPage.module.scss'

// components
import { OvalButtonHuge } from 'components/Button/Button'
import { SearchBarMain } from 'components/SearchBar/SearchBar'
import MainPageScrollCard from 'components/ScrollCardGroup/MainPageScrollCard'
import MainLayout from 'components/MainLayout/MainLayout'

// svg
import mainPagePhoto from 'assets/photos/mainpage-photo.svg'

export default function MainPage() {
  // 假資料
  const data = [
    {
      trailId: 1,
      title: '珠穆朗瑪峰',
      difficulty: '困難',
      favoriteCount: '9',
      distance: '2km',
      duration: '2hr'
    },
    {
      trailId: 2,
      title: 'Flame Mountain Loop',
      difficulty: 'Hard',
      favoriteCount: '3',
      distance: '2km',
      duration: '2hr'
    },
    {
      trailId: 3,
      title: 'Flame Mountain Loop',
      difficulty: 'Hard',
      favoriteCount: '6',
      distance: '2km',
      duration: '2hr'
    },
    {
      trailId: 4,
      title: 'Flame Mountain Loop',
      difficulty: 'Hard',
      favoriteCount: '5',
      distance: '2km',
      duration: '2hr'
    },
    {
      trailId: 5,
      title: 'Flame Mountain Loop',
      difficulty: 'Hard',
      favoriteCount: '7',
      distance: '2km',
      duration: '2hr'
    }
  ]

  return (
    <MainLayout>
      <div className={styles.photoContainer}>
        <img
          className={styles.mainPagePhoto}
          src={mainPagePhoto}
          alt="mainPagePhoto"
        ></img>
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>100+ Ways </h1>
          <h1 className={styles.slogan}>to Meet Nature</h1>
          <div className={styles.buttonContainer}>
            <OvalButtonHuge>探索所有步道</OvalButtonHuge>
          </div>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBarMain></SearchBarMain>
      </div>
      <div className={styles.trailsContainer}>
        <MainPageScrollCard
          data={data}
          title="最受歡迎路線Top10"
        ></MainPageScrollCard>
        <MainPageScrollCard data={data} title="最新心得"></MainPageScrollCard>
      </div>
    </MainLayout>
  )
}
