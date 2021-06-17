import React from "react";
import { categories, movies } from "../../store/data";
import {FaClock, FaTrash,FaEdit} from 'react-icons/fa';
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

const Main = () => {
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
        {movies.map((item)=>{return(
          <VideosCard key={item.key}>
          <Thumbnail src={item.thumbnail} />
            <VideoTitle>
              <p>{item.text}</p>
            </VideoTitle>
            <ActionBtn>
              <button style={{color:"black"}}>Watch <span><FaClock/></span></button>
              <button style={{color:"green"}}>Update <span><FaEdit/></span></button>
              <button style={{color:"red"}}>Delete<span><FaTrash/></span></button>
            </ActionBtn>
          </VideosCard>
        )})}
        </MainWrapper>
      </MainContainer>
    </BodyWrapper>
  );
};

export default Main;
