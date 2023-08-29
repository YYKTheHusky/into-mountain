import styles from 'components/TrailsInformation/InformationTable.module.scss'
import TableDataRow from './TableDataRow'

export default function InformationTable({ data }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableOne}>
        <tbody>
          <TableDataRow label="所在縣市" value={data.location} />
          <TableDataRow label="步道類型" value={data.trailType} />
          <TableDataRow label="海拔高度" value={data.altitude} />
          <TableDataRow label="路面狀況" value={data.trailCondition} />
          <TableDataRow label="難易度" value={data.difficulty} />
          <TableDataRow label="申請入山" value={data.permitRequiredForEntry} />
        </tbody>
      </table>
      <table className={styles.tableTwo}>
        <tbody>
          <TableDataRow label="里程" value={data.distance} />
          <TableDataRow label="步道型態" value={data.trailFormat} />
          <TableDataRow label="高度落差" value={data.heightDiff} />
          <TableDataRow label="所需時間" value={data.duration} />
          <TableDataRow label="所屬園區" value={data.parkOwnership} />
          <TableDataRow
            label="申請入園"
            value={data.permitRequiredForParkAccess}
          />
        </tbody>
      </table>
    </div>
  )
}
