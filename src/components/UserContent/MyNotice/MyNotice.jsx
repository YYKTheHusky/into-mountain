// conponents
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'

// api
import { getUserNotifications, isReadNotification } from 'api/user'

// hook
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// style
import styles from './MyNotice.module.scss'
const {
  myNoticeContainer,
  noticeItem,
  unRead,
  itemTitle,
  itemRead,
  itemContent,
  itemTime
} = styles

const NoticeItem = ({ item, onRead }) => {
  return (
    <div
      className={item.isRead ? noticeItem : `${noticeItem} ${unRead}`}
      onClick={() => onRead?.(item.id)}
    >
      <span className={itemTitle}>一筆心得遭到檢舉！</span>
      <span className={itemRead}>{!item.isRead && '未讀'}</span>
      <div className={itemContent}>{item.notify}</div>
      <div className={itemTime}>檢舉時間：{item.createdAt}</div>
    </div>
  )
}
const MyNotice = () => {
  const [noticeData, setNoticeData] = useState([])
  const id = localStorage.getItem('currentUserId')
  const location = useLocation()
  const thePathId = location.pathname.split('/')[2]
  const navigate = useNavigate()
  useEffect(() => {
    if (thePathId !== id) {
      navigate(`/user/${id}/notification`)
    }
  }, [])

  const handleRead = async (id) => {
    try {
      await isReadNotification(id)
      setNoticeData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isRead: true } : item))
      )
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getUserNotificationsAsync = async () => {
      try {
        const data = await getUserNotifications(id)
        setNoticeData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUserNotificationsAsync()
  }, [])

  return (
    <RightSideContainer title="通知">
      <div className={myNoticeContainer}>
        {noticeData.length === 0 && (
          <div>
            <YouHaveNothing robotTitle="通知" robotDescription="沒有通知" />
          </div>
        )}
        {noticeData.length > 0 &&
          noticeData.map((item) => (
            <NoticeItem key={item.id} item={item} onRead={handleRead} />
          ))}
      </div>
    </RightSideContainer>
  )
}
export default MyNotice
