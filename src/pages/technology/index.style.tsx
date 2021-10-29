import styled from 'styled-components'
import PTitle from 'components/common/title'

export const Grid = styled.div`
  margin-block-start: 2em;
  display: grid;
  gap: 2em;
  grid-template-areas: 
    "title"
    "image"
    "switcher"
    "content";

  justify-items: center;
`

export const PageTitle = styled(PTitle)`
  grid-area: title;
`

export const SwitcherContainer = styled.div`
  grid-area: switcher;
  display: flex;
  gap: 2em;
`

interface SwitcherProps {
  active: boolean
}

export const Switcher = styled.button<SwitcherProps>`
  display: grid;
  place-content: center;
  width: 2em;
  aspect-ratio: 1;

  cursor: pointer;

  border-radius: 50%;
  border: 1px solid hsl(var(--c-white) / 0.25);

  font-family: var(--ff-serif);

  color: ${(props) =>
    props.active ? 'hsl(var(--c-dark))' : 'hsl(var(--c-white))'};
  background-color: ${(props) =>
    props.active ? 'hsl(var(--c-white))' : 'hsl(var(--c-dark))'};
`

export const ContentContainer = styled.div`
  grid-area: content;
  display: grid;
  justify-items: center;
`

export const Subtitle = styled.h3`
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-8);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: hsl(var(--c-light) / 0.8);
`

export const Title = styled.h2`
  margin-block-end: 0.5em;
  font-family: var(--ff-serif);
  font-size: var(--fs-5);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Description = styled.p`
  padding-inline: 1em;
  text-align: center;
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-6);
  font-weight: 400;
  color: hsl(var(--c-light) / 0.8);
`

export const ImageContainer = styled.div`
    grid-area: image;
`