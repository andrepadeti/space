import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'
import data from 'utils/data.json'

interface ImageProps {
  index: number
  component: string
}

const Image = ({ index, component }: ImageProps) => {
  const [url, setUrl] = React.useState('')
  const [alt, setAlt] = React.useState('')
  const mq = useMediaQuery()
  const { isDesktop } = mq
  const { technology, destinations } = data

  React.useEffect(() => {
    let _url = ''
    let _alt = ''
    if (component === 'technology') {
      if (isDesktop) {
        _url = `${technology[index].images.portrait.substring(2)}`
      } else {
        _url = `${technology[index].images.landscape.substring(2)}`
      }
      _alt = `${technology[index].name}`
    } else if (component === 'destination') {
      _url = `${destinations[index].images.webp.substring(2)}`
      _alt = `${destinations[index].name}`
    }
    setUrl(_url)
    setAlt(_alt)
  }, [index, isDesktop, technology, destinations, component])

  if (url === '') return null
  return <img src={require('../../../' + url).default} alt={alt} />
}

export default Image
