import { useState } from 'react'
import styles from './Pagination.module.scss'
import AdminMainContent from 'components/AdminMainContent/AdminMainContent'
const { paginationContainer, pageNumbers, active, loadmore, hellip } = styles

const Pagination = ({ data, page, onSuspend, onRemoveSuspend }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const pages = []
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
    setPageNumberLimit(5)
  }
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  const handlePreBtn = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleLoadMore = () => {
    if (data.length - itemsPerPage * currentPage < itemsPerPage) {
      return
    }
    setItemsPerPage(itemsPerPage + 5)
  }
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? active : null}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })
  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className={hellip}>&hellip;</li>
  }
  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className={hellip}>&hellip;</li>
  }

  return (
    <>
      <AdminMainContent
        page={page}
        data={currentItems}
        onSuspend={onSuspend}
        onRemoveSuspend={onRemoveSuspend}
      />
      <div className={paginationContainer}>
        <ul className={pageNumbers}>
          <button onClick={handlePreBtn} disabled={currentPage === pages[0]}>
            上一頁
          </button>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <button
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1]}
          >
            下一頁
          </button>
        </ul>
        {!(data.length - itemsPerPage * currentPage < itemsPerPage) ? (
          <button onClick={handleLoadMore} className={loadmore}>
            更多
          </button>
        ) : (
          <button disabled className={loadmore} style={{ opacity: '0.5' }}>
            更多
          </button>
        )}
      </div>
    </>
  )
}

export default Pagination
