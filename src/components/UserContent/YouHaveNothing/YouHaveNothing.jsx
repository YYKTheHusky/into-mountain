import styles from './YouHaveNothing.module.scss'
import { ReactComponent as IconRobot } from 'assets/icons/icon-robot.svg'
const { youHaveNothingContainer, title, robot, description } = styles

const YouHaveNothing = ({ robotTitle, robotDescription }) => {
  return (
    <div className={youHaveNothingContainer}>
      <div className={title}>{robotTitle}</div>
      <div className={robot}>
        <IconRobot />
        <div className={description}>{robotDescription}</div>
      </div>
    </div>
  )
}

export default YouHaveNothing
