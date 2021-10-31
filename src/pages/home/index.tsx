import * as React from 'react'
import Title from 'components/common/title'
import Stuff from 'components/home/stuff'

const Home = ({ onPath }: any) => {
  React.useEffect(() => {
    onPath(window.location.pathname)
  }, [onPath])
  return (
    <div>
      <Title title="home" />
      <Stuff />
    </div>
  )
}

export default Home
