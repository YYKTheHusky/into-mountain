export default function TableDataRow({ label, value }) {
  return (
    <tr>
      <th>{label}</th>
      <td style={{ overflowWrap: 'break-word' }}>{value}</td>
    </tr>
  )
}
