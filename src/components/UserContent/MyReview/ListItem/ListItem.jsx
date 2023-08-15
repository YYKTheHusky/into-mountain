import styles from './ListItem.module.scss'
import formatDateTime from 'utils/time'
const {
  listItem,
  itemRight,
  itemLeft,
  itemRightTitle,
  itemRightTime,
  titleButton1,
  titleButton2
} = styles

const ListItem = ({ data }) => {
  return (
    <div className={listItem}>
      <div className={itemLeft}>
        <img src={data.image} alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>
          {data.title}
          <div>
            <button className={titleButton1}>按鈕1</button>
            <button className={titleButton2}>按鈕2</button>
          </div>
        </div>
        <p>{data.description}</p>
        <div className={itemRightTime}>
          發表於：{formatDateTime(data.updatedAt)}
        </div>
      </div>
    </div>
  )
}

export default ListItem
