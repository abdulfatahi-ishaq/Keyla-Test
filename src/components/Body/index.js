import React from "react";
import { categories, movies } from "../../store/data";
import { Thumbnail, VideoTitle } from "./styles";
import {
  Carousel,
  ActiveCard,
  Cards,
  MainWrapper,
  MainContainer,
  VideosCard,
  BodyWrapper,
} from "../Manage/styles";

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
          {movies.map((item) => {
            return (
              <VideosCard key={item.key}>
                <Thumbnail preload="metadata" type="video/mp4" controls>
                  <source src={item.thumbnail + "#t=0.1"} />
                </Thumbnail>
                <VideoTitle>
                  <p>{item.text}</p>
                </VideoTitle>
              </VideosCard>
            );
          })}
        </MainWrapper>
      </MainContainer>
    </BodyWrapper>
  );
};

export default Main;
