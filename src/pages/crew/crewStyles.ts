import styled from 'styled-components'
import Title from 'components/common/title'

export const CrewWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1100px) {
    padding-left: 160px;
    padding-right: 133px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const PTitle = styled(Title)`
  @media (min-width: 576px) {
    font-size: var(--fs-6);
    margin-bottom: 40px;
    text-align: left;
  }

  @media (min-width: 850px) {
    font-size: var(--fs-5);
    text-align: left;
    margin-bottom: 120px;
  }
`
