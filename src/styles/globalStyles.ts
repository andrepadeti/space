import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { customProperties } from './custom-properties'

export const GlobalStyles = createGlobalStyle`
  ${reset}  
  ${customProperties}
`
