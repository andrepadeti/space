import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'
import data from 'utils/data.json'

import * as S from './index.style'
import Image from 'components/technology/image'

import desktopBackground from 'assets/technology/background-technology-desktop.jpg'
import tabletBackground from 'assets/technology/background-technology-tablet.jpg'
import mobileBackground from 'assets/technology/background-technology-mobile.jpg'

const Technology = ({ onPath }) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [])
  const mq = useMediaQuery()
  const { isDesktop, isTablet, isMobile } = mq
  const [tabIndex, setTabIndex] = React.useState(0)
  const { technology } = data

  React.useEffect(() => {
    const url = isDesktop
      ? desktopBackground
      : isTablet
      ? tabletBackground
      : mobileBackground
    const position = isTablet || isDesktop ? 'center center' : 'bottom center'
    document.body.style.backgroundImage = `url(${url})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = position
  }, [isDesktop, isTablet, isMobile])

  const handleClick = (index: number) => {
    setTabIndex(index)
  }

  return (
    <S.Grid mq={mq}>
      <S.PageTitle number="03" title="space launch 101" />
      <S.SwitcherContainer mq={mq}>
        {technology.map((item, index) => (
          <S.Switcher
            key={'tech' + index}
            onClick={() => handleClick(index)}
            active={index === tabIndex}
            mq={mq}
          >
            {index + 1}
          </S.Switcher>
        ))}
      </S.SwitcherContainer>
      <S.ContentContainer mq={mq}>
        <S.Subtitle mq={mq}>The terminology...</S.Subtitle>
        <S.Title mq={mq}>{technology[tabIndex].name}</S.Title>
        <S.Description mq={mq}>
          {technology[tabIndex].description}
        </S.Description>
      </S.ContentContainer>
      <S.ImageContainer>
        <Image index={tabIndex} />
      </S.ImageContainer>
    </S.Grid>
  )
}

export default Technology
