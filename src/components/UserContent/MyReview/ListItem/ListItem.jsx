import styles from './ListItem.module.scss'
import { formatDateWithTime } from 'utils/time'
import { useNavigate } from 'react-router-dom'

const {
  listItem,
  inProgressStyle,
  draftStyle,
  itemRight,
  itemLeft,
  itemRightTitle,
  titleText,
  itemRightTime,
  btnGroup,
  titleButton1,
  titleButton2
} = styles

const ListItemContent = ({ data, theUserId, onDeletePost }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={itemLeft}>
        <img src={data.image} alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>
          <div className={titleText}>
            <div>{data.title}</div>
            {data.inProgress && <div className={draftStyle}>(草稿)</div>}
          </div>
          {theUserId === localStorage.getItem('currentUserId') && (
            <div className={btnGroup}>
              {!data.inProgress && (
                <button
                  className={titleButton1}
                  onClick={(event) => {
                    event.stopPropagation()
                    navigate(`/review/${data.id}/edit`)
                  }}
                >
                  編輯
                </button>
              )}
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
    </>
  )
}

const ListItem = ({ data, theUserId, onDeletePost }) => {
  const navigate = useNavigate()
  if (theUserId === localStorage.getItem('currentUserId')) {
    return (
      <>
        {data.inProgress ? (
          <div
            className={`${listItem} ${inProgressStyle}`}
            onClick={() => navigate(`/review/${data.id}/edit`)}
          >
            <ListItemContent
              data={data}
              theUserId={theUserId}
              onDeletePost={onDeletePost}
            />
          </div>
        ) : (
          <div
            className={listItem}
            onClick={() => navigate(`/review/${data.id}`)}
          >
            <ListItemContent
              data={data}
              theUserId={theUserId}
              onDeletePost={onDeletePost}
            />
          </div>
        )}
      </>
    )
  } else {
    return (
      <div className={listItem} onClick={() => navigate(`/review/${data.id}`)}>
        <ListItemContent
          data={data}
          theUserId={theUserId}
          onDeletePost={onDeletePost}
        />
      </div>
    )
  }
}

export default ListItem
