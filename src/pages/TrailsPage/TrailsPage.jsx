import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
import Nav from 'components/Nav/Nav'
import TrailsList from 'components/TrailsList/TrailsList'

export default function TrailsPage() {
  return (
    <div className="container mx-auto">
      <Nav />
      <TrailsSearchBar />
      <FilterToggole />
      <TrailsList />
    </div>
  )
}
