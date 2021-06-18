import React from "react";
import { categories } from "../../store/data";
import { FaTrash, FaEdit } from "react-icons/fa";
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
import useFetchvideos from "../../Functions/apiFunctions";
import SkeletonCard from "../Skeleton/home";
import Axios from "axios";
import { API } from "../../config";

const ManagePage = () => {
  const { videos, loading, error} = useFetchvideos();
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setMovies(videos);
  }, [videos]);

  const handleDelete = (id) => {
    Axios.delete(`${API}movies/${id}`)
      .then((res) => {
        setMovies(movies);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {loading && <SkeletonCard />}
          {error && <SkeletonCard />}
          { videos === [] ? <SkeletonCard /> : videos.map((item) => {
            return (
              <VideosCard key={item.publicId}>
                <Thumbnail preload="metadata" type="video/mp4" controls>
                  <source src={item.videoUrl + "#t=0.1"} />
                </Thumbnail>
                <VideoTitle>
                  <p>{item.title}</p>
                </VideoTitle>
                <ActionBtn>
                  <button style={{ color: "green" }}>
                    Update{" "}
                    <span>
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    style={{ color: "red" }}
                  >
                    Delete
                    <span>
                      <FaTrash />
                    </span>
                  </button>
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
