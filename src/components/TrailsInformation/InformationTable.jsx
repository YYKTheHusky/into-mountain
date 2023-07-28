import styles from 'components/TrailsInformation/InformationTable.module.scss'

export default function InformationTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableOne}>
        <tr>
          <th>所在縣市</th>
          <td>新北市瑞芳區</td>
        </tr>
        <tr>
          <th>步道類型</th>
          <td>郊山步道</td>
        </tr>
        <tr>
          <th>海拔高度</th>
          <td>0~35公尺</td>
        </tr>
        <tr>
          <th>路面狀況</th>
          <td>岩石海岸、泥土路</td>
        </tr>
        <tr>
          <th>難易度</th>
          <td>低</td>
        </tr>
        <tr>
          <th>申請入山</th>
          <td>否</td>
        </tr>
      </table>
      <table className={styles.tableTwo}>
        <tr>
          <th>里程</th>
          <td>新北市瑞芳區</td>
        </tr>
        <tr>
          <th>步道型態</th>
          <td>郊山步道</td>
        </tr>
        <tr>
          <th>高度落差</th>
          <td>0~35公尺</td>
        </tr>
        <tr>
          <th>所需時間</th>
          <td>岩石海岸、泥土路</td>
        </tr>
        <tr>
          <th>所屬園區</th>
          <td>低</td>
        </tr>
        <tr>
          <th>申請入園</th>
          <td>否</td>
        </tr>
      </table>
    </div>
  )
}
