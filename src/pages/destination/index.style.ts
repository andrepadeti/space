import styled, { css } from 'styled-components'
import { device } from 'utils/media-query-all'

import PTitle from 'components/common/title'

export const Grid = styled.main`
  padding-block-start: 2em;
  display: grid;
  gap: 2em;
  grid-template-areas:
    'title'
    'image'
    'switcher'
    'content';
`

export const PageTitle = styled(PTitle)`
  grid-area: title;
`

export const ImageContainer = styled.div`
  grid-area: image;
  padding-inline: 5em;
  justify-self: center;
`

export const SwitcherContainer = styled.ul`
  grid-area: switcher;
  display: flex;
  justify-content: center;
  gap: 1em;

  list-style-type: none;
  letter-spacing: 2px;
`

interface SwitcherProps {
  active: boolean
}

export const Switcher = styled.li<SwitcherProps>`
  --c-underline: transparent;

  padding-block-end: 0.5em;
  font-family: var(--ff-sans-cond);
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--c-underline);

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      --c-underline: hsl(var(--c-white));
    `}

  &:hover, &:focus {
    --c-underline: hsl(var(--c-white) / 0.5);
  }
`

export const ContentContainer = styled.article`
  grid-area: content;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
  /* gap: 1em; */
  align-items: center;
`

export const Title = styled.h2`
  font-family: var(--ff-serif);
  font-weight: 400;
  font-size: 3.5em;
  text-transform: uppercase;
`

export const Description = styled.p`
  text-align: center;
  font-family: var(--ff-sans-cond);
  font-size: 15px;
  font-weight: 400;
  color: hsl(var(--c-light) / 0.8);

  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    text-align: start;
    font-size: 18px;
  }
`

export const Hr = styled.div`
  align-self: stretch;
  padding: 1.5em 1em;
  border-bottom: 1px solid hsl(var(--c-white) / 0.2);
  transform: translateY(-50%);
`

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StatsTitle = styled.h3`
  font-family: var(--ff-sans-cond);
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const StatsFigure = styled.p`
  font-family: var(--ff-serif);
  font-size: 28px;
  text-transform: uppercase;
  padding-block-end: 1em;
`
