import React, { useState } from "react";
import BookingsService from '../../services/BookingsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Bookings.css';

export default function BookingView(props) {
  const [bookingInfo, setBookingInfo] = useState(BookingsService.getBookingById(props.match.params.id))

  return (
    <Card className="card-view">
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
            <img className="user-img" src={bookingInfo.user.img}></img>
            <div className="user-info">
              User Info:
              Name: {bookingInfo.user.name},
              address: {bookingInfo.user.address}
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div>
            <img className="room-img" src={bookingInfo.room.img}></img>
            <div className="room-info">
              Room Info:
              Name: {bookingInfo.room.name},
              Capacity: {bookingInfo.room.capacity},
              Features: {bookingInfo.room.features},

            </div>
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