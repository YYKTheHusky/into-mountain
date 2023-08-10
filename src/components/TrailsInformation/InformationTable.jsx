import styles from 'components/TrailsInformation/InformationTable.module.scss'

export default function InformationTable({ data }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableOne}>
        <tr>
          <th>所在縣市</th>
          <td>{data.location}</td>
        </tr>
        <tr>
          <th>步道類型</th>
          <td>{data.trailType}</td>
        </tr>
        <tr>
          <th>海拔高度</th>
          <td>{data.altitude}</td>
        </tr>
        <tr>
          <th>路面狀況</th>
          <td>{data.trailCondition}</td>
        </tr>
        <tr>
          <th>難易度</th>
          <td>{data.difficulty}</td>
        </tr>
        <tr>
          <th>申請入山</th>
          <td>{data.permitRequiredForEntry}</td>
        </tr>
      </table>
      <table className={styles.tableTwo}>
        <tr>
          <th>里程</th>
          <td>{data.distance}</td>
        </tr>
        <tr>
          <th>步道型態</th>
          <td>{data.trailFormat}</td>
        </tr>
        <tr>
          <th>高度落差</th>
          <td>{data.heightDiff}</td>
        </tr>
        <tr>
          <th>所需時間</th>
          <td>{data.duration}</td>
        </tr>
        <tr>
          <th>所屬園區</th>
          <td>{data.parkOwnership}</td>
        </tr>
        <tr>
          <th>申請入園</th>
          <td>{data.permitRequiredForParkAccess}</td>
        </tr>
      </table>
    </div>
  )
}
