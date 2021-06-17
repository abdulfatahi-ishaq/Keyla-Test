import styled from "styled-components";

export const Thumbnail = styled.video`
  width: 100%;
  height: 80%;
  object-fit: stretch;
`;

export const VideoTitle = styled.div`
  width: "max-content";
  height: 20%;
  padding: 0 10px;
  color:#294c56;
  ${'' /* border-bottom:1px solid silver; */}
  p {
    text-align: left;
    font-weight: bold;
    font-size: 18px;
  }
`;

