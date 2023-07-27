// import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import styles from './MyReview.module.scss'
const {
  myReviewContainer,
  listContainer,
  listTitle,
  listItem,
  itemRight,
  itemLeft,
  itemRightTitle,
  itemRightTime,
  titleButton1,
  titleButton2,
  list
} = styles

const ListItem = () => {
  return (
    <div className={listItem}>
      <div className={itemLeft}>
        <img src="https://picsum.photos/200/300?grayscale" alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>
          文章標題
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
        <div className={itemRightTime}>發表於：2023/7/23 20:23 </div>
      </div>
    </div>
  )
}

const MyReview = () => {
  return (
    <div className={myReviewContainer}>
      {/* <div>
        <YouHaveNothing robotTitle="心得" robotDescription="還未發佈過心得" />
      </div> */}
      <div className={listContainer}>
        <div className={listTitle}>心得</div>
        <div className={list}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </div>
  )
}
export default MyReview
