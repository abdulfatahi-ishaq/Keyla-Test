import React from "react";
import { categories} from "../../store/data";
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
import useFetchvideos from "../../Functions/apiFunctions";
import SkeletonCard from "../Skeleton/home";
const Main = () => {
  const { videos, loading,error} = useFetchvideos();

  // React.useEffect(() => {
  //   setMovies(videos);
  // }, [videos]);
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
          {loading && <SkeletonCard/>}
          {error && <SkeletonCard/>}
          {videos === [] ? <SkeletonCard/> 
          : videos.map((item) => {
            return (
              <VideosCard key={item.publicId}>
                <Thumbnail preload="metadata" type="video/mp4" controls>
                  <source src={item.videoUrl + "#t=0.1"} />
                </Thumbnail>
                <VideoTitle>
                  <p>{item.title}</p>
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
