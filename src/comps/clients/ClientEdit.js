import React, { useState } from "react";

export default function ClientEdit() {

  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input onChange={(e) => setIdentifier(e.target.value)} placeholder="Identifier" />
    </div>
  )

}