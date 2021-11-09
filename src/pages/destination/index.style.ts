import styled, { css } from 'styled-components'
import { device } from 'utils/media-query-all'

import PTitle from 'components/common/title'

export const Grid = styled.main`
  padding-block: 2em;
  max-width: 1440px;
  margin: 0 auto; 
  
  display: grid;
  gap: 2em;
  grid-template-areas:
    'title'
    'image'
    'switcher'
    'content';

  @media ${device.desktop} {
    grid-template-columns: 5rem 3fr 5fr;
    grid-template-areas:
      '. title title'
      '. image switcher'
      '. image content';

  }
`

export const PageTitle = styled(PTitle)`
  grid-area: title;
`

export const ImageContainer = styled.div`
  grid-area: image;
  padding-inline: 5em;
  justify-self: center;

  @media ${device.desktop} {
    padding-inline: 0;
  }
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

  @media ${device.tablet} {
    font-size: 5em;
  }

  @media ${device.desktop} {
    font-size: calc(8vw + 1em);
  }
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

  @media ${device.mobile} {
    & > div:first-child {
      margin-block-end: 1em;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 5em;

    & > div {
      margin-block-end: 1em;
    }
  }

  @media ${device.desktop} {
    flex-direction: row;
    gap: 6vw;
  }
`

export const StatsTitle = styled.h3`
  font-family: var(--ff-sans-cond);
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media ${device.desktop} {
    text-align: start;
  }
`

export const StatsFigure = styled.p`
  font-family: var(--ff-serif);
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
`
