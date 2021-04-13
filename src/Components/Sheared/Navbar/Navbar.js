import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const marginRight = {
        marginRight: '50px'
    }

    return (
        <Navbar collapseOnSelect expand="lg"  variant="light" >
  <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav" >
    <Nav className="ml-auto">
      <Nav.Link style={marginRight}  className=' '  href="#home">Home</Nav.Link>
      <Nav.Link style={marginRight} className=' ' href="#about">About</Nav.Link>
      <Link to="/dashboard" style={marginRight} className=''>DOCTORS DASHBOARD</Link>
      <Nav.Link style={marginRight} className='text-info' href="#reviews">Reviews</Nav.Link>
      <Nav.Link style={marginRight} className='text-info' href="#blog">Blog</Nav.Link>
      <Nav.Link style={marginRight} className='text-info' href="#contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavigationBar;