import { useRef, useState } from 'react'
import { ReactComponent as IconChevronRight } from 'assets/icons/icon-chevron-right.svg'
import styles from './FilterToggoleItem.module.scss'
const { selectOption, icon, active, options } = styles

const FilterToggoleItem = ({ optionList }) => {
  const theListName = Object.keys(optionList)[0]
  // console.log(optionList[theListName])

  const [openSelect, setOpenSelect] = useState(false)
  const inputRef = useRef()
  const handleSelectValue = (e) => {
    inputRef.current.value = e.target.outerText
    setOpenSelect(false)
  }
  const handleOpenOption = () => {
    setOpenSelect(true)
  }
  return (
    <div className={selectOption}>
      <input
        type="text"
        placeholder={theListName}
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
        {optionList[theListName].map((item, index) => (
          <li onClick={handleSelectValue} key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  )
}

export default FilterToggoleItem
