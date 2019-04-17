import React, { useState } from "react";
import RoomsService from './../../services/RoomsService';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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
        <Card.Link href={`/rooms-edit/${roomInfo.id}`}>Card Edit</Card.Link>
      </Card.Body>
    </Card>
  )

}