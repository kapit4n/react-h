import React from 'react';
import Button from 'react-bootstrap/Button';

export function AddAction({label, onAction}) {
    return (
        <Button variant="primary" onClick={onAction}>{label}</Button>
    )
}