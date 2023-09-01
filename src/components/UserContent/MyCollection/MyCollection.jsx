// components
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'
import MyCollectionTab from './MyCollectionTab/MyCollectionTab'
import MyCollectionItem from './MyCollectionItem/MyCollectionItem'
// hook
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// api
import { getUserFavoritePost, getUserFavoriteTrail } from 'api/user'

const TrailCollectionList = ({ tabStep, trailListData, dataIsLoading }) => {
  if (tabStep !== 'trailCollection') {
    return
  }
  if (dataIsLoading) {
    return
  }
  if (trailListData.length === 0) {
    return (
      <div>
        <YouHaveNothing robotTitle="收藏" robotDescription="沒有收藏" />
      </div>
    )
  } else {
    return (
      <>
        {trailListData.map((item) => (
          <MyCollectionItem
            key={item.id}
            tabStep={tabStep}
            collectionData={item.Trail}
          />
        ))}
      </>
    )
  }
}
const PostCollectionList = ({ tabStep, reviewListData, dataIsLoading }) => {
  if (tabStep !== 'reviewCollection') {
    return
  }
  if (dataIsLoading) {
    return
  }
  if (reviewListData.length === 0 || !reviewListData.length) {
    return (
      <div>
        <YouHaveNothing robotTitle="收藏" robotDescription="沒有收藏" />
      </div>
    )
  } else {
    return (
      <>
        {reviewListData.map((item) => (
          <MyCollectionItem
            key={item.id}
            tabStep={tabStep}
            collectionData={item.Post}
          />
        ))}
      </>
    )
  }
}
const MyCollection = ({ theUserId }) => {
  const [tabStep, setTabStep] = useState('trailCollection')
  const [trailListData, setTrailListData] = useState([])
  const [reviewListData, setReviewListData] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const thePathArray = location.pathname.split('/')

  const handleTapStep = async (type) => {
    setTabStep(type)
    setDataIsLoading(true)
    navigate(`/user/${theUserId}/${type}`)
  }

  useEffect(() => {
    setTabStep(thePathArray[3])
  }, [location])

  useEffect(() => {
    if (tabStep === 'trailCollection') {
      const getUserFavoriteTrailsAsync = async (theUserId) => {
        try {
          const data = await getUserFavoriteTrail(theUserId)
          if (data) {
            setTrailListData(data)
          }
          setDataIsLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
      getUserFavoriteTrailsAsync(theUserId)
    }
    if (tabStep === 'reviewCollection') {
      const getUserFavoritePostsAsync = async (theUserId) => {
        try {
          const data = await getUserFavoritePost(theUserId)
          if (data) {
            setReviewListData(data)
          }
          setDataIsLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
      getUserFavoritePostsAsync(theUserId)
    }
  }, [tabStep])

  return (
    <>
      <RightSideContainer title="收藏">
        <div>
          <MyCollectionTab tabStep={tabStep} onTapStep={handleTapStep} />
          <TrailCollectionList
            tabStep={tabStep}
            trailListData={trailListData}
            dataIsLoading={dataIsLoading}
          />
          <PostCollectionList
            tabStep={tabStep}
            reviewListData={reviewListData}
            dataIsLoading={dataIsLoading}
          />
        </div>
      </RightSideContainer>
    </>
  )
}
export default MyCollection
