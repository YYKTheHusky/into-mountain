import MainLayout from 'components/MainLayout/MainLayout'
import ReviewsMainContent from 'components/ReviewsMainContent/ReviewsMainContent'
export default function ReviewsPage() {
  return (
    <div className="container mx-auto">
      <MainLayout>
        <ReviewsMainContent />
      </MainLayout>
    </div>
  )
}
