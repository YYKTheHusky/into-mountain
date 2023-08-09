import { useEffect, useState } from 'react'
// scss
import styles from './TrailsList.module.scss'
// component
import TrailsListCard from './TrailsListCard/TrailsListCard'
// api
import { getAllTrails } from 'api/trail'

const { trailsListContainer } = styles

const TrailsList = () => {
  const [trailData, setTrailData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { trails } = await getAllTrails()
      setTrailData(trails)
    }
    getData()
  }, [])
  return (
    <div className={trailsListContainer}>
      {trailData &&
        trailData.map((item) => (
          <TrailsListCard key={item.trailId} data={item} />
        ))}
    </div>
  )
}

export default TrailsList
