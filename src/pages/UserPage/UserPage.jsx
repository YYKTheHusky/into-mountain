import Nav from 'components/Nav/Nav'
import styles from './UserPage.module.scss'
import InfoCard from 'components/InfoCard/InfoCard'
import UserPageTab from 'components/UserPageTab/UserPageTab'
import UserContent from 'components/UserContent/UserContent'
import { useState, useEffect } from 'react'

const { contentContainer, left, info, tab, right } = styles
const theUserData = {
  userId: 1,
  name: 'user1',
  email: 'user1@exmaple.com',
  introduction:
    '我的自我介紹先限制八十字以內不然會報版的感覺，歐NO我的自我介紹先限制八十字以內不然會報版的感覺，這樣子八十八十八十八十八十八十八十八十八十八十八十八十八十八十八十八十',
  avatar: 'https://picsum.photos/id/237/200/300',
  suspension: false,
  followerCount: 3,
  followingCount: 4,
  PostLikeCount: 10,
  createdAt: '2023-07-26',
  updatedAt: '2023-07-26',
  isFollow: false
}
const preScroll = window.scrollY

export default function UserPage() {
  const [currentScroll, setCurrentScroll] = useState(0)
  const [acitveContent, setAcitveContent] = useState('review')
  const handleAcitveContent = (type) => {
    setAcitveContent(type)
  }

  useEffect(() => {
    function handleScroll() {
      setCurrentScroll(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentScroll])

  const test = currentScroll === preScroll
  return (
    <div className="container mx-auto">
      {currentScroll === preScroll && <Nav />}
      <div className={contentContainer}>
        <div className={left} data-scroll={test}>
          <InfoCard
            className={info}
            data={theUserData}
            acitveContent={acitveContent}
            onAcitveContent={handleAcitveContent}
          />
          <div className={tab} data-scroll={test}>
            <UserPageTab
              acitveContent={acitveContent}
              onAcitveContent={handleAcitveContent}
            />
          </div>
        </div>
        <div className={right}>
          <UserContent acitveContent={acitveContent} />
        </div>
      </div>
    </div>
  )
}
