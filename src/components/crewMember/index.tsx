import * as React from 'react'

import * as S from './CrewMemberStyles'

import member from 'assets/crew/image-douglas-hurley.webp'

const CrewMember = () => {
  return (
    <S.CrewMemberContainer>
      <S.ImageContainer>
        <S.Image src={member} width="177" height="222" />
      </S.ImageContainer>
      <S.SwitchersList>
        {/* here will be a map function */}
        <S.Switcher className="active" />
        <S.Switcher />
        <S.Switcher />
        <S.Switcher />
      </S.SwitchersList>
      <S.Member>
        <S.MemberPosition>Commander</S.MemberPosition>
        <S.MemberName>Douglas Harley</S.MemberName>
      </S.Member>
      <S.MemberDescription>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </S.MemberDescription>
    </S.CrewMemberContainer>
  )
}

export default CrewMember
