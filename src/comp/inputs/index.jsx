import React from "react";
import { Breakpoint } from "../../constants";

export function TextInput({ label, value, onChange }) {
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <Breakpoint name="phone">
        <div>{label}</div>
        <input
          onChange={onChange}
          placeholder={label}
          value={value}
          style={{ width: "100%" }}
        />
      </Breakpoint>

      <Breakpoint name="desktop">
        <div style={{ display: "inline-block", paddingRight: "1rem" }}>
          {label}
        </div>
        <input onChange={onChange} placeholder={label} value={value} />
      </Breakpoint>
    </div>
  );
}

export function TextArea({ label, value, onChange }) {
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <textarea
        onChange={onChange}
        placeholder={label}
        value={value}
        style={{ width: "100%" }}
        rows="6"
      />
    </div>
  );
}

export function FormContainer({ children }) {
  return <div style={{ width: "100%" }}>{children}</div>;
}

export function ImgInput({ onChange, img }) {
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <div>Img</div>
      <input type="file" onChange={onChange} style={{ width: "100%" }} />
      <img src={img} style={{ width: "100%" }} />
    </div>
  );
}
