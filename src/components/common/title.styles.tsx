import styled, {css} from 'styled-components'

interface TextProps {
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
}

export const Number = styled.span`
  font-weight: bold;
  color: hsl(var(--c-white) / 0.25);
  margin-inline-end: 0.8em;
`

export const Text = styled.h1<TextProps>`
  font-size: var(--fs-7);
  font-weight: 400;
  font-family: var(--ff-sans-cond);
  letter-spacing: 0.2em;
  text-transform: uppercase;

  ${({ isTablet }) => isTablet && css`
    font-size: var(--fs-6);
  `}

  ${({ isDesktop }) => isDesktop && css`
    font-size: var(--fs-5);
  `}
`
