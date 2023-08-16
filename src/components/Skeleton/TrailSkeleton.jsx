import Skeleton from 'react-loading-skeleton'

export default function TrailSkeleton() {
  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Skeleton width="100%" height={42} style={{ marginBottom: '10px' }} />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
      >
        <Skeleton height={305} style={{ marginBottom: '20px' }} />
        <Skeleton height={305} style={{ marginBottom: '20px' }} />
      </div>
      <div>
        <Skeleton width="100%" height={82} style={{ marginBottom: '20px' }} />
        <Skeleton width="100%" height={605} />
      </div>
    </div>
  )
}
