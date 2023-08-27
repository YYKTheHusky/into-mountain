// scss
import styles from 'components/TrailsInformation/InformationTable.module.scss'
// component
import Button from 'components/Button/Button'
import Map from './Map'
import { getTrailsGPX } from 'api/trail'

export default function InformationTable({ data }) {
  // 下載gpx
  const handleDownload = async () => {
    const { gpx } = await getTrailsGPX(data.id)
    const blob = new Blob([gpx], { type: 'application/gpx+xml' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${data.title}.gpx`

    link.click()
  }
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableOne}>
        <tr>
          <th>出發點</th>
          <td>{data.startingPoint}</td>
        </tr>
        <tr>
          <th>路線</th>
          <td>{data.track}</td>
        </tr>
        <tr>
          <th>備註</th>
          <td>{data.notes}</td>
        </tr>
        <tr>
          <th>地圖</th>
          <td>
            <div className={styles.buttonContainer}>
              <Button
                style="secondaryButton"
                text="下載GPX"
                onClick={handleDownload}
              />
            </div>
            <div className={styles.mapContainer}>
              <Map gpx={data.gpx} />
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}
