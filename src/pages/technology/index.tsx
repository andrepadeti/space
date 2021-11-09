import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'
import data from 'utils/data.json'

import * as S from './index.style'
import Image from 'components/common/image'
import Description from 'components/common/description'

const Technology = () => {
  const mq = useMediaQuery()
  const [tabIndex, setTabIndex] = React.useState(0)
  const { technology } = data

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
        {/* <S.Description mq={mq}> */}
          <Description>
          {technology[tabIndex].description}
          </Description>
        {/* </S.Description> */}
      </S.ContentContainer>
      <S.ImageContainer>
        <Image index={tabIndex} component='technology' />
      </S.ImageContainer>
    </S.Grid>
  )
}

export default Technology
