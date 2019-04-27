import React, { useState } from "react";
import BookingsService from '../../services/BookingsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BookingView(props) {
  const [bookingInfo, setBookingInfo] = useState(BookingsService.getBookingById(props.match.params.id))

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{bookingInfo.room.name}</Card.Title>
        <Card.Text>
          {bookingInfo.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Date: {bookingInfo.startDate}</ListGroupItem>
        <ListGroupItem>Duration: {bookingInfo.duration}</ListGroupItem>
        <ListGroupItem>Payed: {bookingInfo.payed}</ListGroupItem>
        <ListGroupItem>TotalToPay: {bookingInfo.totalToPay}</ListGroupItem>
        <ListGroupItem>
          <div>
            User Info:
            Name: {bookingInfo.user.name},
            address: {bookingInfo.user.address}
            <img style={{width: '80px', display: 'block'}} src={bookingInfo.user.img}></img>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div>
            Room Info:
            Name: {bookingInfo.room.name},
            Capacity: {bookingInfo.room.capacity},
            Features: {bookingInfo.room.features},
            <img style={{width: '80px', display: 'block'}} src={bookingInfo.room.img}></img>
          </div>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ButtonToolbar>
          <Link className="btn btn-primary" to={`/bookings-edit/${bookingInfo.id}`}>Edit</Link> <br />
        </ButtonToolbar>
      </Card.Body>
    </Card>
  )

}