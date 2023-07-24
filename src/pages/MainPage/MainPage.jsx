import {
  OvalButtonHuge,
  OvalButtonSmall,
  PrimaryButton,
  PrimaryButtonBright,
  PrimaryButtonGray,
  PrimaryButtonLight,
  SecondaryButton,
  SecondaryButtonBright,
  SecondaryButtonGray,
  SecondaryButtonLight
} from 'components/Button/Button'
import Footer from 'components/Footer/Footer'

export default function MainPage() {
  const handleClick = () => {
    console.log('123')
  }

  return (
    <div>
      <Footer></Footer>
      <PrimaryButton onClick={handleClick}>發布貼文</PrimaryButton>1
      <PrimaryButtonLight onClick={handleClick}>發布貼文</PrimaryButtonLight>1
      <PrimaryButtonBright onClick={handleClick}>發布貼文</PrimaryButtonBright>1
      <PrimaryButtonGray>123</PrimaryButtonGray>
      <SecondaryButton onClick={handleClick}>取消發布</SecondaryButton>
      <SecondaryButtonBright>取消發布</SecondaryButtonBright>
      <SecondaryButtonLight>取消發布</SecondaryButtonLight>
      <SecondaryButtonGray>取消發布</SecondaryButtonGray>
      <OvalButtonHuge>探索所有步道</OvalButtonHuge>
      <OvalButtonSmall>我的心得</OvalButtonSmall>
    </div>
  )
}
