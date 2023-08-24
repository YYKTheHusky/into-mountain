import { ReactComponent as IconFilter } from 'assets/icons/icon-filter.svg'
import { ReactComponent as IconXmark } from 'assets/icons/icon-xmark.svg'
import FilterListItem from './FilterListItem/FilterListItem'
import styles from './FilterModal.module.scss'
import { useState } from 'react'
import Button from 'components/Button/Button'
const {
  filterModalContainer,
  filterIcon,
  backdrop,
  modal,
  xmark,
  listContainer,
  listInnerContainer,
  buttonContainer
} = styles

const FilterModal = ({ list, onFilterOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState()

  const handleFilterModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleShowButtonClick = (e) => {
    e.preventDefault()
    console.log(selectedFilters)
    Object.entries(selectedFilters).forEach(([key, value]) => {
      onFilterOption({ type: key, value })
    })
    setSelectedFilters('')
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {isModalOpen && (
        <div className={backdrop} onClick={() => handleFilterModalToggle?.()} />
      )}
      <div className={filterModalContainer}>
        <IconFilter
          className={filterIcon}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        {isModalOpen && (
          <div className={modal}>
            <IconXmark
              className={xmark}
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            <span />
            <form className={listContainer}>
              <div className={listInnerContainer}>
                {Object.keys(list).map((theListName) => (
                  <FilterListItem
                    listname={theListName}
                    thelist={list[theListName]}
                    key={theListName}
                    setSelectedFilters={setSelectedFilters}
                  />
                ))}
              </div>
              <div className={buttonContainer}>
                <Button
                  style="secondaryButtonGray"
                  text="取消"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
                <Button
                  style="secondaryButtonBright"
                  text="搜尋"
                  onClick={handleShowButtonClick}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default FilterModal
