import styles from './FilterListItem.module.scss'
const { radioSection, radioItem, title } = styles

const FilterListItem = ({ listname, thelist, onSelection }) => {
  return (
    <div>
      <div className={title}>{listname}</div>
      <div className={radioSection}>
        {thelist.map((item, index) => (
          <div
            className={radioItem}
            key={index}
            onClick={() => onSelection?.({ listname, item })}
          >
            <input type="radio" name={listname} id={`${listname}${index}`} />
            <label htmlFor={`${listname}${index}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterListItem
