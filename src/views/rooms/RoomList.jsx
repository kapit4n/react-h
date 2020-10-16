import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, ListGroup } from "react-bootstrap";

import Title from "../../comp/title";
import {
  AddAction,
  ActionsContainer,
  MainActionsContainer
} from "../../comp/actions";
import { Breakpoint } from "../../constants";

function RoomList(props) {
  const onAddRoom = () => {
    props.history.push("/rooms-add");
  };
  return (
    <>
      <Title label="Room List" />
      <MainActionsContainer>
        <AddAction label="Add Room" onAction={onAddRoom} />
      </MainActionsContainer>
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
            {props.rooms && props.rooms.map(r => (
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
          {props.rooms && props.rooms.map(r => (
            <ListGroup.Item
              key={r.id}
              className="d-flex justify-content-between"
            >
              {r.name}{" "}
              <ActionsContainer>
                <Link className="btn btn-primary" to={`/rooms-info/${r.id}`}>
                  <FontAwesomeIcon icon="book-open" />
                </Link>
                <Button onClick={() => console.log("Reservation: " + r.name)}>
                  <FontAwesomeIcon icon="clipboard" />
                </Button>
              </ActionsContainer>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Breakpoint>
    </>
  );
}

export default RoomList;
