import FilterToggole from 'components/FilterToggole/FilterToggole'
import TrailsList from 'components/TrailsList/TrailsList'
export default function TrailsPage() {
  return (
    <div className="container mx-auto">
      <FilterToggole />
      <TrailsList />
    </div>
  )
}
