import React, { useState } from "react";
import ClientsService from '../../services/ClientsService';
import { Card, ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Clients.css';

export default function ClientView(props) {
  const [clientInfo, setClientInfo] = useState(ClientsService.getClientById(props.match.params.id))

  return (
    <Card className="card-view">
      <div className="left-view">
        <Card.Img variant="top" src={clientInfo.img} />
      </div>
      <div className="right-view">
        <Card.Body>
          <Card.Title>{clientInfo.name}</Card.Title>
          <Card.Text>
            <div className="client-info">
              Address: Av 18 Corona <br />
              CellPhone: 74678678 <br />
              Profession: Software developer <br />
            </div>
            <div className="client-reservations">
              <div className="reservation-info">
                Room: Room Doble <br />
                Start Date: Jun 30, 2019 <br />
                End Date: July 3, 2019 <br />
                Toral Price: $1000
              </div>

              <div className="reservation-info">
                Room: Room Doble <br />
                Start Date: Jun 30, 2019 <br />
                End Date: July 3, 2019 <br />
                Toral Price: $1000
              </div>
              <div className="reservation-info">
                Room: Room Doble <br />
                Start Date: Jun 30, 2019 <br />
                End Date: July 3, 2019 <br />
                Toral Price: $1000
              </div>
              <div className="reservation-info">
                Room: Room Doble <br />
                Start Date: Jun 30, 2019 <br />
                End Date: July 3, 2019 <br />
                Toral Price: $1000
              </div>

            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonToolbar>
            <Link className="btn btn-primary" to={`/clients-edit/${clientInfo.id}`}>Edit</Link> <br />
            <Button to={`/clients-edit/${clientInfo.id}`} onClick={() => console.log("Make the reservation")} variant="outline-primary">Reserve</Button>
          </ButtonToolbar>
        </Card.Footer>
      </div>
    </Card>
  )

}