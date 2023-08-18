import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// scss
import styles from './TrailsSearchBar.module.scss'
// component
import { ReactComponent as IconArrowRight } from 'assets/icons/icon-arrow-right.svg'

const { trailsSearchBarContainer } = styles

const TrailsSearchBar = ({ type, onFilterOption }) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const handleTrailSearch = () => {
    if (keyword) {
      navigate(`/search/trails/${keyword}`)
    } else if (!keyword) {
      navigate('/search/allTrails')
    }
    onFilterOption({ value: null })
  }

  const handleReviewSearch = () => {
    if (keyword) {
      navigate(`/search/reviews/${keyword}`)
    } else if (!keyword) {
      navigate('/search/allReviews')
    }
  }

  return (
    <div className={trailsSearchBarContainer}>
      <input
        type="text"
        placeholder="請輸入路徑、山岳名相關名稱"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>
        <IconArrowRight
          onClick={type === 'trail' ? handleTrailSearch : handleReviewSearch}
        />
      </button>
    </div>
  )
}

export default TrailsSearchBar
