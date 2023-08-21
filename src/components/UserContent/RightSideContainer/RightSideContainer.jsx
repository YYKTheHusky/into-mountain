import styles from './RightSideContainer.module.scss'
const { rightSideContainer, listTitle, listContent } = styles

const RightSideContainer = ({ children, title, info }) => {
  return (
    <div className={rightSideContainer}>
      <div className={listTitle}>
        {title}
        {info && <span>{info}</span>}
      </div>
      <div className={listContent}>{children}</div>
    </div>
  )
}

export default RightSideContainer
