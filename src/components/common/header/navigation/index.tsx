import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'

import * as S from './styles'
import logo from 'assets/shared/logo.svg'
import close from 'assets/shared/icon-close.svg'
import hamburger from 'assets/shared/icon-hamburger.svg'

const Navigation = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  const mq = useMediaQuery()
  const { isDesktop, isTablet, isMobile } = mq

  const renderNavigation = () => {
    return (
      <>
        <S.MenuItems>
          <S.MenuLink exact to="/">
            <span>00</span>Home
          </S.MenuLink>
        </S.MenuItems>
        <S.MenuItems>
          <S.MenuLink to="/destination">
            <span>01</span>Destination
          </S.MenuLink>
        </S.MenuItems>
        <S.MenuItems>
          <S.MenuLink to="/crew">
            <span>02</span>Crew
          </S.MenuLink>
        </S.MenuItems>
        <S.MenuItems>
          <S.MenuLink to="/technology">
            <span>03</span>Technology
          </S.MenuLink>
        </S.MenuItems>
      </>
    )
  }

  const renderLargeScreenNav = () => {
    return (
      <S.Container mq={mq}>
        <S.IconWrapper left={true}>
          <img src={logo} alt="Logo" />
        </S.IconWrapper>

        {isDesktop ? <S.Line /> : null}

        <S.MenuWrapper mq={mq}>{renderNavigation()}</S.MenuWrapper>
      </S.Container>
    )
  }

  const renderSmallScreenNav = () => {
    return (
      <S.MobileContainer>
        <S.IconWrapper left={true}>
          <img src={logo} alt="Logo" />
        </S.IconWrapper>

        <S.IconWrapper right={true}>
          <img src={hamburger} alt="Logo" onClick={() => setShowMenu(true)} />
        </S.IconWrapper>

        <S.Navigation
          mq={mq}
          show={showMenu}
          onClick={() => setShowMenu(false)}
        >
          <S.MenuWrapper mq={mq}>
            <S.IconWrapper close={true}>
              <img src={close} alt="Logo" onClick={() => setShowMenu(true)} />
            </S.IconWrapper>
            {renderNavigation()}
          </S.MenuWrapper>
        </S.Navigation>
      </S.MobileContainer>
    )
  }

  return (
    <>
      {isDesktop || isTablet ? renderLargeScreenNav() : null}
      {isMobile ? renderSmallScreenNav() : null}
    </>
  )
}

export default Navigation
