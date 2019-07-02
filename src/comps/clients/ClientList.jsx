import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ClientsService from '../../services/ClientsService';
import { Table, Card, Accordion } from 'react-bootstrap';
import styles from './Clients.css';

export default function ClientList() {

  const [clientList, setClientList] = useState(ClientsService.getClients());
  return (
    <>
      <Table striped bordered hover className="d-none d-sm-block">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clientList.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>
                <Link className="btn btn-primary" to={`/clients-info/${r.id}`}>Open </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Accordion defaultActiveKey="0" className=".d-block .d-sm-none  d-sm-none d-md-block">
        {clientList.map(r => (
          <Card key={r.id}>
            <Accordion.Toggle as={Card.Header} eventKey={r.id}>
              {r.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={r.id}>
              <Card.Body>
                <Card.Img src={r.img} />
                <div className="client-info">
                  Address: Av 18 Corona <br />
                  CellPhone: 74678678 <br />
                  Profession: Software developer <br />
                </div>
                <div className="reservation-info">
                  Room: Room Doble <br />
                  Start Date: Jun 30, 2019 <br />
                  End Date: July 3, 2019 <br />
                  Toral Price: $1000
              </div>
                <Link className="btn btn-primary" to={`/clients-info/${r.id}`}>Open </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  )
}