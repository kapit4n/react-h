import React, { useState } from "react";
import RoomsService from './../../services/RoomsService';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';

export default function RoomEdit(props) {

  const [roomInfo, setRoomInfo] = useState(RoomsService.getRoomById(props.match.params.id))

  const { match: { params } } = props;
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={roomInfo.img} />
      <input value={roomInfo.img} onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { img: e.target.value }))}/>
      <Card.Body>
        <Card.Title><input value={roomInfo.name} onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { name: e.target.value }))} /></Card.Title>
        <Card.Text>
          <textarea cols="50" rows="10" onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { description: e.target.value }))}>
            {roomInfo.description}
          </textarea>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Feature 1</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ButtonToolbar>
          <Button 
            onClick={() => console.log(roomInfo)}>
            Save
          </Button> <br />
          <Link className="btn btn-danger" to={`/rooms-info/${roomInfo.id}`}>Cancel</Link> <br />
        </ButtonToolbar>
      </Card.Body>
    </Card>
  )
}