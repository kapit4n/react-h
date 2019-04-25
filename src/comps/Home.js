import React, { useState } from "react";
import RoomsService from './../services/RoomsService';

export default function Home() {

  const squareStyle = {
      height: "100px",
      width: "100px",
      'background-color': "#555",
      display: 'inline-block',
      margin: 5
  }

  const [roomList, setRoomList] = useState(RoomsService.getRooms());

  return (
    <div>
      {roomList.map(r => <div style={squareStyle} key={r.id}>
      <span>{r.id}</span> <br />
      {r.name}
      </div>)}
    </div>
  )
}
