import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// scss
import styles from './TrailsSearchBar.module.scss'
// component
import { ReactComponent as IconArrowRight } from 'assets/icons/icon-arrow-right.svg'

const { trailsSearchBarContainer } = styles

const TrailsSearchBar = ({ type }) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const handleSearch = () => {
    if (keyword) {
      switch (type) {
        case 'trail':
          navigate(`/search/trails/${keyword}`)
          break
        case 'review':
          navigate(`/search/reviews/${keyword}`)
          break
        default:
          break
      }
    } else {
      switch (type) {
        case 'trail':
          navigate('/search/allTrails')
          break
        case 'review':
          navigate('/search/allReviews')
          break
        default:
          break
      }
    }
  }

  return (
    <div className={trailsSearchBarContainer}>
      <input
        type="text"
        placeholder={
          type === 'trail' ? '請輸入路徑、山岳相關名稱' : '請輸入心得標題'
        }
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch()
          }
        }}
      />
      <button>
        <IconArrowRight onClick={handleSearch} />
      </button>
    </div>
  )
}

export default TrailsSearchBar
