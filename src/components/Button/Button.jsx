import styles from 'components/Button/Button.module.scss'

export default function Button({ onClick, text, style }) {
  return (
    <button className={`cursor-point ${styles[style]}`} onClick={onClick}>
      {text}
    </button>
  )
}
