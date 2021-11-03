import styled from 'styled-components'

import { breakpoints } from 'styles/styled-components-variables'
import Title from 'components/common/title'

export const PTitle = styled(Title)`
  @media (min-width: ${breakpoints.md}) {
    font-size: var(--fs-6);
    margin-bottom: 40px;
    text-align: left;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: var(--fs-5);
    text-align: left;
    margin-bottom: 120px;
  }
`
