import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'
import data from 'utils/data.json'

import * as S from './index.style'

import desktopBackground from 'assets/technology/background-technology-desktop.jpg'
import tabletBackground from 'assets/technology/background-technology-tablet.jpg'
import mobileBackground from 'assets/technology/background-technology-mobile.jpg'

const Technology = () => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery()
  const [tabIndex, setTabIndex] = React.useState(0)
  const { technology } = data

  // console.log(technology[tabIndex].images.portrait.substring(2))

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
    <S.Grid>
      <S.PageTitle number="03" title="space launch 101" />
      <S.SwitcherContainer>
        {technology.map((item, index) => (
          <S.Switcher
            key={'tech' + index}
            onClick={() => handleClick(index)}
            active={index === tabIndex}
          >
            {index + 1}
          </S.Switcher>
        ))}
      </S.SwitcherContainer>
      <S.ContentContainer>
        <S.Subtitle>The terminology...</S.Subtitle>
        <S.Title>{technology[tabIndex].name}</S.Title>
        <S.Description>{technology[tabIndex].description}</S.Description>
      </S.ContentContainer>
      <S.ImageContainer>
        <img
          src={
            isDesktop
              ? 'https://unsplash.it/515/527'
              : 'https://unsplash.it/768/310'
          }
          alt=""
        />
      </S.ImageContainer>
    </S.Grid>
  )
}

export default Technology
