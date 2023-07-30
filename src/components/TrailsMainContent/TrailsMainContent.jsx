import styles from './TrailsMainContent.module.scss'
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsList from 'components/TrailsList/TrailsList'
const {
  tailsMainContentContainer,
  search,
  searchBarContainer,
  filterContainer,
  list
} = styles

const TrailsMainContent = () => {
  return (
    <div className={tailsMainContentContainer}>
      <div className={search}>
        <div className={searchBarContainer}>
          <TrailsSearchBar />
        </div>
        <div className={filterContainer}>
          <FilterToggole />
        </div>
      </div>
      <div className={list}>
        <TrailsList />
      </div>
    </div>
  )
}

export default TrailsMainContent
