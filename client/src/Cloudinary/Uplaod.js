import { Button } from "arwes";
import React, { useState } from "react";

export default function Upload(props) {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      props.setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      props.setImg(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      props.setErrMsg("something went wrong!");
    };
  };

  return (
    <div>
      <div className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="inputControl"
        />
        <Button onClick={handleSubmitFile}>Submit</Button>
      </div>
    </div>
  );
}
