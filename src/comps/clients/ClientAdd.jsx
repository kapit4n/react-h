import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

export default function ClientAdd() {

  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");

  return (
    <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        </Form.Group>
        
        <Form.Group controlId="identifier">
          <Form.Label>Identifier</Form.Label>
          <Form.Control onChange={(e) => setIdentifier(e.target.value)} type="text" placeholder="Indentifier" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
  )

}