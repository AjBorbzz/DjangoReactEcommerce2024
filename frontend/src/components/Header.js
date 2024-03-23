import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (

  <header>
    <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
      <Container>
         <LinkContainer to='/'>
            <Navbar.Brand >AjBorbz Env</Navbar.Brand>
         </LinkContainer> 

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/cart'>
              <Nav.Link><i className="fas fa-shopping-cart"> Cart</i></Nav.Link>
            </LinkContainer>  

            <LinkContainer to='/pricing'>
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <LinkContainer to='/login'>
            <Nav.Link><i className="fas fa-user">
               Login</i>
            </Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>

  )
}
// This should be a comment
export default Header