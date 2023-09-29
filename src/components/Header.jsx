import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} className='fs-3' style={{textDecoration:'none', color:'white'}}>
            <i class="fa-sharp fa-solid fa-file-arrow-up"></i>
             Media PLayer
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header