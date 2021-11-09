import * as React from 'react'
import data from 'utils/data.json'

import * as S from './index.style'
import Image from 'components/common/image'

const Destination = () => {
  const { destinations } = data
  const [tabIndex, setTabIndex] = React.useState(0)

  return (
    <S.Grid>
      <S.PageTitle number="01" title="pick your destination" />
      <S.ImageContainer>
        <Image index={tabIndex} component="destination" />
      </S.ImageContainer>

      <S.SwitcherContainer>
        {destinations.map((destination, index) => (
          <S.Switcher
            key={'dest' + index}
            active={index === tabIndex}
            onClick={() => setTabIndex(index)}
          >
            {destination.name}
          </S.Switcher>
        ))}
      </S.SwitcherContainer>
      <S.ContentContainer>
        <S.Title>{destinations[tabIndex].name}</S.Title>
        <S.Description>{destinations[tabIndex].description}</S.Description>
        <S.Hr />
        <S.StatsContainer>
          <div>
            <S.StatsTitle>Avg. Distance</S.StatsTitle>
            <S.StatsFigure>{destinations[tabIndex].distance}</S.StatsFigure>
          </div>
          <div>
            <S.StatsTitle>Est. Travel Time</S.StatsTitle>
            <S.StatsFigure>{destinations[tabIndex].travel}</S.StatsFigure>
          </div>
        </S.StatsContainer>
      </S.ContentContainer>
    </S.Grid>
  )
}

export default Destination
