import styles from './AdminMainContent.module.scss'
import { Link } from 'react-router-dom'
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
  solved,
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

const ReviewItem = ({ item, onEditReportSolved, onDeletePost }) => {
  return (
    <div
      className={
        item.isSolved
          ? `${solved} ${reviewItemContainer}`
          : `${reviewItemContainer}`
      }
    >
      <div className={reviewItemLeft}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className={reviewItemRight}>
        {item.isSolved && <div className={reviewItemRightButton}>已處理</div>}
        {!item.isSolved && (
          <div className={reviewItemRightButton}>
            <button
              className={agree}
              onClick={() =>
                onDeletePost?.({
                  id: item.Post.id,
                  userId: item.Post.User.id,
                  notify: `您的 ${item.Post.title} 因為含有 ${item.category} 違反規定內容遭到檢舉，經管理員審查後，該文章已遭到刪除。提醒您下次撰寫文章時，注意文章內容，勿違反使用規範。 若多次遭到檢舉，管理員可能會將您的帳號停權。謝謝您的配合。如有疑問，歡迎寫信至 into-mountain@mountainmail.com`
                })
              }
            >
              同意刪除
            </button>
            <button
              className={disagree}
              onClick={() => onEditReportSolved?.(item.id)}
            >
              否決檢舉
            </button>
          </div>
        )}

        <div className={reviewItemRightName}>被檢舉的原因：{item.category}</div>
        <div className={reviewItemRightMail}>附註內容：{item.content}</div>

        {item.postId && (
          <div className={reviewItemRightDescription}>
            <Link to={`/review/${item.postId}`}>頁面連結</Link>
          </div>
        )}
      </div>
    </div>
  )
}

const AdminMainContent = ({
  page,
  data,
  onSuspend,
  onRemoveSuspend,
  onEditReportSolved,
  onDeletePost
}) => {
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
            <ReviewItem
              key={item.id}
              item={item}
              onEditReportSolved={onEditReportSolved}
              onDeletePost={onDeletePost}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default AdminMainContent
