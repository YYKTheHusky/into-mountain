// import { useState } from 'react'
import styles from './FilterToggole.module.scss'
import FilterModal from './FilterModal/FilterModal'
import FilterToggoleItem from './FilterToggoleItem/FilterToggoleItem'
const { filterToggoleGroup, filterIcon } = styles

const FilterToggole = ({ filterList, setFilter }) => {
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
            setFilter={setFilter}
          />
        ))}
      </div>
      {/* 手機板縮小至modal */}
      <div className={filterIcon}>
        <FilterModal list={filterList} setFilter={setFilter} />
      </div>
    </div>
  )
}

export default FilterToggole
