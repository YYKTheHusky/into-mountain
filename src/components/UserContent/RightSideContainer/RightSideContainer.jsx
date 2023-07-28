import styles from './RightSideContainer.module.scss'
const { rightSideContainer, listTitle, listContent } = styles

const RightSideContainer = ({ children, title }) => {
  return (
    <div className={rightSideContainer}>
      <div className={listTitle}>{title}</div>
      <div className={listContent}>{children}</div>
    </div>
  )
}

export default RightSideContainer
