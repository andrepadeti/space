import * as React from 'react'
import * as S from './crewStyles'
import CrewMember from 'components/crewMember'

const Crew = ({ onPath }: any) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [onPath])

  return (
    <S.CrewWrapper>
      <S.PTitle number={'02'} title="meet your crew" />
      <CrewMember />
    </S.CrewWrapper>
  )
}

export default Crew
