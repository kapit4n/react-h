import React, { useState } from "react";
import { Link } from 'react-router-dom';
import BookingsService from '../../services/BookingsService';
import { Table } from 'react-bootstrap';

export default function BookingList() {

  const [bookingList, setBookingList] = useState(BookingsService.getBookings());
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>User</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Payed</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {bookingList.map(r => (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.user.name}</td>
            <td>{r.startDate}</td>
            <td>{r.duration}</td>
            <td>{r.payed}</td>
            <td>{r.totalToPay}</td>
            <td>
              <Link className="btn btn-primary" to={`/bookings-info/${r.id}`}>Open
            </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}