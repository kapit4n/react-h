import React from "react";
import { Breakpoint } from "../../constants";

export function TextInput({ label, value, onChange, isReadOnly }) {
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <Breakpoint name="phone">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textTransform: "uppercase" }}>{label}</div>
          {isReadOnly ? (
            <div style={{ borderBottom: "1px solid" }}>{value}</div>
          ) : (
            <input
              onChange={onChange}
              placeholder={label}
              value={value}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </Breakpoint>

      <Breakpoint name="desktop">
        <div style={{ display: "flex", flexDirection: "space-between" }}>
          <div style={{ textTransform: "uppercase", marginRight: '1rem' }}>{label}{": "}</div>

          {isReadOnly ? (
            <div style={{ borderBottom: "1px solid" }}>{value}</div>
          ) : (
            <input onChange={onChange} placeholder={label} value={value} />
          )}
        </div>
      </Breakpoint>
    </div>
  );
}

export function TextArea({ label, value, onChange }) {
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <Breakpoint name="phone">
        <textarea
          onChange={onChange}
          placeholder={label}
          value={value}
          style={{ width: "100%" }}
          rows="6"
        />
      </Breakpoint>
      <Breakpoint name="desktop">
        <textarea
          onChange={onChange}
          placeholder={label}
          value={value}
          style={{ maxWidth: "500px", width: "100%" }}
          rows="6"
        />
      </Breakpoint>
    </div>
  );
}

export function FormContainer({ children }) {
  return <div style={{ width: "100%" }}>{children}</div>;
}

export function ImgInput({ onChange, img }) {
  return (
    <>
      <Breakpoint name="phone">
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <div>Img</div>
          <input type="file" onChange={onChange} style={{ width: "100%" }} />
          <img src={img} style={{ width: "100%" }} />
        </div>
      </Breakpoint>

      <Breakpoint name="desktop">
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <div>Img</div>
          <input type="file" onChange={onChange} style={{ width: "100%" }} />
          <img src={img} style={{ maxWidth: "500px" }} />
        </div>
      </Breakpoint>
    </>
  );
}
