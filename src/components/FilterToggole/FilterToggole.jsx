// import { useState } from 'react'
import styles from './FilterToggole.module.scss'
// import { ReactComponent as IconChevronUp } from 'assets/icons/icon-chevron-up.svg'
import FilterModal from './FilterModal/FilterModal'
import FilterToggoleItem from './FilterToggoleItem/FilterToggoleItem'
// const { filterToggoleGroup, item, icon, itemList, filterIcon } = styles
const { filterIcon } = styles
const list = {
  步道類型: [
    '測試步道類型',
    '步道類型2',
    '步道類型3',
    '步道類型4',
    '步道類型5',
    '試試看'
  ],
  難易度: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6'],
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
  ],
  測試: ['type1', 'type2', 'type3', 'type4']
}

// 桌機版listItem
// const FilterToggoleItem = ({ listName, theList }) => {
//   const [iconToggle, setIconToggle] = useState(false)
//   return (
//     <span className={item} onClick={() => setIconToggle(!iconToggle)}>
//       <span>{listName}</span>
//       <IconChevronUp className={icon} data-expand={iconToggle} />
//       {iconToggle && (
//         <div className={itemList}>
//           {theList.map((theListItem) => (
//             <div key={theListItem} onClick={() => console.log(theListItem)}>
//               {theListItem}
//             </div>
//           ))}
//         </div>
//       )}
//     </span>
//   )
// }

const FilterToggole = () => {
  return (
    <div>
      {/* 桌機版list */}
      {/* <div className={filterToggoleGroup}>
        {Object.keys(list).map((theListName) => (
          <div key={theListName}>
            <FilterToggoleItem
              listName={theListName}
              theList={list[theListName]}
            />
          </div>
        ))}
      </div> */}
      <div className="Group">
        <FilterToggoleItem optionList={list} />
      </div>
      {/* 手機板縮小至modal */}
      <div className={filterIcon}>
        <FilterModal list={list} />
      </div>
    </div>
  )
}

export default FilterToggole
