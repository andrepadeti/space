import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface CommonProps {
  mq: { isMobile: boolean; isTablet: boolean; isDesktop: boolean }
}

export const Container = styled.section<CommonProps>`
  margin-block: 2em;
  display: flex;
  justify-content: flex-end;

  ${({ mq }) =>
    mq.isTablet &&
    css`
      margin-block-start: 0;
    `}
`

interface IconWrapperProps {
  left?: boolean
  right?: boolean
  close?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  flex: 1 1 1;
  display: flex;
  align-items: center;
  padding-inline: 3em;

  ${({ left }) =>
    left &&
    css`
      margin-right: auto;
    `}

  ${({ right }) =>
    right &&
    css`
      margin-left: auto;
    `}

  ${({ close }) =>
    close &&
    css`
      position: absolute;
      top: 1em;
      right: 0;
      justify-content: end;
    `}
`

export const MobileContainer = styled.section`
  margin-block: 1em;
  display: flex;

  ${IconWrapper} {
    padding-inline: 1em;
  }
`

export const Line = styled.div`
  flex: 1 1 1;
  width: 45vw;
  height: 1px;
  background-color: hsl(var(--c-white) / 0.2);
  margin-block: 2.5em;
  margin-inline-end: -2em;
  z-index: 1;
`

interface NavigationProps extends CommonProps {
  show: boolean
}

export const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  inset: 0 0 0 30vw;
  transform: translateX(${({ show }) => (show ? '0' : '100vw')});
  transition: all 0.3s ease;
`

export const MenuWrapper = styled.ul<CommonProps>`
  flex: 1 1 1;
  padding-inline: 2em;
  display: flex;
  justify-content: center;
  gap: 2em;
  background-color: hsl(var(--c-light) / 0.05);
  backdrop-filter: blur(3px);

  ${({ mq }) => {
    if (mq.isMobile) {
      return css`
        flex-direction: column;
        justify-content: start;
        gap: 0;
        padding-block-start: 5rem;
        height: 100vh;
        background-color: hsl(var(--c-dark) / 0.7);
        backdrop-filter: blur(20px);

        ${MenuItems} {
          padding-block: 1em;
        }
      `
    }
    if (mq.isTablet) {
      return css`
        width: 70vw;

        ${MenuItems} span {
          display: none;
        }
      `
    }
    if (mq.isDesktop) {
      return css`
        width: 55vw;
      `
    }
  }}
`

export const MenuItems = styled.li`
  list-style: none;
  padding-block: 2rem;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: hsl(var(--c-white));
  font-size: var(--fs-7);
  font-family: var(--ff-sans-cond);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease-in-out;

  span {
    font-weight: bold;
    padding-inline-end: 0.5em;
  }

  &:hover {
    color: #fff;
    background: #000;
  }
`
