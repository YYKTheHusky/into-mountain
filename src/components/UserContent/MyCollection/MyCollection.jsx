// import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import RightSideContainer from '../RightSideContainer/RightSideContainer'
import MyCollectionTab from './MyCollectionTab/MyCollectionTab'
import MyCollectionItem from './MyCollectionItem/MyCollectionItem'
import { useState } from 'react'

// trailId, title, image, introduction, location, difficulty, distance, duration
const trailCollectionData = {
  trailId: 1,
  title: '文章標題',
  image: 'https://picsum.photos/200/300?grayscale',
  introduction:
    '文章內文前100字文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前文章內文前',
  location: '台北市信義區',
  difficulty: '低',
  distance: '2.3公里',
  duration: '1小時40分鐘'
}

const MyCollection = () => {
  const [tabStep, setTabStep] = useState('trailCollection')
  const handleTapStep = (type) => {
    setTabStep(type)
  }
  return (
    <div>
      {/* <div>
        <YouHaveNothing robotTitle="收藏" robotDescription="沒有收藏" />
      </div> */}
      <RightSideContainer title="收藏">
        <MyCollectionTab tabStep={tabStep} onTapStep={handleTapStep} />
        <MyCollectionItem
          tabStep={tabStep}
          trailCollectionData={trailCollectionData}
        />
      </RightSideContainer>
    </div>
  )
}
export default MyCollection
