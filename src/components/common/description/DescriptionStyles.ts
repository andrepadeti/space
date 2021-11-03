import styled from 'styled-components'

export const Description = styled.p`
  font-family: var(--ff-sans-cond);
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: hsl(var(--c-light));

  @media (min-width: 576px) {
    order: 2;
    min-width: 20rem;
    margin-bottom: 32px;
  }

  @media (min-width: 850px) {
    grid-area: content;
    max-width: 50%;
    text-align: left;
    margin-bottom: 75px;
  }
`
