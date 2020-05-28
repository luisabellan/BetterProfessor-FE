import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
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
          <NavbarBrand to="/"> <h1>Better Professor</h1></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
        <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
        <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
        <Link to="/contact">Contact</Link>
        </NavItem>
        <NavItem>
        <Link to="/how">HowItWorks</Link>
        </NavItem>
        <NavItem>
        <Link to="/reviews">Reviews</Link>
        </NavItem>
            </Nav>
            <NavbarText>Deadline Management App</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;
  