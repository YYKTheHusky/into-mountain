// import YouHaveNothing from 'components/UserContent/YouHaveNothing/YouHaveNothing'
import styles from './MyReview.module.scss'
import ListItem from './ListItem/ListItem'
import RightSideContainer from 'components/UserContent/RightSideContainer/RightSideContainer'
const { myReviewContainer } = styles

const MyReview = () => {
  return (
    <RightSideContainer title="心得">
      <div className={myReviewContainer}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </RightSideContainer>
  )
}
export default MyReview
