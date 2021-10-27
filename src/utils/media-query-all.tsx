import * as React from 'react'

interface Dictionary {
  [index: string]: number
}

interface MediaQueries {
  [index: string]: string
}

const size: Dictionary = {
  sm: 576,
  md: 768,
  lg: 992,
}

const device: MediaQueries = {
  mobile: `(max-width: ${size.sm}px)`,
  tablet: `(min-width: ${size.sm + 1}px) and (max-width: ${size.md}px)`,
  desktop: `(min-width: ${size.md + 1}px)`,
}

/**
 * Media query hook
 * @example
 * import useMediaQuery from 'utils/media-query-all'
 * const { isMobile, isTablet, isDesktop } = useMediaQuery()
 * @param query
 * @returns boolean
 */
export default function useMediaQuery(): {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
} {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const mobile = window.matchMedia(device.mobile)
    const tablet = window.matchMedia(device.tablet)
    const desktop = window.matchMedia(device.desktop)

    if (mobile.matches !== isMobile) {
      setIsMobile(mobile.matches)
    }

    if (tablet.matches !== isTablet) {
      setIsTablet(tablet.matches)
    }

    if (desktop.matches !== isDesktop) {
      setIsDesktop(desktop.matches)
    }

    const mobileListener = () => {
      setIsMobile(mobile.matches)
    }

    const tabletListener = () => {
      setIsTablet(tablet.matches)
    }

    const desktopListener = () => {
      setIsDesktop(desktop.matches)
    }

    mobile.addEventListener('change', mobileListener)
    tablet.addEventListener('change', tabletListener)
    desktop.addEventListener('change', desktopListener)

    return () => {
      mobile.removeEventListener('change', mobileListener)
      tablet.removeEventListener('change', tabletListener)
      desktop.removeEventListener('change', desktopListener)
    }
  }, [isMobile, isTablet, isDesktop])

  return { isMobile, isTablet, isDesktop }
}
