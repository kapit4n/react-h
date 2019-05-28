import React, { useState } from "react";
import RoomsService from './../../services/RoomsService';
import { Link } from 'react-router-dom';
import { Form, ButtonToolbar } from 'react-bootstrap';

export default function RoomEdit(props) {

  const [roomInfo, setRoomInfo] = useState(RoomsService.getRoomById(props.match.params.id))

  const { match: { params } } = props;

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name </Form.Label>
        <Form.Control value={roomInfo.name} onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { name: e.target.value }))} type="text" placeholder="Name" />
      </Form.Group>
      
      <Form.Group controlId="img">
        <Form.Label>Img </Form.Label>
        <Form.Control value={roomInfo.img} onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { img: e.target.value }))} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control value={roomInfo.description} onChange={(e) => setRoomInfo(Object.assign({}, roomInfo, { description: e.target.value }))} type="textarea" placeholder="Name" />
      </Form.Group>
      <ButtonToolbar>
        <Link className="btn btn-primary" to={`/rooms-info/${roomInfo.id}`}>Save
          </Link>
        <br />
        <Link className="btn btn-danger" to={`/rooms-info/${roomInfo.id}`}>Cancel</Link> <br />
      </ButtonToolbar>

    </Form>
  )
}