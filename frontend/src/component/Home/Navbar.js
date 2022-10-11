import React from "react";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import UserOptions from "../layout/Header/UserOptions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function ExamplesNavbar() {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);

  return (
    <Navbar collapseOnSelect bg="white" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Nav className="profile">
            {!isAuthenticated ? <Nav.Link href="/login">Login</Nav.Link> : <p/>}
            {!isAuthenticated ? <Nav.Link href="/cart"><ShoppingCartIcon style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}/></Nav.Link>: <UserOptions user={user} />}
          </Nav>
        </Navbar.Collapse>
        {/* {!isAuthenticated ? <p/> : <UserOptions user={user} />} */}

      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
