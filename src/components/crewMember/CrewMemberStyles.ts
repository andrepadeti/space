import styled from 'styled-components'

export const CrewMemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 35rem) {
  }

  @media (min-width: 45rem) {
    display: grid;
    grid-template-areas:
      'member image'
      'content image'
      'switchers image';
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -150px;
  margin-bottom: 32px;
  margin-left: 10%;
  margin-right: 10%;
  align-items: flex-end;
  border-bottom: 1px solid var(--c-gray);

  @media (min-width: 35rem) {
    order: 4;
    margin-top: 0;
    border-bottom: 0;
  }

  @media (min-width: 45rem) {
    grid-area: image;
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  transform: scale(0.7);
  transform-origin: 50% 100%;

  @media (min-width: 35rem) {
    min-width: 28rem;
    transform: scale(1);
  }

  @media (min-width: 45rem) {
    transform: translateY(-50px);
  }
`
export const SwitchersList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
  list-style-type: none;
  margin-bottom: 27px;

  @media (min-width: 35rem) {
    order: 3;
  }

  @media (min-width: 45rem) {
    grid-area: switchers;
  }
`
export const Switcher = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--c-gray);
  cursor: pointer;

  &.active {
    background-color: hsl(var(--c-white));
  }
`
export const Member = styled.h3`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 35rem) {
    order: 1;
    width: 28rem;
  }

  @media (min-width: 45rem) {
    grid-area: member;
    max-width: 25rem;
  }
`
export const MemberPosition = styled.span`
  font-family: var(--ff-serif);
  font-weight: 400;
  line-height: 18px;
  opacity: 0.5;
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  color: hsl(var(--c-white));
  margin-bottom: 5px;

  @media (min-width: 35rem) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 45rem) {
  }
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

  @media (min-width: 35rem) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 45rem) {
  }
`
export const MemberDescription = styled.p`
  font-family: var(--ff-sans-cond);
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: hsl(var(--c-light));
  padding-left: 10%;
  padding-right: 10%;

  @media (min-width: 35rem) {
    order: 2;
    min-width: 28rem;
    margin-bottom: 32px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 45rem) {
    grid-area: content;
    max-width: 25rem;
    text-align: left;
  }
`
