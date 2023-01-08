import React from "react";
import { Button, Frame } from "arwes";
import style from "./rocketstable.module.css";
export default function DeletePopUp(props) {
  const [message, setMessage] = React.useState("");
  const handleDeletePopup = async () => {
    try {
      setMessage("Deleting");
      await props.handleDelete();
      setMessage("Deleted");
      props.setDeletePopup(false);
    } catch (error) {
      console.log(error);
      setMessage("Error");
    }
  };
  return (
    <Frame className={style.deletePopup}>
      <h1>Delete Record</h1>
      <p>Are you sure you want to delete {props.name}? </p>
      <p>Note: This action is irreversible</p>
      <Button onClick={handleDeletePopup}>Delete</Button>
      <Button onClick={() => props.setDeletePopup(false)}>Cancel</Button>
      <p>{message}</p>
    </Frame>
  );
}
