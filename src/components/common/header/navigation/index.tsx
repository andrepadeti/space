import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Navigation = () => {
  return (
    <nav>
      <Container>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destination">Destination</Link>
        </li>
        <li>
          <Link to="/crew">Crew</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
      </Container>
    </nav>
  )
}

export default Navigation
