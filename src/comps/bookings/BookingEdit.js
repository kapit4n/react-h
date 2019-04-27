import React, { useState } from "react";

export default function BookingEdit(props) {

  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [totalToPay, setTotalToPay] = useState("");
  const [payed, setPayed] = useState("");

  const updateBookingRequest = () => {
    console.log(user);
  }

  return (
    <div>
      <div>
        <label>Select User</label>
        <input onChange={(e) => setUser(e.target.value)} placeholder="User" />
        <button>Search User</button>
      </div>
      <div>
        <label>Select Room</label>
        <input onChange={(e) => setRoom(e.target.value)} placeholder="Room" />
        <button>Search Room</button>
      </div>
      <div>
        <label>Date</label>
        <input onChange={(e) => setDate(e.target.value)} placeholder="Date" />
        <button>Select Room</button>
      </div>
      <div>
        <label>Duration</label>
        <input onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
      </div>
      <div>
        <label>Payed</label>
        <input onChange={(e) => setTotalToPay(e.target.value)} placeholder="TotalToPay" />
      </div>
      <div>
        <label>Total</label>
        <input onChange={(e) => setPayed(e.target.value)} placeholder="Payed" />
      </div>
      <div>
        <button onClick={updateBookingRequest}>
          Save
        </button>
      </div>
    </div>
  )

}