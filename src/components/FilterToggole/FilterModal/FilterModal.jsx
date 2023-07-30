import { ReactComponent as IconFilter } from 'assets/icons/icon-filter.svg'
import { ReactComponent as IconXmark } from 'assets/icons/icon-xmark.svg'
import FilterListItem from './FilterListItem/FilterListItem'
import styles from './FilterModal.module.scss'
import { useState } from 'react'
const {
  filterModalContainer,
  filterIcon,
  backdrop,
  modal,
  xmark,
  listContainer,
  buttonContainer,
  cancel,
  show
} = styles

const FilterModal = ({ list }) => {
  const [filterModalToggle, setFilterModalToggle] = useState(false)
  const [selection, setSelection] = useState([])

  const handleFilterModalToggle = () => {
    setFilterModalToggle(!filterModalToggle)
  }
  const handleSelection = ({ listname, item }) => {
    setSelection((pre) => {
      const index = Object.values(pre).findIndex(
        (obj) => obj[listname] !== undefined
      )
      if (index === -1) {
        return [...pre, { [listname]: item }]
      } else {
        return pre.map((obj, i) => {
          if (i === index) {
            return { [listname]: item }
          } else {
            return obj
          }
        })
      }
    })
  }

  return (
    <>
      {filterModalToggle && (
        <div
          className={backdrop}
          onClick={() => handleFilterModalToggle?.()}
        ></div>
      )}
      <div className={filterModalContainer}>
        <IconFilter
          className={filterIcon}
          onClick={() => setFilterModalToggle(!filterModalToggle)}
        />
        {filterModalToggle && (
          <div className={modal}>
            <IconXmark
              className={xmark}
              onClick={() => setFilterModalToggle(!filterModalToggle)}
            />
            <span></span>
            <div className={listContainer}>
              {Object.keys(list).map((theListName) => (
                <FilterListItem
                  listname={theListName}
                  thelist={list[theListName]}
                  key={theListName}
                  onSelection={handleSelection}
                />
              ))}
            </div>
            <div className={buttonContainer}>
              <button
                className={cancel}
                onClick={() => setFilterModalToggle(!filterModalToggle)}
              >
                取消
              </button>
              <button className={show} onClick={() => console.log(selection)}>
                顯示
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FilterModal
