import React from 'react'
import { UploadBody, UploadContainer, UploadContentHeading, UploadWrapper } from './styles'
import {FaTimes} from "react-icons/fa";
import { ButtonWrapper } from '../Button';
const UploadPage = () => {
    return (
        <>
          <UploadWrapper>
              <UploadContainer>
                  <UploadContentHeading>
                      <div>
                          <span>Upload Video</span>
                      </div>
                      <div>
                          <FaTimes/>
                      </div>
                  </UploadContentHeading>
                  <UploadBody>
                      <span>Upload A Video From Your Local Device</span>
                      <ButtonWrapper>SELECT FILE</ButtonWrapper>
                  </UploadBody>
              </UploadContainer>
          </UploadWrapper>  
        </>
    )
}

export default UploadPage
