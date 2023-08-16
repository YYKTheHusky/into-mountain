import Skeleton from 'react-loading-skeleton'

export default function ReviewSkeleton() {
  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Skeleton width="100%" height={42} style={{ marginBottom: '10px' }} />
        <Skeleton width="100%" height={42} style={{ marginBottom: '10px' }} />
        <Skeleton width="100%" height={42} style={{ marginBottom: '10px' }} />
        <Skeleton width="100%" height={42} style={{ marginBottom: '10px' }} />
      </div>
      <div>
        <Skeleton width="100%" height={810} />
      </div>
    </div>
  )
}
