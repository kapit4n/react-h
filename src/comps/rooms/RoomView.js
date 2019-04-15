import React, { useState } from "react";
import RoomsService  from './../../services/RoomsService';

export default function RoomView(props) {

  const [roomInfo, setRoomInfo] = useState(RoomsService.getRoomById(props.match.params.id))

  console.log(props);

  const { match: { params } } = props;
  
  return (
    <div>
    Example
    <h1>{roomInfo.name}</h1>
    <img src={roomInfo.img} style={{width: '400px'}}/>
    <p>
    {roomInfo.description}
    </p>
    </div>
  )

}