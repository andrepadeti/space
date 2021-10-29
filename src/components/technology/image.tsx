import * as React from 'react'
import useMediaQuery from 'utils/media-query-all'
import data from 'utils/data.json'

interface ImageProps {
  index: number
}

const Image = ({ index }: ImageProps) => {
  const [url, setUrl] = React.useState('')
  const mq = useMediaQuery()
  const { isDesktop } = mq
  const { technology } = data

  React.useEffect(() => {
    const _url = isDesktop
      ? `${technology[index].images.portrait.substring(2)}`
      : `${technology[index].images.landscape.substring(2)}`
    setUrl(_url)
  }, [index, isDesktop, technology])

  if (url === '') return null
  return (
    <img src={require('../../' + url).default} alt={technology[index].name} />
  )
}

export default Image
