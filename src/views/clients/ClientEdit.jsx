import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import ClientsService from '../../services/ClientsService';

export default function ClientEdit(props) {

  const [clientInfo, setClientInfo] = useState(ClientsService.getClientById(props.match.params.id))

  return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control value={clientInfo.name} onChange={(e) => setClientInfo(Object.assign({}, clientInfo, { name: e.target.value }))} type="text" placeholder="Name" />
        </Form.Group>
        
        <Form.Group controlId="identifier">
          <Form.Label>Identifier</Form.Label>
          <Form.Control value={clientInfo.identifier} onChange={(e) => setClientInfo(Object.assign({}, clientInfo, { identifier: e.target.value }))} type="text" placeholder="Indentifier" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
  )
}