import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart.cart)
  return (
    <Navbar bg='light' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Starting Page</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>My bag ({cartProducts.length})</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar