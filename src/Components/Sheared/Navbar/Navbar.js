import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="w-100 bg-transparent">
      <Navbar.Toggle
        className="ml-auto"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="text-decoration-none" >
           <NavText  className={splitLocation[1] === "" ? "active" : ""}>Home</NavText> 
          </Link>
         
          <Link to="/dashboard" className="text-decoration-none">
          <NavText  className={splitLocation[1] === "dashboard" ? "active" : ""}>Dashboard </NavText>
          </Link>
          <Link  className="text-decoration-none">
          <NavText>Reviews </NavText>
          </Link>
          <Link   className="text-decoration-none">
          <NavText> Blog </NavText>
          </Link>
          <Link  className="text-decoration-none" to="/">
          <NavText>About</NavText>
          </Link>
          <Link  className="text-decoration-none">
          <NavText>Contact Us </NavText>
          </Link>
       </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
const NavText = styled.p`
margin: 0;
margin-top:10px;
max-width: 100%;
text-align: center;
padding: 10px 20px;
// margin-left: 30px;
color: black;
// background: #D1DDE7;
font-weight: 500;
font-size: 20px;
line-height: 30px;
border-radius: 5px;
&:hover {
 background-color: black;
 color:  #D1DDE7;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  font-weight: 400;
font-size: 14px;
line-height: 20px;
max-width: 40%;
}
}
`
