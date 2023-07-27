import styles from './RightSideContainer.module.scss'
const { rightSideContainer, listTitle } = styles

const RightSideContainer = ({ children, title, list }) => {
  return (
    <div className={rightSideContainer}>
      <div className={listTitle}>{title}</div>
      <div className={list}>{children}</div>
    </div>
  )
}

export default RightSideContainer
