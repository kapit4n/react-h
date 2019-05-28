import React, { useState } from "react";
import ClientsService from '../../services/ClientsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Clients.css';

export default function ClientView(props) {
  const [clientInfo, setClientInfo] = useState(ClientsService.getClientById(props.match.params.id))

  return (
    <Card className="card-view">
      <div className="left-view">
        <Card.Img variant="top" src={clientInfo.img} />
      </div>
      <div className="right-view">
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
            <Link className="btn btn-primary" to={`/clients-edit/${clientInfo.id}`}>Edit</Link> <br />
            <Button to={`/clients-edit/${clientInfo.id}`} onClick={() => console.log("Make the reservation")} variant="outline-primary">Reserve</Button>
          </ButtonToolbar>
        </Card.Body>
      </div>
    </Card>
  )

}