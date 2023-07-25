import styles from './TrailsSearchBar.module.scss'
import { ReactComponent as IconArrowRight } from 'assets/icons/icon-arrow-right.svg'
const { trailsSearchBarContainer } = styles

const TrailsSearchBar = () => {
  return (
    <div className={trailsSearchBarContainer}>
      <input type="text" placeholder="請輸入路徑、山岳名相關名稱" />
      <button>
        <IconArrowRight />
      </button>
    </div>
  )
}

export default TrailsSearchBar
