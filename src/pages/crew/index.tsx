import * as React from 'react'
import * as S from './CrewStyles'
import CrewMember from 'components/crewMember'

const Crew = () => {
  return (
    <S.CrewWrapper>
      <S.PTitle number={'02'} title="meet your crew" />
      <CrewMember />
    </S.CrewWrapper>
  )
}

export default Crew
