// scss
import styles from 'components/TrailsInformation/InformationTable.module.scss'
// component
import { SecondaryButton } from 'components/Button/Button'
import Map from './Map'

export default function InformationTable({ data }) {
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
              <SecondaryButton>下載GPX</SecondaryButton>
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
