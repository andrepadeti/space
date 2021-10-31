import styled from 'styled-components'
import BgImageMobileHome from 'assets/home/background-home-mobile.jpg'
import BgImageTabletHome from 'assets/home/background-home-tablet.jpg'
import BgImageDesktopHome from 'assets/home/background-home-desktop.jpg'
import BgImageMobileDestination from 'assets/destination/background-destination-mobile.jpg'
import BgImageTabletDestination from 'assets/destination/background-destination-tablet.jpg'
import BgImageDesktopDestination from 'assets/destination/background-destination-desktop.jpg'
import BgImageMobileCrew from 'assets/crew/background-crew-mobile.jpg'
import BgImageTabletCrew from 'assets/crew/background-crew-tablet.jpg'
import BgImageDesktopCrew from 'assets/crew/background-crew-desktop.jpg'
import BgImageMobileTechnology from 'assets/technology/background-technology-mobile.jpg'
import BgImageTabletTechnology from 'assets/technology/background-technology-tablet.jpg'
import BgImageDesktopTechnology from 'assets/technology/background-technology-desktop.jpg'

// require(`./assets${currentPage}/background-crew-mobile.jpg`).default
const imagesMobile = {
  '/': BgImageMobileHome,
  '/destination': BgImageMobileDestination,
  '/crew': BgImageMobileCrew,
  '/technology': BgImageMobileTechnology,
}
const imagesTablet = {
  '/': BgImageTabletHome,
  '/destination': BgImageTabletDestination,
  '/crew': BgImageTabletCrew,
  '/technology': BgImageTabletTechnology,
}
const imagesDesktop = {
  '/': BgImageDesktopHome,
  '/destination': BgImageDesktopDestination,
  '/crew': BgImageDesktopCrew,
  '/technology': BgImageDesktopTechnology,
}

interface IPath {
  currentPage: string
}

export const PageWrapper = styled.div`
  background-image: ${(props: IPath) =>
    `url(${imagesMobile[props.currentPage]})}`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (min-width: 576px) {
    background-image: ${(props: IPath) =>
      `url(${imagesTablet[props.currentPage]})}`};
  }

  @media (min-width: 850px) {
    background-image: ${(props: IPath) =>
      `url(${imagesDesktop[props.currentPage]})}`};
  } ;;
`
