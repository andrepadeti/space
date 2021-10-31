import * as React from 'react'
import Title from 'components/common/title'
import Stuff from 'components/destination/stuff'

const Destination = ({ onPath }) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [])
  return (
    <div>
      <Title title="destination" />
      <Stuff />
    </div>
  )
}

export default Destination
