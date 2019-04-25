import React, { useState } from "react";
import RoomsService from './../services/RoomsService';

function RoomBox(props) {
  const isBusy = props.room.isBusy;
  const room = props.room;

  const squareStyle = {
    height: "140px",
    width: "140px",
    backgroundColor: "#ccffc4",
    display: 'inline-block',
    margin: 5
  }

  const squareBusyStyle = {
    height: "140px",
    width: "140px",
    backgroundColor: "#f48c89",
    display: 'inline-block',
    margin: 5
  }

  if (isBusy) {
    return <div style={squareBusyStyle}>
      <div>{room.id}</div>
      <div>
        {room.name}
      </div>
      <div>
        {room.user}
      </div>
    </div>
  } else {
    return <div style={squareStyle}>
      <div>{room.id}</div>
      <div>
        {room.name}
      </div>
      <div>Free</div>
    </div>
  }
}


export default function Home() {


  const dateToday = new Date().toDateString();

  const [roomList, setRoomList] = useState(RoomsService.getRoomsUsers());

  return (
    <div>
      <div>
        {dateToday}
      </div>
      {roomList.map(r => <RoomBox room={r} key={r.id} />)}
    </div>
  )
}
