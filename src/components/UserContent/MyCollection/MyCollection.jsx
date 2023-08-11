// components
import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'
import MyCollectionTab from './MyCollectionTab/MyCollectionTab'
import MyCollectionItem from './MyCollectionItem/MyCollectionItem'
// hook
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// api
import { getUserFavoritePost } from 'api/user'
// Dummy
const trailCollectionData = [
  {
    trailId: 1,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 2,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 3,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 4,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 5,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 6,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 7,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  },
  {
    trailId: 8,
    title: '文章標題',
    image: 'https://picsum.photos/200/300?grayscale',
    introduction:
      '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
    location: '台北市信義區',
    difficulty: '低',
    distance: '2.3公里',
    duration: '1小時40分鐘'
  }
]

// const reviewCollectionData = [
//   {
//     postId: 1,
//     title: '心得標題',
//     description:
//       '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
//     image: 'https://picsum.photos/200/300?grayscale',
//     userId: 1,
//     createdAt: '2023-7-28',
//     updatedAt: '2023-7-28',
//     userName: '嗨你好',
//     userAvatar: 'https://picsum.photos/id/237/200/300'
//   },
//   {
//     postId: 2,
//     title: '心得標題',
//     description:
//       '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
//     image: 'https://picsum.photos/200/300?grayscale',
//     userId: 3,
//     createdAt: '2023-7-28',
//     updatedAt: '2023-7-28',
//     userName: '嗨你好',
//     userAvatar: 'https://picsum.photos/id/237/200/300'
//   },
//   {
//     postId: 3,
//     title: '心得標題',
//     description:
//       '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
//     image: 'https://picsum.photos/200/300?grayscale',
//     userId: 3,
//     createdAt: '2023-7-28',
//     updatedAt: '2023-7-28',
//     userName: '嗨你好',
//     userAvatar: 'https://picsum.photos/id/237/200/300'
//   },
//   {
//     postId: 4,
//     title: '心得標題',
//     description:
//       '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
//     image: 'https://picsum.photos/200/300?grayscale',
//     userId: 3,
//     createdAt: '2023-7-28',
//     updatedAt: '2023-7-28',
//     userName: '嗨你好',
//     userAvatar: 'https://picsum.photos/id/237/200/300'
//   },
//   {
//     postId: 5,
//     title: '心得標題',
//     description:
//       '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
//     image: 'https://picsum.photos/200/300?grayscale',
//     userId: 3,
//     createdAt: '2023-7-28',
//     updatedAt: '2023-7-28',
//     userName: '嗨你好',
//     userAvatar: 'https://picsum.photos/id/237/200/300'
//   }
// ]

const CollectionList = ({ tabStep, collectionData, reviewListData }) => {
  if (tabStep === 'trailCollection') {
    return (
      <>
        {collectionData.map((item) => (
          <MyCollectionItem
            key={item.trailId}
            tabStep={tabStep}
            collectionData={collectionData[0]}
          />
        ))}
      </>
    )
  } else if (tabStep === 'reviewCollection') {
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
  const [collectionData, setCollectionData] = useState(trailCollectionData)
  const [reviewListData, setReviewListData] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const thePathArray = location.pathname.split('/')

  const handleTapStep = async (type) => {
    setTabStep(type)
    navigate(`/user/${theUserId}/${type}`)
  }

  useEffect(() => {
    setTabStep(thePathArray[3])
  }, [location])

  useEffect(() => {
    if (tabStep === 'trailCollection') {
      setCollectionData(trailCollectionData)
    }
    if (tabStep === 'reviewCollection') {
      const getUserFavoritePostsAsync = async (theUserId) => {
        try {
          const data = await getUserFavoritePost(theUserId)
          setReviewListData(data)
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
        <MyCollectionTab tabStep={tabStep} onTapStep={handleTapStep} />
        {collectionData.length === 0 ? (
          <div>
            <YouHaveNothing robotTitle="收藏" robotDescription="沒有收藏" />
          </div>
        ) : (
          <CollectionList
            tabStep={tabStep}
            collectionData={collectionData}
            reviewListData={reviewListData}
          />
        )}
      </RightSideContainer>
    </>
  )
}
export default MyCollection
