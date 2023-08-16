import Skeleton from 'react-loading-skeleton'

export default function CardSkeleton() {
  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Skeleton height={182} width={298} />
      </div>
      <div>
        <Skeleton count={2} style={{ marginBottom: '10px' }} />
      </div>
    </div>
  )
}
