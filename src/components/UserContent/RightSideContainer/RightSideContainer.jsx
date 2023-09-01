import styles from './RightSideContainer.module.scss'
const { rightSideContainer, listTitle, listContent, collect } = styles

const RightSideContainer = ({ children, title, info, collectionTab }) => {
  if (collectionTab) {
    return (
      <>
        <div className={rightSideContainer}>
          <div className={listTitle}>
            {title}
            {info && <span>{info}</span>}
          </div>
          {collectionTab && <div>{collectionTab}</div>}
          <div className={`${listContent} ${collect}`}>{children}</div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className={rightSideContainer}>
        <div className={listTitle}>
          {title}
          {info && <span>{info}</span>}
        </div>
        <div className={listContent}>{children}</div>
      </div>
    </>
  )
}

export default RightSideContainer
