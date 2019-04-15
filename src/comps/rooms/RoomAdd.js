import React, { useState } from "react";

export default function RoomAdd() {

  const [roomInfo, setRoomInfo] = useState("This is the room info")
  return (
    <div>
      {roomInfo}
    </div>
  )

}