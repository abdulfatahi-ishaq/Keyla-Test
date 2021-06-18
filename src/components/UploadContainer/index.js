import React from "react";
// import Axios from "axios";

import {
  UploadBody,
  UploadContainer,
  UploadContentHeading,
  UploadWrapper,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { ButtonWrapper } from "../Button";
import UploadVideoForm from "./uploadform";

const UploadPage = () => {
  const [fileSelected, setFileSelected] = React.useState(true);

//   const uploadVideo = (files) => {
//     const formData = new FormData();
//     formData.append('video')
//   };
  return (
    <>
      <UploadWrapper>
        <UploadContainer>
          <UploadContentHeading>
            <div>
              <span>Upload Video</span>
            </div>
            <div>
              <FaTimes />
            </div>
          </UploadContentHeading>
          {!fileSelected ? (
            <UploadBody>
              <span>Upload A Video From Your Local Device</span>
              <input
                type="file"
                id="uploadInput"
                accept="video/mp4"
                style={{ display: "none" }}
                // onChange={(e) => uploadVideo(e.target.files)}
              />
              <ButtonWrapper onClick={()=>setFileSelected(true)}>SELECT FILE</ButtonWrapper>
            </UploadBody>
          ) : (
            <UploadVideoForm />
          )}
        </UploadContainer>
      </UploadWrapper>
    </>
  );
};

export default UploadPage;
