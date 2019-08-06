import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "react-bootstrap/Button";

import "./styles.css";
import { styles } from "./styles";

import { Breakpoint } from "../../constants";

export function AddAction({ label, onAction }) {
  return (
    <>
      <Breakpoint name="phone">
        <Button variant="primary" onClick={onAction}>
          <FontAwesomeIcon icon="plus" />
        </Button>
      </Breakpoint>
      <Breakpoint name="desktop">
        <Button variant="primary" onClick={onAction}>
          {label}
        </Button>
      </Breakpoint>
    </>
  );
}

export function MainActionsContainer({ children }) {
  return <div style={styles.mainActionsContainer({})}>{children}</div>;
}

export function ActionsContainer({ children }) {
  return <div style={styles.actionsContainer({})}>{children}</div>;
}
