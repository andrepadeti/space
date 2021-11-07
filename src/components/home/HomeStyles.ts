import styled from 'styled-components'

export const HomeSectionWrapper = styled.div`
  @media (min-width: 576px) {
    min-width: 444px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  @media (min-width: 850px) {
    max-width: 1440px;
    /* width: auto; */
    margin-top: 190px;
    /* grid-template-columns: 1fr 1fr;
    display: grid;
    grid-template-areas:
      'subtitle .'
      'title exploreBlock'
      'description exploreBlock'; */
    display: flex;
    justify-content: space-between;
  }
`

export const MainTextWrapper = styled.div``

export const SubTitle = styled.p`
  font-family: var(--ff-sans-cond);
  font-size: 1.5rem;
  text-align: center;
  color: hsla(var(--c-light));
  font-weight: normal;
  letter-spacing: 3.38px;
  text-transform: uppercase;

  @media (min-width: 850px) {
    /* grid-area: subtitle; */
    text-align: left;
  }
`
export const Title = styled.h1`
  font-family: var(--ff-serif);
  font-size: var(--fs-1);
  text-align: center;
  color: hsla(var(--c-white));
  font-weight: normal;
  text-transform: uppercase;

  @media (min-width: 850px) {
    /* grid-area: title; */
    text-align: left;
  }
`
export const ExploreBlockWrapper = styled.div``

export const ExploreBlock = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  font-family: var(--ff-serif);
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: normal;
  text-transform: uppercase;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 165px;

  @media (min-width: 576px) {
    width: 242px;
    height: 242px;
    font-size: var(--fs-4);
  }

  @media (min-width: 850px) {
    margin-top: 120px;
    /* grid-area: exploreBlock; */
  }
`
