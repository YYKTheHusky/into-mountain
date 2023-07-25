// scss
import styles from 'components/SearchBar/SearchBar.module.scss'

// svg
import searchIcon from 'assets/icons/search-icon.svg'
import searchArrowIcon from 'assets/icons/search-arrow-icon.svg'

// 首頁用大search bar
export function SearchBarMain({ onClick }) {
  return (
    <div className={styles.searchBar}>
      <img className={styles.searchIcon} src={searchIcon} alt="searchIcon"></img>
      <input type="text" className={styles.searchInput} placeholder="請輸入路徑、山岳名稱"></input>
      <img
        className={`cursor-point ${styles.searchArrowIcon}`}
        src={searchArrowIcon}
        alt="searchArrowIcon"
        onClick={onClick}
      ></img>
    </div>
  )
}
