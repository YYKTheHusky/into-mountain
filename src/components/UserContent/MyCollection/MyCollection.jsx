import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'
import MyCollectionTab from './MyCollectionTab/MyCollectionTab'
import MyCollectionItem from './MyCollectionItem/MyCollectionItem'
import { useEffect, useState } from 'react'

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

const reviewCollectionData = [
  {
    postId: 1,
    title: '心得標題',
    description:
      '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
    image: 'https://picsum.photos/200/300?grayscale',
    userId: 1,
    createdAt: '2023-7-28',
    updatedAt: '2023-7-28',
    userName: '嗨你好',
    userAvatar: 'https://picsum.photos/id/237/200/300'
  },
  {
    postId: 2,
    title: '心得標題',
    description:
      '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
    image: 'https://picsum.photos/200/300?grayscale',
    userId: 3,
    createdAt: '2023-7-28',
    updatedAt: '2023-7-28',
    userName: '嗨你好',
    userAvatar: 'https://picsum.photos/id/237/200/300'
  },
  {
    postId: 3,
    title: '心得標題',
    description:
      '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
    image: 'https://picsum.photos/200/300?grayscale',
    userId: 3,
    createdAt: '2023-7-28',
    updatedAt: '2023-7-28',
    userName: '嗨你好',
    userAvatar: 'https://picsum.photos/id/237/200/300'
  },
  {
    postId: 4,
    title: '心得標題',
    description:
      '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
    image: 'https://picsum.photos/200/300?grayscale',
    userId: 3,
    createdAt: '2023-7-28',
    updatedAt: '2023-7-28',
    userName: '嗨你好',
    userAvatar: 'https://picsum.photos/id/237/200/300'
  },
  {
    postId: 5,
    title: '心得標題',
    description:
      '12312心得31231321心得3213211231321心123133211231321321123132121心231321心1231321心1231321心1',
    image: 'https://picsum.photos/200/300?grayscale',
    userId: 3,
    createdAt: '2023-7-28',
    updatedAt: '2023-7-28',
    userName: '嗨你好',
    userAvatar: 'https://picsum.photos/id/237/200/300'
  }
]

const MyCollection = () => {
  const [tabStep, setTabStep] = useState('trailCollection')
  const [collectionData, setCollectionData] = useState([])
  const handleTapStep = (type) => {
    setTabStep(type)
  }

  useEffect(() => {
    if (tabStep === 'trailCollection') {
      setCollectionData(trailCollectionData)
    } else if (tabStep === 'reviewCollection') {
      setCollectionData(reviewCollectionData)
    }
  }, [tabStep])

  return (
    <>
      <RightSideContainer title="收藏">
        <MyCollectionTab tabStep={tabStep} onTapStep={handleTapStep} />
        {collectionData.length === 0 && (
          <div>
            <YouHaveNothing robotTitle="收藏" robotDescription="沒有收藏" />
          </div>
        )}
        {collectionData.length > 0 &&
          tabStep === 'trailCollection' &&
          collectionData.map((item) => (
            <MyCollectionItem
              key={item.trailId}
              tabStep={tabStep}
              collectionData={collectionData[0]}
            />
          ))}
        {collectionData.length > 0 &&
          tabStep === 'reviewCollection' &&
          collectionData.map((item) => (
            <MyCollectionItem
              key={item.postId}
              tabStep={tabStep}
              collectionData={collectionData[0]}
            />
          ))}
      </RightSideContainer>
    </>
  )
}
export default MyCollection
