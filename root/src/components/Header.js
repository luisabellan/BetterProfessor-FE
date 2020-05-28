import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import Logo from './images/better-professor-logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>     

        <Navbar color="light" light expand="md">
          <NavbarBrand> <img src={Logo} height="50px"></img> Better Professor</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
        <Link to="/" className="headerLinks">Home</Link>
        </NavItem>
        <NavItem>
        <Link to="/about" className="headerLinks">About</Link>
        </NavItem>
        <NavItem>
        <Link to="/how" className="headerLinks">HowItWorks</Link>
        </NavItem>
        <NavItem>
        <Link to="/reviews" className="headerLinks">Reviews</Link>
        </NavItem>
            </Nav>
            <NavbarText>Deadline Management App</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;
  