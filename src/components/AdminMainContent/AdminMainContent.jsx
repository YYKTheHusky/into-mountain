import styles from './AdminMainContent.module.scss'
const {
  adminMainContentContainer,
  userItemContainer,
  userItemLeft,
  userItemRight,
  userItemRightButton,
  unSus,
  sus,
  userItemRightName,
  // userItemRightMail,
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

const UserItem = ({ isSus, data }) => {
  return (
    <div className={userItemContainer}>
      <div className={userItemLeft}>
        <img src={data.avatar} alt="" />
      </div>
      <div className={userItemRight}>
        <div className={userItemRightButton}>
          {isSus ? (
            <button className={sus} disabled>
              已停權
            </button>
          ) : (
            <button className={unSus}>停權</button>
          )}
        </div>
        <div className={userItemRightName}>{data.name}</div>
        {/* <div className={userItemRightMail}>{data.email}</div> */}
        <div className={userItemRightDescription}>{data.introduction}</div>
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

const AdminMainContent = ({ page, userListData }) => {
  return (
    <div className={adminMainContentContainer}>
      {page === 'userList' && (
        <>
          {userListData.map((item) => (
            <UserItem key={item.id} data={item} />
          ))}
        </>
      )}
      {page === 'susUserList' && (
        <>
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
          <UserItem isSus="true" />
        </>
      )}
      {page === 'reviewList' && (
        <>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </>
      )}
    </div>
  )
}

export default AdminMainContent
