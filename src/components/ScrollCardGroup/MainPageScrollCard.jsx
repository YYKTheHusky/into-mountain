import { useState, useRef } from 'react'
// scss
import styles from 'components/ScrollCardGroup/MainPageScrollCard.module.scss'

// svg
import sliderRight from 'assets/icons/Slider-right-icon.svg'
import sliderLeft from 'assets/icons/slider-left-icon.svg'

// components
import TrailsListCard from 'components/TrailsList/TrailsListCard/TrailsListCard'

export default function MainPageScrollCard({ data, title }) {
  // 點擊按鈕滑動內容
  const cardsContainerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollAmount = 600

  const handleScroll = () => {
    setScrollPosition(cardsContainerRef.current.scrollLeft)
  }

  const handleClickLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollLeft -= scrollAmount
    }
  }

  const handleClickRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollLeft += scrollAmount
    }
  }

  return (
    <div className={`mx-auto ${styles.outerContainer}`}>
      <h4 className={styles.title}>{title}</h4>
      <div
        className={styles.cardscontainer}
        ref={cardsContainerRef}
        onScroll={handleScroll}
        style={{ scrollBehavior: 'smooth', scrollLeft: scrollPosition }}
      >
        {data.map((item) => (
          <TrailsListCard key={item.trailId} data={item} />
        ))}
      </div>
      <img
        className={`cursor-point ${styles.sliderLeft}`}
        src={sliderLeft}
        alt="sliderLeft"
        onClick={handleClickLeft}
      ></img>
      <img
        className={`cursor-point ${styles.sliderRight}`}
        src={sliderRight}
        alt="sliderRight"
        onClick={handleClickRight}
      ></img>
    </div>
  )
}
