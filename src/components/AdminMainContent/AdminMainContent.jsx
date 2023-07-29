import styles from './AdminMainContent.module.scss'
const {
  adminMainContentContainer,
  userItemContainer,
  userItemLeft,
  userItemRight,
  userItemRightButton,
  userItemRightName,
  userItemRightMail,
  userItemRightDescription,
  reviewItemContainer,
  reviewItemLeft,
  reviewItemRight,
  reviewItemRightButton,
  agree,
  disagree,
  reviewItemRightName,
  reviewItemRightMail,
  reviewItemRightDescription
} = styles

const UserItem = () => {
  return (
    <div className={userItemContainer}>
      <div className={userItemLeft}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className={userItemRight}>
        <div className={userItemRightButton}>
          <button>停權</button>
        </div>
        <div className={userItemRightName}>名字</div>
        <div className={userItemRightMail}>email</div>
        <div className={userItemRightDescription}>自我介紹</div>
      </div>
    </div>
  )
}

const ReviewItem = () => {
  return (
    <div className={reviewItemContainer}>
      <div className={reviewItemLeft}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className={reviewItemRight}>
        <div className={reviewItemRightButton}>
          <button className={agree}>同意刪除</button>
          <button className={disagree}>否決檢舉</button>
        </div>
        <div className={reviewItemRightName}>被檢舉的原因</div>
        <div className={reviewItemRightMail}>附註內容</div>
        <div className={reviewItemRightDescription}>頁面連結</div>
      </div>
    </div>
  )
}

const AdminMainContent = () => {
  return (
    <div className={adminMainContentContainer}>
      <div className="listItemContainer">
        <UserItem />
        <ReviewItem />
      </div>
    </div>
  )
}

export default AdminMainContent
