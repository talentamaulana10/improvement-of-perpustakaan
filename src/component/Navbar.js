import React,{Component} from 'react';
import Drop from './Dropdown'
import './smk.jpg'
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './navbar.css';

export default class NavBar extends Component{
    render(){
        return(
            <Navbar color="green" expand="md" className="jan">
          <NavbarBrand href="/" className="re">Library Web</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="me">
                <Link className="mynav" to="/book">Daftar Buku</Link>
              </NavItem>
              <NavItem className="me">
                <Link className="mynav" to="/author">Daftar Penulis</Link>
              </NavItem>
              <NavItem>
                <Drop/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        );
    }
}