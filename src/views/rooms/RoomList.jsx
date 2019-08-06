import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomsService from "../../services/RoomsService";
import { Table, Button, ListGroup } from "react-bootstrap";

import Title from "../../comp/title";
import { AddAction, ActionsContainer } from "../../comp/actions";
import { Breakpoint } from "../../constants";

export default function RoomList() {
  const [roomList, setRoomList] = useState(RoomsService.getRooms());
  return (
    <>
      <Title label="Room List" />
      <ActionsContainer>
        <AddAction
          label="Add Room"
          onAction={() => console.log("Open add room page")}
        />
      </ActionsContainer>
      <Breakpoint name="desktop">
        <Table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {roomList.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>
                  <Link className="btn btn-primary" to={`/rooms-info/${r.id}`}>
                    Open
                  </Link>
                  <Button onClick={() => console.log("Reservation: " + r.name)}>
                    Reserve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Breakpoint>

      <Breakpoint name="phone">
        <ListGroup style={{ width: "100%" }}>
          {roomList.map(r => (
            <ListGroup.Item
              key={r.id}
              className="d-flex justify-content-between"
            >
              {r.name}{" "}
              <div className="d-flex justify-content-between">
                <Link className="btn btn-primary" to={`/rooms-info/${r.id}`}>
                  Open
                </Link>
                <Button onClick={() => console.log("Reservation: " + r.name)}>
                  Reserve
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Breakpoint>
    </>
  );
}
