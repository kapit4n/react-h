import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ClientsService from '../../services/ClientsService';
import { Table, Button, ListGroup } from 'react-bootstrap';

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
                <Link className="btn btn-primary" to={`/clients-info/${r.id}`}>Open
            </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ListGroup className=".d-block .d-sm-none">
      {clientList.map(r => (
        <ListGroup.Item key={r.id}>{r.name}</ListGroup.Item>
      )) }
      </ListGroup>
    </>
  )
}