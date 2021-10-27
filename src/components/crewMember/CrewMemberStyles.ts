import styled from 'styled-components'

export const CrewMemberContainer = styled.div`
  width: 327px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--c-gray);
  margin-bottom: 32px;
`
export const Image = styled.img``
export const SwitchersList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  list-style-type: none;
  margin-bottom: 27px;
`
export const Switcher = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--c-gray);

  &.active {
    background-color: hsl(var(--c-white));
  }
`
export const Member = styled.h3``
export const MemberPosition = styled.span`
  font-family: var(--ff-serif);
  font-weight: 400;
  line-height: 18px;
  opacity: 0.5;
  text-align: center;
  display: block;
  text-transform: uppercase;
  color: hsl(var(--c-white));
  margin-bottom: 5px;
`
export const MemberName = styled.span`
  font-family: var(--ff-serif);
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  display: block;
  text-transform: uppercase;
  color: hsl(var(--c-white));
  margin-bottom: 10px;
`
export const MemberDescription = styled.p`
  font-family: var(--ff-sans-cond);
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: hsl(var(--c-light));
`
