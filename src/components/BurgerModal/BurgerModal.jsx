import styles from './BurgerModal.module.scss'
import Burgur from 'components/BurgerModal/Burger/Burger'
import BurgerMenu from 'components/BurgerModal/BurgerMenu/BurgerMenu'
import { useState } from 'react'
const { backdrop, modalContainer, menu } = styles

const BurgerModal = () => {
  const [burgerToggle, setBurgerToggle] = useState(false)
  const handleBurgerToggle = () => {
    setBurgerToggle(!burgerToggle)
  }
  return (
    <>
      {burgerToggle && (
        <div className={backdrop} onClick={() => handleBurgerToggle?.()}></div>
      )}
      <div className={modalContainer}>
        <Burgur
          burgerToggle={burgerToggle}
          onBurgerToggle={handleBurgerToggle}
        />
        {burgerToggle && (
          <div className={menu}>
            <BurgerMenu />
          </div>
        )}
      </div>
    </>
  )
}

export default BurgerModal
