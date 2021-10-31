import * as React from 'react'
import Title from 'components/common/title'
import Stuff from 'components/destination/stuff'

const Destination = ({ onPath }: any) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [onPath])
  return (
    <div>
      <Title title="destination" />
      <Stuff />
    </div>
  )
}

export default Destination
