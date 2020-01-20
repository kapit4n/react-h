import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  CancelAction,
  EditAction,
  MainActionsContainer,
  SaveAction
} from "../../comp/actions";

import Title from "../../comp/title";

import {
  TextInput,
  FormContainer,
  TextArea,
  ImgInput
} from "../../comp/inputs";

function RoomManager({ edition, roomId, history }) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');

  const [img, setImg] = useState(
    "https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
  );

  const [description, setDescription] = useState('');

  React.useEffect(() => {
    // load from api
    setName("Room 1");
    setImg("https://media-cdn.tripadvisor.com/media/photo-s/05/6f/52/8c/doubletree-by-hilton.jpg");
    setDescription("Description of the ");
  }, [roomId])


  const onSave = () => {
    history.push("/rooms");
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const onCancel = () => {
    history.push("/rooms");
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
    <div style={{ width: '100%' }}>
      <Title label="Room" />
      <FormContainer>
        <TextInput
          isReadOnly={!isEdit}
          label="Name"
          value={name}
          onChange={handleName}
          />
        <ImgInput isReadOnly={!isEdit} onChange={handleImg} img={img} />
        <TextArea
          label="Description"
          value={description}
          onChange={handleDescription}
        />
      </FormContainer>
      {isEdit ? (
        <MainActionsContainer>
          <SaveAction onAction={onSave} />
          <CancelAction onAction={onCancel} />
        </MainActionsContainer>
      ) : (
          <MainActionsContainer>
            <EditAction onAction={onEdit} />
          </MainActionsContainer>
        )}
    </div>
  );
}

RoomManager.defaultProps = {
  info: {
    name: "",
    description: "",
    img: ""
  },
  edition: true
};

export default withRouter(RoomManager);
