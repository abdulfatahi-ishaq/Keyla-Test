import React from "react";
import { categories } from "../../store/data";
import {FaTrash,FaEdit} from 'react-icons/fa';
import {
  Carousel,
  ActiveCard,
  Cards,
  MainWrapper,
  MainContainer,
  VideosCard,
  BodyWrapper,
  Thumbnail,
  VideoTitle,
  ActionBtn,
} from "./styles";
import Skeleton from 'react-loading-skeleton';
import useFetchvideos from "../../Functions/apiFunctions";

const ManagePage = () => {
  const { videos, loading, error } = useFetchvideos();
  return (
    <BodyWrapper>
      <Carousel>
        <ActiveCard>All</ActiveCard>
        {categories.map((item) => {
          return <Cards key={item.key}>{item.text}</Cards>;
        })}
      </Carousel>
      <MainContainer>
        <MainWrapper>
        {loading && <Skeleton count={5} duration={3}/>}
          {error && <h1>Error! Try refreshing...</h1>}
          {videos.map((item) => {
            return (
              <VideosCard key={item._id}>
                <Thumbnail preload="metadata" type="video/mp4" controls>
                  <source src={item.videoUrl + "#t=0.1"} />
                </Thumbnail>
                <VideoTitle>
                  <p>{item.title}</p>
                </VideoTitle>
                <ActionBtn>
              <button style={{color:"green"}}>Update <span><FaEdit/></span></button>
              <button style={{color:"red"}}>Delete<span><FaTrash/></span></button>
            </ActionBtn>
              </VideosCard>
            );
          })}
        </MainWrapper>
      </MainContainer>
    </BodyWrapper>
  );
};

export default ManagePage;
