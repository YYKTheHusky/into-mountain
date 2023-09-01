import styles from './MyCollectionTab.module.scss'
import { clsx } from 'clsx'
const { myCollectionTab, tabItem, active } = styles

const MyCollectionTab = ({ tabStep, onTapStep }) => {
  return (
    <div className={myCollectionTab}>
      <div
        className={clsx(tabItem, tabStep === 'trailCollection' && active)}
        onClick={() => onTapStep('trailCollection')}
      >
        路徑
      </div>
      <div
        className={clsx(tabItem, tabStep === 'reviewCollection' && active)}
        onClick={() => onTapStep('reviewCollection')}
      >
        心得
      </div>
    </div>
  )
}

export default MyCollectionTab
