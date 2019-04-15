import React, { useState } from "react";
import RoomsService from './../../services/RoomsService';
import { Link } from 'react-router-dom';

export default function RoomView(props) {

  const [roomInfo, setRoomInfo] = useState(RoomsService.getRoomById(props.match.params.id))

  console.log(props);

  const { match: { params } } = props;

  return (
    <div>
      <h1>{roomInfo.name}<Link to={`/rooms-edit/${roomInfo.id}`}>edit</Link></h1>
      <img src={roomInfo.img} style={{ width: '500px' }} />
      <p>
        {roomInfo.description}
      </p>
    </div>
  )

}