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

const UserItem = ({ isSus, data, onSuspend, onRemoveSuspend, listname }) => {
  return (
    <div className={userItemContainer}>
      <div className={userItemLeft}>
        <img src={data.avatar} alt="" />
      </div>
      <div className={userItemRight}>
        <div className={userItemRightButton}>
          {isSus ? (
            <button
              className={sus}
              onClick={() => onRemoveSuspend?.(data.id, listname)}
            >
              解除停權
            </button>
          ) : (
            <button
              className={unSus}
              onClick={() => onSuspend?.(data.id, listname)}
            >
              停權
            </button>
          )}
        </div>
        <div className={userItemRightName}>{data.name}</div>
        {/* <div className={userItemRightMail}>{data.email}</div> */}
        <div className={userItemRightDescription}>{data.introduction}</div>
      </div>
    </div>
  )
}

const ReviewItem = ({ item }) => {
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
        <div className={reviewItemRightMail}>附註內容{item.title}</div>
        <div className={reviewItemRightDescription}>頁面連結</div>
      </div>
    </div>
  )
}

const AdminMainContent = ({ page, data, onSuspend, onRemoveSuspend }) => {
  return (
    <div className={adminMainContentContainer}>
      {page === 'userList' && (
        <>
          {data.map((item) => (
            <UserItem
              key={item.id}
              data={item}
              isSus={item.isSuspended}
              onSuspend={onSuspend}
              onRemoveSuspend={onRemoveSuspend}
              listname="userList"
            />
          ))}
        </>
      )}
      {page === 'susUserList' && (
        <>
          {data.map((item) => (
            <UserItem
              key={item.id}
              data={item}
              isSus={item.isSuspended}
              onSuspend={onSuspend}
              onRemoveSuspend={onRemoveSuspend}
              listname="susUserList"
            />
          ))}
        </>
      )}
      {page === 'reviewList' && (
        <>
          {data.map((item) => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  )
}

export default AdminMainContent
