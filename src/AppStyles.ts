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

import { device } from 'utils/media-query'

// require(`./assets${currentPage}/background-crew-mobile.jpg`).default
const imagesMobile: any = {
  '/': BgImageMobileHome,
  '/destination': BgImageMobileDestination,
  '/crew': BgImageMobileCrew,
  '/technology': BgImageMobileTechnology,
}
const imagesTablet: any = {
  '/': BgImageTabletHome,
  '/destination': BgImageTabletDestination,
  '/crew': BgImageTabletCrew,
  '/technology': BgImageTabletTechnology,
}
const imagesDesktop: any = {
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

  @media ${device.tablet} {
    background-image: ${(props: IPath) =>
      `url(${imagesTablet[props.currentPage]})}`};
  }

  @media ${device.desktop} {
    background-image: ${(props: IPath) =>
      `url(${imagesDesktop[props.currentPage]})}`};
  }
`
