import { useState } from 'react'
import styles from './FilterToggole.module.scss'
import { ReactComponent as IconChevronUp } from 'assets/icons/icon-chevron-up.svg'
const { filterToggole, item, icon, itemList } = styles

const list = {
  步道類型: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6'],
  難易度: ['type1', 'type2', 'type3'],
  里程: ['type1', 'type2', 'type3'],
  所需時間: [
    'type1',
    'type2',
    'type3',
    'type4',
    'type5',
    'type6',
    'type7',
    'type8',
    'type9'
  ]
}

const FilterToggoleItem = ({ listName, theList }) => {
  const [iconToggle, setIconToggle] = useState(false)
  return (
    <span className={item} onClick={() => setIconToggle(!iconToggle)}>
      <span>{listName}</span>
      <IconChevronUp className={icon} data-expand={iconToggle} />
      {iconToggle && (
        <div className={itemList}>
          {theList.map((theListItem) => (
            <div key={theListItem}>{theListItem}</div>
          ))}
        </div>
      )}
    </span>
  )
}

const FilterToggole = () => {
  return (
    <div className={filterToggole}>
      {Object.keys(list).map((theListName) => (
        <FilterToggoleItem
          key={theListName}
          listName={theListName}
          theList={list[theListName]}
        />
      ))}
    </div>
  )
}

export default FilterToggole
