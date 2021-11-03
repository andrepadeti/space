import * as React from 'react'

import * as S from './CrewMemberStyles'
import Description from 'components/common/description'

import data from 'utils/data.json'

const CrewMember = () => {
  const { crew } = data
  const [selectedCrewMember, setSelectedCrewMember] = React.useState(0)

  const handleSwitcher = (index: number) => {
    setSelectedCrewMember(index)
  }

  return (
    <S.CrewMemberContainer>
      <S.ImageContainer>
        <S.Image
          src={
            require(`../../${crew[selectedCrewMember].images.webp.substring(
              2
            )}`).default
          }
          width="177"
          alt={`Astronaut ${crew[selectedCrewMember].name}`}
        />
      </S.ImageContainer>
      <S.SwitchersList>
        {crew.map((person, index) => (
          <S.Switcher
            key={person.name}
            onClick={() => handleSwitcher(index)}
            className={selectedCrewMember === index ? 'active' : ''}
          />
        ))}
      </S.SwitchersList>
      <S.Member>
        <S.MemberPosition>{crew[selectedCrewMember].role}</S.MemberPosition>
        <S.MemberName>{crew[selectedCrewMember].name}</S.MemberName>
      </S.Member>
      <Description>{crew[selectedCrewMember].bio}</Description>
    </S.CrewMemberContainer>
  )
}

export default CrewMember
