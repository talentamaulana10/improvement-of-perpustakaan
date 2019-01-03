import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './jumbotron.css'
const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="mejumbo">
        <h1 className="display-3">Go Library</h1>
        
        <hr className="my-2" />
        <p>"Memudahkanmu Mengelola Perpustakaan"</p>
        <p className="lead">
          <Button color="warning">Buka daftar buku</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;