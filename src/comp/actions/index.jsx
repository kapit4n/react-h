import React from 'react';
import Button from 'react-bootstrap/Button';

import MediaQuery from 'react-responsive';

import './styles.css';
import {styles} from './styles';

const breakpoints = {
    desktop: '(min-width: 768px)',
    phone: '(max-width: 767px)',
   };


   export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || breakpoints.desktop;
   return (
    <MediaQuery {...props } query={breakpoint}>
    {props.children}
    </MediaQuery>
    );
   }

export function AddAction({label, onAction}) {
    return (
        <>
         <Breakpoint name="phone">
            <Button variant="primary" onClick={onAction}>{'+'}</Button>
        </Breakpoint>
         <Breakpoint name="desktop">
            <Button variant="primary" onClick={onAction}>{label}</Button>
        </Breakpoint>
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