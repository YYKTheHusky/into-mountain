import { useRef, useState } from 'react'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
import styles from './FilterToggoleItem.module.scss'
const { selectOption, icon, active, options, clearStyle } = styles

const FilterToggoleItem = ({
  optionList,
  listName,
  filterOption,
  onFilterOption
}) => {
  const [openSelect, setOpenSelect] = useState(false)
  const inputRef = useRef()
  const handleSelectValue = (e) => {
    inputRef.current.value = e.target.outerText
    setOpenSelect(false)
    onFilterOption({ type: listName, value: e.target.outerText })
  }
  const handleOpenOption = () => {
    setOpenSelect(true)
  }
  const handleClearFilter = () => {
    inputRef.current.value = ''
    setOpenSelect(false)
    onFilterOption({ type: listName, value: '' })
  }
  return (
    <div className={selectOption}>
      <input
        type="text"
        placeholder={listName}
        ref={inputRef}
        onClick={handleOpenOption}
        onBlur={() => {
          setOpenSelect(false)
        }}
        readOnly
      />
      <span>
        <IconChevronRight
          className={openSelect ? `${icon} ${active}` : `${icon}`}
        />
      </span>
      <div className={openSelect ? `${options} ${active}` : `${options}`}>
        {optionList.map((item, index) => (
          <li onClick={handleSelectValue} key={index}>
            {item}
          </li>
        ))}
        <li className={clearStyle} onClick={handleClearFilter} key="clear">
          清空
        </li>
      </div>
    </div>
  )
}

export default FilterToggoleItem
