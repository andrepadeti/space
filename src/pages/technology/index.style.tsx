import styled, { css } from 'styled-components'
import PTitle from 'components/common/title'

interface CommonProps {
  mq: { isMobile: boolean; isTablet: boolean; isDesktop: boolean }
}

export const Grid = styled.main<CommonProps>`
  padding-block-start: 2em;
  display: grid;
  gap: 2em;
  grid-template-areas:
    'title'
    'image'
    'switcher'
    'content';
  justify-items: center;

  ${({ mq }) =>
    mq.isDesktop &&
    css`
      grid-template-columns: 5rem 10rem 2fr 2fr;
      grid-template-areas:
        '. title title title'
        '. switcher content image';
      gap: 2rem 0;
      justify-items: start;
    `}
`

export const PageTitle = styled(PTitle)`
  height: 5rem;
  grid-area: title;
`

export const SwitcherContainer = styled.div<CommonProps>`
  /* justify-self: center; */
  grid-area: switcher;
  display: flex;
  justify-content: center;
  flex-direction: ${({ mq }) => (mq.isDesktop ? 'column' : 'row')};
  gap: 2em;
`

interface SwitcherProps extends CommonProps {
  active: boolean
  size?: string
}

export const Switcher = styled.button.attrs<SwitcherProps>(({ mq }) => ({
  size: mq.isMobile ? '40px' : mq.isTablet ? '60px' : '80px',
}))<SwitcherProps>`
  display: grid;
  place-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: pointer;

  border-radius: 50%;
  border: 1px solid hsl(var(--c-white) / 0.25);

  font-family: var(--ff-serif);

  color: ${(props) =>
    props.active ? 'hsl(var(--c-dark))' : 'hsl(var(--c-white))'};
  background-color: ${(props) =>
    props.active ? 'hsl(var(--c-white))' : 'hsl(var(--c-dark))'};
`

export const ContentContainer = styled.article<CommonProps>`
  padding-inline: 1em;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: ${({ mq }) => (mq.isDesktop ? 'center' : 'start')};
  align-items: ${({ mq }) => (mq.isDesktop ? 'start' : 'center')};
`

export const Subtitle = styled.h3<CommonProps>`
  font-family: var(--ff-sans-cond);
  font-size: ${({ mq }) => (mq.isMobile ? '14px' : '16px')};
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  white-space: nowrap;
  color: hsl(var(--c-light) / 0.8);
`

export const Title = styled.h2<CommonProps>`
  margin-block-end: 0.5em;
  font-family: var(--ff-serif);
  font-size: ${({ mq }) => (mq.isMobile ? '24px' : '40px')};
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Description = styled.p<CommonProps>`
  text-align: ${({ mq }) => (mq.isDesktop ? 'start' : 'center')};
  font-family: var(--ff-sans-cond);
  font-size: ${({ mq }) =>
    mq.isMobile ? '15px' : mq.isTablet ? '16px' : '18px'};
  font-weight: 400;
  color: hsl(var(--c-light) / 0.8);
`

export const ImageContainer = styled.div`
  grid-area: image;
  justify-self: end;
`
