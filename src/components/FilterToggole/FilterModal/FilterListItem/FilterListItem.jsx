import { useRef } from 'react'
import styles from './FilterListItem.module.scss'
const { radioSection, radioItem, title } = styles

const FilterListItem = ({ listname, thelist, setSelectedFilters }) => {
  const inputRefs = useRef([])

  // 清除選項
  const handleClearFilter = (e, listname) => {
    e.preventDefault()
    inputRefs.current.forEach((input) => {
      input.checked = false
    })
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev }
      delete updatedFilters[listname]
      return updatedFilters
    })
  }

  // 選擇選項
  const handleRadioClick = (listname, item) => {
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [listname]: item
    }))
  }

  return (
    <div>
      <div className={title}>{listname}</div>
      <div className={radioSection}>
        {thelist.map((item, index) => (
          <div
            className={radioItem}
            key={index}
            onClick={() => handleRadioClick(listname, item)}
          >
            <input
              type="radio"
              name={listname}
              id={`${listname}${index}`}
              ref={(el) => (inputRefs.current[index] = el)}
            />
            <label htmlFor={`${listname}${index}`}>{item}</label>
          </div>
        ))}
        <button type="button" onClick={(e) => handleClearFilter(e, listname)}>
          清空
        </button>
      </div>
    </div>
  )
}

export default FilterListItem
