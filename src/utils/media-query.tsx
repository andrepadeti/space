import * as React from 'react'

interface Dictionary {
  [index: string]: number
}

interface MediaQueries {
  [index: string]: string
}

/**
 * Media query hook
 * @example
 * import useMediaQuery, {device} from 'utils/media-query'
 * const isMobile = useMediaQuery(device.mobile)
 * const isTablet = useMediaQuery(device.tablet)
 * const isDesktop = useMediaQuery(device.desktop)
 * @param query
 * @returns boolean
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

const size: Dictionary = {
  // my breakpoints were wrong so I had to fix them.
  // now I'm using Bootstrap breakpoints as reference
  sm: 576,
  md: 768,
  lg: 992,
}

export const device: MediaQueries = {
  mobile: `(max-width: ${size.sm}px)`,
  tablet: `(min-width: ${size.sm + 1}px) and (max-width: ${size.md}px)`,
  desktop: `(min-width: ${size.md + 1}px)`,
}
