import styles from 'components/Button/Button.module.scss'

// 48px color 2770AB
export function PrimaryButton({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.primaryButton}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 48px color 3FA6CB
export function PrimaryButtonLight({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.primaryButtonLight}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 48px color 51D1FF
export function PrimaryButtonBright({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.primaryButtonBright}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 48px color D5D5DC
export function PrimaryButtonGray({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.primaryButtonGray}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 32px color 2770AB
export function SecondaryButton({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.secondaryButton}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 32px color 3FA6CB
export function SecondaryButtonLight({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.secondaryButtonLight}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 32px color 51D1FF
export function SecondaryButtonBright({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.secondaryButtonBright}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 32px color D5D5DC
export function SecondaryButtonGray({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.secondaryButtonGray}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 58px oval 首頁用的
export function OvalButtonHuge({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.ovalButtonHuge}`} onClick={onClick}>
      {children}
    </button>
  )
}

// 38px oval Navbar用的
export function OvalButtonSmall({ onClick, children }) {
  return (
    <button className={`cursor-point ${styles.ovalButtonSmall}`} onClick={onClick}>
      {children}
    </button>
  )
}
