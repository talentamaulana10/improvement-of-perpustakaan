import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import './navbar.css'
export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown className="mydrop" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="secondary">
          halaman edit
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/book/create" >tambah daftar buku</DropdownItem>
          <DropdownItem tag={Link} to="/author/create">tambah daftar penulis</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}