import styles from './ListItem.module.scss'
import { formatDateWithTime } from 'utils/time'
import { useNavigate } from 'react-router-dom'

const {
  listItem,
  itemRight,
  itemLeft,
  itemRightTitle,
  titleText,
  itemRightTime,
  btnGroup,
  titleButton1,
  titleButton2
} = styles

const ListItem = ({ data, theUserId, onDeletePost }) => {
  const navigate = useNavigate()

  return (
    <div className={listItem} onClick={() => navigate(`/review/${data.id}`)}>
      <div className={itemLeft}>
        <img src={data.image} alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>
          <div className={titleText}>{data.title}</div>
          {theUserId === localStorage.getItem('currentUserId') && (
            <div className={btnGroup}>
              <button
                className={titleButton1}
                onClick={(event) => {
                  event.stopPropagation()
                  navigate(`/review/${data.id}/edit`)
                }}
              >
                編輯
              </button>
              <button
                className={titleButton2}
                onClick={(event) => {
                  event.stopPropagation()
                  onDeletePost?.(data.id)
                }}
              >
                刪除
              </button>
            </div>
          )}
        </div>
        <p>
          {String(data.description)}
          {String(data.description).length === 200 && '...'}
        </p>
        <div className={itemRightTime}>
          發表於：{formatDateWithTime(data.updatedAt)}
        </div>
      </div>
    </div>
  )
}

export default ListItem
