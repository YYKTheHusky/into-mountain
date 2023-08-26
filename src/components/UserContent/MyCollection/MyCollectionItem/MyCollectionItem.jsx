import styles from './MyCollectionItem.module.scss'
import { formatDateWithTime } from 'utils/time'
import { useNavigate } from 'react-router-dom'
import iconUser, {
  ReactComponent as IconDefaultUser
} from 'assets/icons/user.svg'
const {
  itemContainer,
  itemLeft,
  itemRight,
  itemRightTitle,
  itemRightSideTag1,
  itemRightSideTag2,
  tagLeft,
  tag2Avatar,
  defaultImg,
  tag2Time,
  descriptionBlock
} = styles

const ItemRightSideTag1 = ({ collectionData }) => {
  return (
    <>
      <div className={descriptionBlock}>
        {collectionData.introduction
          ? String(collectionData.introduction)
          : '持續新增內容中，敬請期待！'}
      </div>
      <div className={itemRightSideTag1}>
        <span>{collectionData.location}</span>
        <span>難度 {collectionData.difficulty}</span>
        <span>{collectionData.distance}</span>
        <span>所需時間 {collectionData.duration}</span>
      </div>
    </>
  )
}
const ItemRightSideTag2 = ({ collectionData }) => {
  return (
    <>
      <div className={descriptionBlock}>
        {String(collectionData.description)}
      </div>
      <div className={itemRightSideTag2}>
        <div className={tagLeft}>
          <div className={tag2Avatar}>
            {collectionData.User.avatar === null ? (
              <IconDefaultUser className={defaultImg} />
            ) : (
              <img
                src={collectionData.User.avatar}
                onError={(e) => {
                  e.target.src = iconUser
                }}
                alt="avatar"
              />
            )}
          </div>
          <span>{collectionData.User.name}</span>
        </div>
        <div className={tag2Time}>
          發表於：{formatDateWithTime(collectionData.createdAt)}
        </div>
      </div>
    </>
  )
}
const MyCollectionItem = ({ tabStep, collectionData }) => {
  const navigate = useNavigate()
  const handleNavigate = (step, id) => {
    if (step === 'trailCollection') {
      navigate(`/trail/${id}/detail`)
    } else {
      navigate(`/review/${id}`)
    }
  }

  return (
    <div
      className={itemContainer}
      onClick={() => handleNavigate(tabStep, collectionData.id)}
    >
      <div className={itemLeft}>
        <img src={collectionData.image} alt="" />
      </div>
      <div className={itemRight}>
        <div className={itemRightTitle}>{collectionData.title}</div>
        {tabStep === 'trailCollection' ? (
          <ItemRightSideTag1 collectionData={collectionData} />
        ) : (
          <ItemRightSideTag2 collectionData={collectionData} />
        )}
      </div>
    </div>
  )
}

export default MyCollectionItem
