import * as React from 'react'

import * as S from './HomeStyles'
import Description from 'components/common/description'

const HomeSection = () => {
  return (
    <>
      <S.SubTitle>SO, YOU WANT TO TRAVEL TO</S.SubTitle>
      <S.Title>Space</S.Title>
      <Description>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Description>
      <S.ExploreBlock>Explore</S.ExploreBlock>
    </>
  )
}

export default HomeSection
