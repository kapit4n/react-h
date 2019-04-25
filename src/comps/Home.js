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


function LevelBox(props) {
  const level = props.level;

    return <div>
      <div>
        {level.name}
      </div>
      <div>
        {level.rooms.map(r => <RoomBox room={r} key={r.id} />)}
      </div>
    </div>
}


export default function Home() {

  const dateToday = new Date().toDateString();

  const [levelList, setlevelList] = useState(RoomsService.getRoomsUsers());

  return (
    <div>
      <div>
        {dateToday}
        <div style={{backgroundColor: '#ccffc4', width: '50px'}}>
          free
        </div>
        <div style={{backgroundColor: '#f48c89', width: '50px'}}>
          busy
        </div>
      </div>
      {levelList.map(l => <LevelBox level={l} key={l.id} />)}
    </div>
  )
}
