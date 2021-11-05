import styled from 'styled-components'

export const HomeSectionWrapper = styled.div`
  @media (min-width: 576px) {
    width: 444px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
`

export const SubTitle = styled.p`
  font-family: var(--ff-sans-cond);
  font-size: 1.5rem;
  text-align: center;
  color: hsla(var(--c-light));
  font-weight: normal;
  letter-spacing: 3.38px;
  text-transform: uppercase;
`
export const Title = styled.h1`
  font-family: var(--ff-serif);
  font-size: var(--fs-1);
  text-align: center;
  color: hsla(var(--c-white));
  font-weight: normal;
  text-transform: uppercase;
`

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
`
