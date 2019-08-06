import React from "react";
import MediaQuery from "react-responsive";

export const colors = {
  primary: { default: "#ff00ff", ligth: "#ffe6ff", dark: "#330026" },
  secondary: { defaut: "#8585ad", ligth: "#f0f0f5", dark: " #29293d" }
};

const breakpoints = {
  desktop: "(min-width: 768px)",
  phone: "(max-width: 767px)"
};

export function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}
