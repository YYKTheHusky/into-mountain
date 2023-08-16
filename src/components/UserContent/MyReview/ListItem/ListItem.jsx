import styles from './ListItem.module.scss'
import { formatDateWithTime } from 'utils/time'
import { useNavigate } from 'react-router-dom'

const {
  listItem,
  itemRight,
  itemLeft,
  itemRightTitle,
  itemRightTime,
  btnGroup,
  titleButton1,
  titleButton2
} = styles

const ListItem = ({ data, theUserId, onDeletePost }) => {
  const navigate = useNavigate()

  return (
    <div className={listItem}>
      <div className={itemLeft}>
        <img src={data.image} alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>
          <div>{data.title}</div>
          {theUserId === localStorage.getItem('currentUserId') && (
            <div className={btnGroup}>
              <button
                className={titleButton1}
                onClick={() => navigate(`/review/${data.id}/edit`)}
              >
                編輯
              </button>
              <button
                className={titleButton2}
                onClick={() => onDeletePost?.(data.id)}
              >
                刪除
              </button>
            </div>
          )}
        </div>
        <p onClick={() => navigate(`/review/${data.id}`)}>{data.description}</p>
        <div className={itemRightTime}>
          發表於：{formatDateWithTime(data.updatedAt)}
        </div>
      </div>
    </div>
  )
}

export default ListItem
