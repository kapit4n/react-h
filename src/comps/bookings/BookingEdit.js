import React, { useState } from "react";
import BookingsService from './../../services/BookingsService';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';

export default function BookingEdit(props) {

  const [bookingInfo, setBookingInfo] = useState(BookingsService.getBookingById(props.match.params.id))

  const updateBookingRequest = () => {
    console.log(bookingInfo);
  }

  return (
    <Form>
       <Form.Group controlId="user">
        <Form.Label>User</Form.Label>
        <Form.Control value={bookingInfo.user.name} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { user: { id: bookingInfo.user.id, name: e.target.value } }))}  type="text" placeholder="Name" />
      </Form.Group>
      
       <Form.Group controlId="room">
        <Form.Label>Room </Form.Label>
        <Form.Control value={bookingInfo.room.name} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { room: { id: bookingInfo.room.id, name: e.target.value } }))} type="text" placeholder="Room" />
      </Form.Group>
      
       <Form.Group controlId="date">
        <Form.Label>Date </Form.Label>
        <Form.Control value={bookingInfo.startDate} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { startDate: e.target.value }))} type="date" placeholder="Date" />
      </Form.Group>
      
       <Form.Group controlId="duration">
        <Form.Label>Duration </Form.Label>
        <Form.Control  value={bookingInfo.duration} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { duration: e.target.value }))} type="number" placeholder="Duration" />
      </Form.Group>
      
       <Form.Group controlId="totalToPay">
        <Form.Label>TotalToPay </Form.Label>
        <Form.Control value={bookingInfo.totalToPay} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { totalToPay: e.target.value }))} type="number" placeholder="TotalToPay" />
      </Form.Group>
      
      
       <Form.Group controlId="payed">
        <Form.Label>Payed </Form.Label>
        <Form.Control value={bookingInfo.payed} onChange={(e) => setBookingInfo(Object.assign({}, bookingInfo, { payed: e.target.value }))} type="number" placeholder="Payed" />
      </Form.Group>

      <ButtonToolbar>
        <Button onClick={updateBookingRequest}>
          Save
        </Button>
      </ButtonToolbar>
    </Form>
  )

}