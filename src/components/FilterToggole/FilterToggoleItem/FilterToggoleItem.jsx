import { useRef, useState } from 'react'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
import styles from './FilterToggoleItem.module.scss'
const { selectOption, icon, active, options, clearStyle } = styles

const FilterToggoleItem = ({ optionList, listName, setFilter }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const inputRef = useRef()

  function replaceKeyValue(obj, keyToReplace, newValue) {
    const updatedObj = { ...obj }

    for (const key in updatedObj) {
      if (key === keyToReplace) {
        updatedObj[key] = newValue
      }
    }

    return updatedObj
  }

  const handleSelectValue = (e) => {
    inputRef.current.value = e.target.outerText
    setOpenSelect(false)
    setFilter((pre) => {
      const updatedFilterData = replaceKeyValue(
        pre,
        listName,
        e.target.outerText
      )
      return updatedFilterData
    })
  }
  const handleOpenOption = () => {
    setOpenSelect(!openSelect)
  }
  const handleClearFilter = () => {
    inputRef.current.value = ''
    setOpenSelect(false)
    setFilter((pre) => {
      const updatedFilterData = replaceKeyValue(pre, listName, '')
      return updatedFilterData
    })
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
