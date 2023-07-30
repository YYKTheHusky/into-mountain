import TrailsMainContent from 'components/TrailsMainContent/TrailsMainContent'
import MainLayout from 'components/MainLayout/MainLayout'

export default function TrailsPage() {
  return (
    <div className="container mx-auto">
      <MainLayout>
        <TrailsMainContent />
      </MainLayout>
    </div>
  )
}
