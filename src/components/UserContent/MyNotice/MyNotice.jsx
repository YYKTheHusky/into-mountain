// conponents
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'

// api
import { getUserNotifications, isReadNotification } from 'api/user'

// hook
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// function
import { formatDateWithTime } from 'utils/time'

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
  if (!item.isRead) {
    return (
      <div
        className={item.isRead ? noticeItem : `${noticeItem} ${unRead}`}
        onClick={() => onRead?.(item.id)}
      >
        <span className={itemTitle}>一筆心得遭到檢舉！</span>
        <span className={itemRead}>{!item.isRead && '未讀'}</span>
        <div className={itemContent}>{item.notify}</div>
        <div className={itemTime}>
          檢舉時間：{formatDateWithTime(item.createdAt)}
        </div>
      </div>
    )
  } else {
    return (
      <div className={item.isRead ? noticeItem : `${noticeItem} ${unRead}`}>
        <span className={itemTitle}>一筆心得遭到檢舉！</span>
        <span className={itemRead}>{!item.isRead && '未讀'}</span>
        <div className={itemContent}>{item.notify}</div>
        <div className={itemTime}>
          檢舉時間：{formatDateWithTime(item.createdAt)}
        </div>
      </div>
    )
  }
}
const MyNotice = ({ onUpdateCardInfo }) => {
  const [noticeData, setNoticeData] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(true)
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
    onUpdateCardInfo()
  }
  const [noticeIsReadCount, setNoticeIsReadCount] = useState(0)
  useEffect(() => {
    const getUserNotificationsAsync = async () => {
      try {
        const data = await getUserNotifications(id)
        setNoticeData(data)
        setDataIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getUserNotificationsAsync()
  }, [])

  useEffect(() => {
    setNoticeIsReadCount(noticeData.filter((item) => !item.isRead).length)
  }, [noticeData])

  return (
    <RightSideContainer title="通知" info={`${noticeIsReadCount}`}>
      <div className={myNoticeContainer}>
        {noticeData.length === 0 && !dataIsLoading && (
          <div>
            <YouHaveNothing robotDescription="沒有通知" />
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
