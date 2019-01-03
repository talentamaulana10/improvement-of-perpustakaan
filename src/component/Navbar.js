import React,{Component} from 'react';
import Drop from './Dropdown'
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
            <Navbar color="light" light expand="md" className="jan">
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="mynav"  tag={Link} to="/book">Daftar Buku</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mynav"  tag={Link} to="/author">Daftar Penulis</NavLink>
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