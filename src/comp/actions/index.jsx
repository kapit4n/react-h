import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';
import {styles} from './styles';
export function AddAction({label, onAction}) {
    return (
        <>
        <Button className="d-sm-none d-md-block" variant="primary" onClick={onAction}>{label}</Button>
        <Button className="d-block d-md-none" variant="primary" onClick={onAction}>{'+'}</Button>
        </>
    )
}

export function ActionsContainer({children}) {
    return (
        <div style={styles.actionsContainer({})}>
            {children}
        </div>
    )
}