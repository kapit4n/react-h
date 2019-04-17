import React, { useState } from "react";
import RoomsService from './../../services/RoomsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RoomView(props) {
  const [roomInfo, setRoomInfo] = useState(RoomsService.getRoomById(props.match.params.id))

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={roomInfo.img} />
      <Card.Body>
        <Card.Title>{roomInfo.name}</Card.Title>
        <Card.Text>
          {roomInfo.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Feature 1</ListGroupItem>
      </ListGroup>
      <Card.Body>
      <ButtonToolbar>
        <Link className="btn btn-primary" to={`/rooms-edit/${roomInfo.id}`}>Edit</Link> <br />
        <Button to={`/rooms-edit/${roomInfo.id}`} onClick={() => console.log("Make the reservation")} variant="outline-primary">Reserve</Button>
      </ButtonToolbar>
      </Card.Body>
    </Card>
  )

}