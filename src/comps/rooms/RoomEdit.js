import React, { useState } from "react";

export default function RoomEdit() {

  const [roomInfo, setRoomInfo] = useState("This is the room info")
  return (
    <div>
      {roomInfo}
    </div>
  )

}