import React, { useState } from "react";
import {Link} from 'react-router-dom';
import RoomsService  from './../../services/RoomsService';

export default function RoomList() {

  const [roomList, setRoomList] = useState(RoomsService.getRooms());
  return (
    <ul>
      {roomList.map(r => (
        <li key={r.id}>{r.name} <Link to={`./rooms-info/${r.id}`}>Go</Link></li>
      ))}
    </ul>
  )
}