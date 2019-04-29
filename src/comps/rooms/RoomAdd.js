import React, { useState } from "react";

export default function RoomAdd() {

  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.dmarge.com/2014/04/pinterest-ideas-bedrooms-rhpinterestcouk-best-Blue-Bedroom-Bachelor-bedroom-images-on-pinterest-ideas-bedrooms-and-rhpinterestcouk-bachelorus-pad-for-young-energetic-men-1100x880.jpg");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div>
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      </div>
      <div>
        <label>Img</label>
        <input onChange={(e) => setImg(e.target.value)} placeholder="http://" />
        <img src={img} style={{ width: 450 }} />
      </div>
      <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" cols="46" rows="6" />
    </div>
  )

}