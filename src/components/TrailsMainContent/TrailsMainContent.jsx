import styles from './TrailsMainContent.module.scss'
import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsList from 'components/TrailsList/TrailsList'
const {
  container,
  innerContainer,
  search,
  searchBarContainer,
  filterContainer,
  list
} = styles

const TrailsMainContent = () => {
  return (
    <div className={container}>
      <div className={innerContainer}>
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
    </div>
  )
}

export default TrailsMainContent
