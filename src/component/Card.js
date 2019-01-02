import React from 'react';
import './card.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
      const Cards=(props)=>{
        return(
        <div>
            
          <Card>
            <CardBody className="mecard">
              <CardTitle>{props.title}</CardTitle>
              <h4>{props.author}</h4>
              <Button>Hapus</Button>
              <Button>Edit</Button>
            </CardBody>
          </Card>
        </div>
    
    )
}
export default Cards;