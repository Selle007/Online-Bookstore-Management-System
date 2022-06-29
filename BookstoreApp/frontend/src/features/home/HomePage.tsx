import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from '../components/NavBar'

export default function HomePage() {
  return (
    
    <Container style={{ marginTop: "7em"}}>
      <Navbar />
        <h1>Home Page</h1>
        <h3>Go to <Link to='/categories'>Categories</Link></h3>
    </Container>
  )
}
