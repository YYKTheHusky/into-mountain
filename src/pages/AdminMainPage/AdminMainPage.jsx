import AdminNav from 'components/AdminNav/AdminNav'
import styles from './AdminMainPage.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import AdminMainContent from 'components/AdminMainContent/AdminMainContent'
import { useEffect, useState } from 'react'
import { getAllUsers, addSuspension, getAllSuspension } from 'api/admin'

const { adminMainPageContainer, nav, right, rightHead, logo } = styles

export default function AdminMainPage() {
  const [page, setPage] = useState('userList')
  const [userListData, setUserListData] = useState([])
  const [susUserList, setSusUserList] = useState([])

  const handlePage = (type) => {
    setPage(type)
  }
  const handleSuspend = async (id) => {
    try {
      const who = await addSuspension(id)
      console.log(who)
      console.log(id)
      // console.log(`${id}被停權`)
      setUserListData(userListData.filter((item) => item.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (page === 'userList') {
      const getAllUsersAsync = async () => {
        try {
          const data = await getAllUsers()
          setUserListData(data)
        } catch (error) {
          console.error(error)
        }
      }
      getAllUsersAsync()
    } else if (page === 'susUserList') {
      const getAllSuspensionAsync = async () => {
        try {
          const data = await getAllSuspension()
          setSusUserList(data)
        } catch (error) {
          console.error(error)
        }
      }
      getAllSuspensionAsync()
    }
  }, [page])

  return (
    <div className="container mx-auto">
      <div className={adminMainPageContainer}>
        <div className={nav}>
          <AdminNav onPage={handlePage} />
        </div>
        <div className={right}>
          <div className={rightHead}>
            <IconLogo className={logo} />
            <button>登出</button>
          </div>
          <AdminMainContent
            page={page}
            userListData={userListData}
            susUserList={susUserList}
            onSuspend={handleSuspend}
          />
        </div>
      </div>
    </div>
  )
}
