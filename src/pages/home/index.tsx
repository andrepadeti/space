import * as React from 'react'
import Title from 'components/common/title'
import Stuff from 'components/home/stuff'

const Home = ({ onPath }) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [])
  return (
    <div>
      <Title title="home" />
      <Stuff />
    </div>
  )
}

export default Home
