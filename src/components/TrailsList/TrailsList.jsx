import TrailsListCard from './TrailsListCard/TrailsListCard'
import styles from './TrailsList.module.scss'
const { trailsListContainer } = styles
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
  },
  {
    trailId: 6,
    title: 'Flame Mountain Loop',
    difficulty: 'Hard',
    favoriteCount: '7',
    distance: '2km',
    duration: '2hr'
  },
  {
    trailId: 7,
    title: 'Flame Mountain Loop',
    difficulty: 'Hard',
    favoriteCount: '7',
    distance: '2km',
    duration: '2hr'
  },
  {
    trailId: 8,
    title: 'Flame Mountain Loop',
    difficulty: 'Hard',
    favoriteCount: '7',
    distance: '2km',
    duration: '2hr'
  },
  {
    trailId: 9,
    title: 'Flame Mountain Loop',
    difficulty: 'Hard',
    favoriteCount: '7',
    distance: '2km',
    duration: '2hr'
  },
  {
    trailId: 10,
    title: 'Flame Mountain Loop',
    difficulty: 'Hard',
    favoriteCount: '7',
    distance: '2km',
    duration: '2hr'
  }
]

const TrailsList = () => {
  return (
    <div className={trailsListContainer}>
      {data.map((item) => (
        <TrailsListCard key={item.trailId} data={item} />
      ))}
    </div>
  )
}

export default TrailsList
