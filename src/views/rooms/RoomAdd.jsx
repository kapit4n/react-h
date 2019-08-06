import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  SaveAction,
  CancelAction,
  MainActionsContainer
} from "../../comp/actions";

import Title from "../../comp/title";

import {
  TextInput,
  FormContainer,
  TextArea,
  ImgInput
} from "../../comp/inputs";

function RoomAdd(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState(
    "https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
  );
  const [description, setDescription] = useState("");

  const onSave = () => {
    props.history.push("/rooms");
  };

  const onCancel = () => {
    props.history.push("/rooms");
  };

  const handleName = e => {
    setName(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  const handleImg = e => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Title label="Create Room" />
      <FormContainer>
        <TextInput label="Name" value={name} onChange={handleName} />
        <ImgInput onChange={handleImg} img={img} />
        <TextArea
          label="Description"
          value={description}
          onChange={handleDescription}
        />
      </FormContainer>
      <MainActionsContainer>
        <SaveAction onAction={onSave} />
        <CancelAction onAction={onCancel} />
      </MainActionsContainer>
    </div>
  );
}

export default withRouter(RoomAdd);
