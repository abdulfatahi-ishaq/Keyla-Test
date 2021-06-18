import React from "react";
import { API } from "../../config";
import Axios from "axios";
import FileReader from "filereader";
import "./styles.css";

const UploadVideoForm = () => {
  const [videoFile, setVideoFile] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  
  const handleFile = (event) => {
    const content = event.target.result;
    console.log('file content',  content)
    // You can set content in state and show it in render.
  }
  
  const handleChangeFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    setVideoFile(fileData.readAsText(file));
  }

  const clickSubmit = (e) => {
    e.preventDefault();

    Axios({
      method: "post",
      url: `${API}movies/upload`,
      data: { title: title, description: description, video: videoFile },
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(videoFile);
  };

  return (
    <div className="UploadVideoContainer">
      <div className="titleContainer">
        <label>Title:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder="Title..."
          value={title}
        />
      </div>

      <div className="descriptionContainer">
        <label>Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          value={description}
          placeholder="Description..."
        />
      </div>
      <div className="bottomSection">
        <div className="thumbnailContainer">
          <input
            type="file"
            name="video"
            accept="video/mp4"
            onChange={(e)=>handleChangeFile(e.target.files[0])}
            id="uploadThumbnail"
            //   style={{ display: "none" }}
          />
          <div id="uploadThumbnail">
            <label htmlFor="uploadThumbnail"> - Select - </label>
          </div>
        </div>
        <div className="uploadButtonContainer">
          <button onClick={clickSubmit}> Upload Video</button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoForm;
