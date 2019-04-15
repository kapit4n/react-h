import React, { useState } from "react";
import {Link} from 'react-router-dom';
import RoomsService  from './../../services/RoomsService';

export default function RoomList() {

  const [roomList, setRoomList] = useState(RoomsService.getRooms());
  return (
    <table>
      {roomList.map(r => (
        <tr key={r.id}><td>{r.name}</td> <td><Link to={`/rooms-info/${r.id}`}>Go</Link></td></tr>
      ))}
    </table>
  )
}