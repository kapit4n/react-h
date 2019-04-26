import React, { useState } from "react";
import ClientsService from './../../services/RoomsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ClientView(props) {
  const [clientInfo, setClientInfo] = useState(ClientsService.getClientById(props.match.params.id))

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={clientInfo.img} />
      <Card.Body>
        <Card.Title>{clientInfo.name}</Card.Title>
        <Card.Text>
          {clientInfo.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Feature 1</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ButtonToolbar>
          <Link className="btn btn-primary" to={`/rooms-edit/${clientInfo.id}`}>Edit</Link> <br />
          <Button to={`/rooms-edit/${clientInfo.id}`} onClick={() => console.log("Make the reservation")} variant="outline-primary">Reserve</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  )

}