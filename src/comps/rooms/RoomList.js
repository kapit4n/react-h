import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RoomsService from './../../services/RoomsService';
import { Table } from 'react-bootstrap';

export default function RoomList() {

  const [roomList, setRoomList] = useState(RoomsService.getRooms());
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {roomList.map(r => (
          <tr key={r.id}><td>{r.id}</td> <td>{r.name}</td> <td><Link to={`/rooms-info/${r.id}`}>Open</Link></td></tr>
        ))}
      </tbody>
    </Table>
  )
}