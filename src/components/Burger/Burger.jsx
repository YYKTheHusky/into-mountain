import styles from './Burger.module.scss'
const { burgerContainer, bar } = styles

const Burgur = ({ burgerToggle, onBurgerToggle }) => {
  return (
    <div className={burgerContainer} onClick={() => onBurgerToggle()}>
      <div className={bar} data-phase={burgerToggle}></div>
    </div>
  )
}

export default Burgur
