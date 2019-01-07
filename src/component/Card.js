import React from 'react';
import './card.css';
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
      const Cards=(props)=>{
        return(
        <div>
            
          <Card>
            <CardBody className="mecard">
              <CardTitle>{props.title}</CardTitle>
              <h4>{props.author}</h4>
              <Button onClick={()=>props.delete(props.id)}>Hapus</Button>
              <Link to={`/book/edit/${props.id}`}><Button>Edit</Button></Link>
            </CardBody>
          </Card>
        </div>
    
    )
}
export default Cards;