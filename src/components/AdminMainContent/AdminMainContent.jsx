import ConfirmModal from 'components/Modal/ConfirmModal'
import styles from './AdminMainContent.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import iconUser from 'assets/icons/user.svg'
import { ReactComponent as IconWarning } from 'assets/icons/icon-warning.svg'
import { useState } from 'react'
const {
  adminMainContentContainer,
  statisticsText,
  userItemContainer,
  userItemLeft,
  userItemRight,
  userItemRightButton,
  unSus,
  sus,
  isSusTitle,
  userButtonAndName,
  userItemRightName,
  // userItemRightMail,
  userItemRightDescription,
  reviewItemContainer,
  solved,
  reviewButtonAndName,
  reviewItemLeft,
  warningIconStyle,
  reviewItemRight,
  reviewItemRightButton,
  agree,
  disagree,
  reviewItemRightName,
  reviewItemRightMail,
  reviewItemRightDescription,
  linkStyle
} = styles

const UserItem = ({ isSus, data, onSuspend, onRemoveSuspend, listname }) => {
  const navigate = useNavigate()
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const handleConfirm1 = () => {
    setOpenModal1(!openModal1)
    onRemoveSuspend?.(data.id, listname)
  }
  const handleCancel1 = () => {
    setOpenModal1(!openModal1)
  }
  const handleConfirm2 = () => {
    setOpenModal2(!openModal2)
    onSuspend?.(data.id, listname)
  }
  const handleCancel2 = () => {
    setOpenModal2(!openModal2)
  }
  return (
    <div className={userItemContainer}>
      <div className={`${userItemLeft} cursor-point`}>
        <img
          src={data.avatar || iconUser}
          onError={(e) => {
            e.target.src = iconUser
          }}
          alt="avatar"
          onClick={() => navigate(`/user/${data.id}/myReviews`)}
        />
      </div>
      <div className={userItemRight}>
        <div className={userButtonAndName}>
          <div className={userItemRightButton}>
            {isSus ? (
              <>
                <div className={`${userItemRightName} ${isSusTitle}`}>
                  {data.name}
                </div>
                <button className={sus} onClick={() => setOpenModal1(true)}>
                  解除停權
                </button>
              </>
            ) : (
              <>
                <div
                  className={`${userItemRightName} cursor-point`}
                  onClick={() => navigate(`/user/${data.id}/myReviews`)}
                >
                  {data.name}
                </div>
                <button className={unSus} onClick={() => setOpenModal2(true)}>
                  停權
                </button>
              </>
            )}
            <ConfirmModal
              isModalOpen={openModal1}
              confirmFunction={handleConfirm1}
              cancelFunction={handleCancel1}
              message="確定要解除停權這位使用者？"
            />
            <ConfirmModal
              isModalOpen={openModal2}
              confirmFunction={handleConfirm2}
              cancelFunction={handleCancel2}
              message="確定要停權這位使用者？"
            />
          </div>
        </div>
        {/* <div className={userItemRightMail}>{data.email}</div> */}
        <div className={userItemRightDescription}>{data.introduction}</div>
      </div>
    </div>
  )
}

const ReviewItem = ({ item, onEditReportSolved, onDeletePost }) => {
  if (item.Post === null && !item.isSolved) {
    return
  }
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  let notify = ''
  if (item.Post !== null) {
    notify = `您的 ${item.Post.title} 因為含有 ${item.category} 違反規定內容遭到檢舉，經管理員審查後，該文章已遭到刪除。提醒您下次撰寫文章時，注意文章內容，勿違反使用規範。 若多次遭到檢舉，管理員可能會將您的帳號停權。謝謝您的配合。如有疑問，歡迎寫信至 into-mountain@mountainmail.com`
    if (item.category === '其他') {
      notify = `您的 ${item.Post.title} 因為含有違反規定內容遭到檢舉，經管理員審查後，該文章已遭到刪除。提醒您下次撰寫文章時，注意文章內容，勿違反使用規範。 若多次遭到檢舉，管理員可能會將您的帳號停權。謝謝您的配合。如有疑問，歡迎寫信至 into-mountain@mountainmail.com`
    }
  }
  const handleConfirm1 = () => {
    setOpenModal1(!openModal1)
    onDeletePost?.({
      id: item.Post.id,
      userId: item.Post.User.id,
      notify
    })
    onEditReportSolved?.({ id: item.id, type: 'delete' })
  }
  const handleCancel1 = () => {
    setOpenModal1(!openModal1)
  }
  const handleConfirm2 = () => {
    setOpenModal2(!openModal2)
    onEditReportSolved?.({ id: item.id, type: 'deny' })
  }
  const handleCancel2 = () => {
    setOpenModal2(!openModal2)
  }
  return (
    <div
      className={
        item.isSolved
          ? `${solved} ${reviewItemContainer}`
          : `${reviewItemContainer}`
      }
    >
      <div className={reviewItemLeft}>
        <IconWarning className={warningIconStyle} />
      </div>
      <div className={reviewItemRight}>
        <div className={reviewButtonAndName}>
          <div className={reviewItemRightName}>
            被檢舉的原因：{item.category}
          </div>
          {item.isSolved && <div className={reviewItemRightButton}>已處理</div>}
          {!item.isSolved && (
            <div className={reviewItemRightButton}>
              <button className={agree} onClick={() => setOpenModal1(true)}>
                同意刪除
              </button>
              <button className={disagree} onClick={() => setOpenModal2(true)}>
                否決檢舉
              </button>
            </div>
          )}
          <ConfirmModal
            isModalOpen={openModal1}
            confirmFunction={handleConfirm1}
            cancelFunction={handleCancel1}
            message="確定要刪除這篇文章？"
          />
          <ConfirmModal
            isModalOpen={openModal2}
            confirmFunction={handleConfirm2}
            cancelFunction={handleCancel2}
            message="確定要否決這份檢舉？"
          />
        </div>
        <div className={reviewItemRightMail}>附註內容：{item.content}</div>

        {item.postId && (
          <div className={reviewItemRightDescription}>
            {item.isSolved && item.Post === null && <div>該篇文章已刪除</div>}
            {item.isSolved && item.Post !== null && (
              <span>
                已退回檢舉且未刪除文章：
                <Link className={linkStyle} to={`/review/${item.postId}`}>
                  頁面連結
                </Link>
              </span>
            )}
            {!item.isSolved && (
              <Link className={linkStyle} to={`/review/${item.postId}`}>
                頁面連結
              </Link>
            )}
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
  onDeletePost,
  dataLength
}) => {
  let isSolvedCount
  if (page === 'reviewList') {
    isSolvedCount = data.filter(
      (item) => !item.isSolved && item.Post !== null
    ).length
  }
  return (
    <>
      {page === 'userList' && (
        <div className={statisticsText}>
          共有 <span>{dataLength}</span> 位使用者
        </div>
      )}
      {page === 'susUserList' && (
        <div className={statisticsText}>
          共有 <span>{dataLength}</span> 位使用者被停權
        </div>
      )}
      {page === 'reviewList' && (
        <div className={statisticsText}>
          尚有 <span>{isSolvedCount}</span> 筆被檢舉心得未處理
        </div>
      )}
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
    </>
  )
}

export default AdminMainContent
