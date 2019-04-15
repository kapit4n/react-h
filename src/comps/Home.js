import React, { useState } from "react";

export default function Home() {

  const [homeInfo, setHomeInfo] = useState("This is the Home")
  return (
    <div>
      {homeInfo}
    </div>
  )

}