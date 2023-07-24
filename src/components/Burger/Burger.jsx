import { useState } from 'react'
import styles from './Burger.module.scss'
const { burgerContainer, bar } = styles

const Burgur = () => {
  const [burgerExpanded, setBurgerExpanded] = useState(false)
  return (
    <div className={burgerContainer}>
      <div
        className={bar}
        data-expanded={burgerExpanded}
        onClick={() => setBurgerExpanded((pre) => !pre)}
      ></div>
    </div>
  )
}

export default Burgur
