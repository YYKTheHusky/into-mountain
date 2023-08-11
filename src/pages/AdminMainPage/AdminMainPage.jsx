import AdminNav from 'components/AdminNav/AdminNav'
import styles from './AdminMainPage.module.scss'
import { ReactComponent as IconLogo } from 'assets/icons/icon-logo.svg'
import Pagination from 'components/Pagination/Pagination'
import { useEffect, useState } from 'react'
import {
  getAllUsers,
  addSuspension,
  removeSuspension,
  getAllSuspension
} from 'api/admin'

const { adminMainPageContainer, nav, right, rightContent, rightHead, logo } =
  styles

export default function AdminMainPage() {
  const [page, setPage] = useState(localStorage.getItem('pageId') || 'userList')
  const [userListData, setUserListData] = useState([])
  const [susUserList, setSusUserList] = useState([])
  const [reviewList, setReviewList] = useState([])

  const handlePage = (type) => {
    setPage(type)
    localStorage.setItem('pageId', type)
  }
  const handleSuspend = async (id) => {
    try {
      await addSuspension(id)
    } catch (error) {
      console.error(error)
    }
  }
  const handleRemoveSuspend = async (id) => {
    try {
      await removeSuspension(id)
      setSusUserList((susUserList) =>
        susUserList.filter((item) => item.id !== id)
      )
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
    } else if (page === 'reviewList') {
      try {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then((response) => response.json())
          .then((json) => setReviewList(json))
      } catch (error) {
        console.error(error)
      }
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
            <h4 style={{ marginLeft: '15px' }}>登山小站</h4>
          </div>
          <div className={rightContent}>
            {page === 'userList' && (
              <Pagination
                data={userListData}
                page={page}
                onSuspend={handleSuspend}
              />
            )}
            {page === 'susUserList' && (
              <Pagination
                data={susUserList}
                page={page}
                onRemoveSuspend={handleRemoveSuspend}
              />
            )}
            {page === 'reviewList' && (
              <Pagination data={reviewList} page={page} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
