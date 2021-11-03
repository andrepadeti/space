import styled from 'styled-components'
import Title from 'components/common/title'

export const CrewMemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 576px) {
  }

  @media (min-width: 850px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-areas:
      'member image'
      'content image'
      'switchers image'
      'empty image';
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid var(--c-gray);

  @media (min-width: 576px) {
    order: 4;
    margin-top: 0;
    border-bottom: 0;
  }

  @media (min-width: 850px) {
    grid-area: image;
    max-width: 570px;
  }
`
export const Image = styled.img`
  width: 200px;

  @media (min-width: 576px) {
    min-width: 28rem;
  }

  @media (min-width: 850px) {
    margin-top: -150px;
  }
`
export const SwitchersList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
  list-style-type: none;
  margin-bottom: 27px;

  @media (min-width: 576px) {
    order: 3;
  }

  @media (min-width: 850px) {
    grid-area: switchers;
    justify-content: left;
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

  @media (min-width: 576px) {
    order: 1;
  }

  @media (min-width: 850px) {
    grid-area: member;
    max-width: 600px;
    display: block;
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

  @media (min-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 850px) {
    text-align: left;
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

  @media (min-width: 576px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 850px) {
    text-align: left;
  }
`
