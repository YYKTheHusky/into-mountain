import styles from './UserPageTab.module.scss'
import { ReactComponent as IconNotification } from 'assets/icons/icon-notification2.svg'
import { ReactComponent as IconTag } from 'assets/icons/icon-tag.svg'
import { ReactComponent as IconFeather } from 'assets/icons/icon-feather.svg'
import { clsx } from 'clsx'
import { useLocation } from 'react-router-dom'
const {
  userPageTabContainer,
  tabType1,
  tabType2,
  tabType2Selection,
  active,
  icon
} = styles

const TabType1 = ({ onAcitveContent }) => {
  const id = localStorage.getItem('currentUserId')
  const location = useLocation()
  const thePathId = location.pathname.split('/')[2]
  return (
    <div className={tabType1}>
      <div onClick={() => onAcitveContent('myReviews')}>
        <IconFeather className={icon} />
        心得
      </div>
      <div onClick={() => onAcitveContent('trailCollection')}>
        <IconTag className={icon} />
        收藏
      </div>
      {id === thePathId && (
        <div onClick={() => onAcitveContent('notification')}>
          <IconNotification className={icon} />
          通知
        </div>
      )}
    </div>
  )
}
const TabType2 = ({ acitveContent, onAcitveContent }) => {
  const id = localStorage.getItem('currentUserId')
  const location = useLocation()
  const thePathId = location.pathname.split('/')[2]
  return (
    <div className={tabType2}>
      <div
        className={clsx(
          tabType2Selection,
          acitveContent === 'myReviews' && active
        )}
        data-active={acitveContent}
        onClick={() => onAcitveContent('myReviews')}
      >
        <IconFeather className={icon} />
        心得
      </div>
      <div
        className={clsx(
          tabType2Selection,
          acitveContent === 'trailCollection' && active
        )}
        data-active={acitveContent}
        onClick={() => onAcitveContent('trailCollection')}
      >
        <IconTag className={icon} />
        收藏
      </div>

      {id === thePathId && (
        <div
          className={clsx(
            tabType2Selection,
            acitveContent === 'notification' && active
          )}
          data-active={acitveContent}
          onClick={() => onAcitveContent('notification')}
        >
          <IconNotification className={icon} />
          通知
        </div>
      )}
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
