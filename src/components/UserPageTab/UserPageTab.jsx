import styles from './UserPageTab.module.scss'
import { clsx } from 'clsx'
const { userPageTabContainer, tabType1, tabType2, tabType2Selection, active } =
  styles

const TabType1 = ({ onAcitveContent }) => {
  return (
    <div className={tabType1}>
      <div onClick={() => onAcitveContent('review')}>心得</div>
      <div onClick={() => onAcitveContent('collection')}>收藏</div>
      <div onClick={() => onAcitveContent('notice')}>通知</div>
    </div>
  )
}
const TabType2 = ({ acitveContent, onAcitveContent }) => {
  return (
    <div className={tabType2}>
      <div
        className={clsx(
          tabType2Selection,
          acitveContent === 'review' && active
        )}
        data-active={acitveContent}
        onClick={() => onAcitveContent('review')}
      >
        心得
      </div>
      <div
        className={clsx(
          tabType2Selection,
          acitveContent === 'collection' && active
        )}
        data-active={acitveContent}
        onClick={() => onAcitveContent('collection')}
      >
        收藏
      </div>
      <div
        className={clsx(
          tabType2Selection,
          acitveContent === 'notice' && active
        )}
        data-active={acitveContent}
        onClick={() => onAcitveContent('notice')}
      >
        通知
      </div>
    </div>
  )
}
const UserPageTab = ({ acitveContent, onAcitveContent }) => {
  return (
    <div className={userPageTabContainer}>
      <TabType1
        acitveContent={acitveContent}
        onAcitveContent={onAcitveContent}
      />
      <TabType2
        acitveContent={acitveContent}
        onAcitveContent={onAcitveContent}
      />
    </div>
  )
}

export default UserPageTab
