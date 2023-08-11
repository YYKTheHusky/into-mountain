import styles from './ListItem.module.scss'
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
        <p>
          文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前
          文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內
          文前文章內文前文章內文前文章內文前文章內文前
        </p>
        <div className={itemRightTime}>發表於：{data.updatedAt}</div>
      </div>
    </div>
  )
}

export default ListItem
