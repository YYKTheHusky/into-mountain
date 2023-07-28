import { SecondaryButton } from 'components/Button/Button'
import styles from 'components/TrailsInformation/InformationTable.module.scss'
import Map from './Map'

export default function InformationTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableOne}>
        <tr>
          <th>出發點</th>
          <td>靈雲宮／永春崗公園</td>
        </tr>
        <tr>
          <th>路線</th>
          <td>
            信義路五段150巷22弄→(0.05K,2分鐘)→靈雲宮→(0.5K,35分鐘)→六巨石→(0.1K,
            8分鐘)→逸賢亭(象山頂)→(0.25K, 10分鐘)→打印台→(0.6K,
            35分鐘)→永春崗公園
          </td>
        </tr>
        <tr>
          <th>備註</th>
          <td>
            象山親山步道可通往獅山、豹山、虎山，或向東往南港山稜線上的南港山主峰、九五峰、拇指山以及福壽公園等地。
          </td>
        </tr>
        <tr>
          <th>地圖</th>
          <td>
            <div className={styles.buttonContainer}>
              <SecondaryButton>下載GPX</SecondaryButton>
            </div>
            <div className={styles.mapContainer}>
              <Map></Map>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}
