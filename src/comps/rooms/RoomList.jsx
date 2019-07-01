import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RoomsService from '../../services/RoomsService';
import { Table, Button, ListGroup } from 'react-bootstrap';

export default function RoomList() {

  const [roomList, setRoomList] = useState(RoomsService.getRooms());
  return (
    <>
      <Table striped bordered hover className="d-none d-sm-block">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {roomList.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>
                <Link className="btn btn-primary" to={`/rooms-info/${r.id}`}>Open
            </Link>
                <Button onClick={() => console.log("Reservation: " + r.name)}>Reserve</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ListGroup className=".d-block .d-sm-none">
      {roomList.map(r => (
        <ListGroup.Item key={r.id}>{r.name}</ListGroup.Item>
      )) }
      </ListGroup>
    </>
  )
}