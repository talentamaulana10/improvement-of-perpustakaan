import React,{Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import './jumbotron.css'
class Jumbo extends Component{
  try=()=>{
    alert("maaf masih dalam tahap pengembangan")
  }
  render(){
  return (
    <div>
      <Jumbotron className="mejumbo">
        <h1 className="display-3">Library Web</h1>
        
        <hr className="my-2" />
        <p>"Memudahkanmu Mengelola Perpustakaan"</p>
        <p className="lead">
         <Button tag={Link} to="/book" color="danger" className="mybu" >Buka daftar buku</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
}

export default Jumbo;