// import { useState } from 'react'
import styles from './FilterToggole.module.scss'
// import { ReactComponent as IconChevronUp } from 'assets/icons/icon-chevron-up.svg'
import FilterModal from './FilterModal/FilterModal'
import FilterToggoleItem from './FilterToggoleItem/FilterToggoleItem'
const { filterIcon, filterToggoleGroup } = styles

const FilterToggole = ({ filterList, onFilterOption }) => {
  const listName = Object.keys(filterList)
  return (
    <div>
      {/* 桌機版篩選 */}
      <div className={filterToggoleGroup}>
        {listName.map((item, index) => (
          <FilterToggoleItem
            key={index}
            listName={item}
            optionList={filterList[item]}
            onFilterOption={onFilterOption}
          />
        ))}
      </div>
      {/* 手機板縮小至modal */}
      <div className={filterIcon}>
        <FilterModal list={filterList} />
      </div>
    </div>
  )
}

export default FilterToggole
