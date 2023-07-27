import styles from './MyCollectionItem.module.scss'
const {
  type1Item,
  type1ItemLeft,
  type1ItemRight,
  itemRightTitle,
  itemRightSideTag
} = styles

const MyCollectionItem = ({ tabStep, trailCollectionData }) => {
  if (tabStep === 'trailCollection') {
    return (
      <div className={type1Item}>
        <div className={type1ItemLeft}>
          <img src={trailCollectionData.image} alt="" />
        </div>
        <div className={type1ItemRight}>
          <div className={itemRightTitle}>{trailCollectionData.title}</div>
          <p>{trailCollectionData.introduction}</p>
          <div className={itemRightSideTag}>
            <span>{trailCollectionData.location}</span>
            <span>難度 {trailCollectionData.difficulty}</span>
            <span>{trailCollectionData.distance}</span>
            <span>所需時間{trailCollectionData.duration}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default MyCollectionItem
