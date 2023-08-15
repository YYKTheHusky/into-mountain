import styles from './MyCollectionItem.module.scss'
import formatDateTime from 'utils/time'
const {
  itemContainer,
  itemLeft,
  itemRight,
  itemRightTitle,
  itemRightSideTag1,
  itemRightSideTag2,
  tagLeft,
  tag2Avatar,
  tag2Time
} = styles

const ItemRightSideTag1 = ({ collectionData }) => {
  return (
    <>
      <p>{collectionData.introduction}</p>
      <div className={itemRightSideTag1}>
        <span>{collectionData.location}</span>
        <span>難度 {collectionData.difficulty}</span>
        <span>{collectionData.distance}</span>
        <span>所需時間{collectionData.duration}</span>
      </div>
    </>
  )
}
const ItemRightSideTag2 = ({ collectionData }) => {
  return (
    <>
      <p>{collectionData.description}</p>
      <div className={itemRightSideTag2}>
        <div className={tagLeft}>
          <div className={tag2Avatar}>
            <img src={collectionData.User.avatar} alt="" />
          </div>
          <span>{collectionData.User.name}</span>
        </div>
        <div className={tag2Time}>
          發表於：{formatDateTime(collectionData.createdAt)}
        </div>
      </div>
    </>
  )
}
const MyCollectionItem = ({ tabStep, collectionData }) => {
  return (
    <div className={itemContainer}>
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
