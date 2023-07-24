import TrailsSearchBar from 'components/TrailsSearchBar/TrailsSearchBar'
import FilterToggole from 'components/FilterToggole/FilterToggole'
export default function TrailsPage() {
  return (
    <div className="container mx-auto">
      <TrailsSearchBar />
      <FilterToggole />
    </div>
  )
}
