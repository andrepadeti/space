interface urlType {
  [index: string]: { mobile: string; tablet: string; desktop: string }
}

const url: urlType = {
  '/': {
    mobile: 'assets/home/background-home-mobile.jpg',
    tablet: 'assets/home/background-home-tablet.jpg',
    desktop: 'assets/home/background-home-desktop.jpg',
  },
  '/destination': {
    mobile: 'assets/destination/background-destination-mobile.jpg',
    tablet: 'assets/destination/background-destination-tablet.jpg',
    desktop: 'assets/destination/background-destination-desktop.jpg',
  },
  '/crew': {
    mobile: 'assets/crew/background-crew-mobile.jpg',
    tablet: 'assets/crew/background-crew-tablet.jpg',
    desktop: 'assets/crew/background-crew-desktop.jpg',
  },
  '/technology': {
    mobile: 'assets/technology/background-technology-mobile.jpg',
    tablet: 'assets/technology/background-technology-tablet.jpg',
    desktop: 'assets/technology/background-technology-desktop.jpg',
  },
}

interface getUrlFn {
  (
    pathname: string,
    mq: { isMobile: boolean; isTablet: boolean; isDesktop: boolean }
  ): string
}

export const getUrl: getUrlFn = (pathname, mq) => {
  const { isTablet, isDesktop } = mq
  const size = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'
  return require('../' + url[pathname][size]).default
}
