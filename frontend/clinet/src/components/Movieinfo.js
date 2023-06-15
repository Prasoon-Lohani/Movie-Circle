import React, { useEffect, useState } from "react";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config/config";

const Movieinfo = (id, name) => {
  // const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  // // const [video, setVideo] = useState();

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {content && (
        <div>
          <div className="ContentModal">
            <img
              src={
                content.poster_path
                  ? `${img_500}/${content.poster_path}`
                  : unavailable
              }
              alt={content.name || content.title}
              className="ContentModal__portrait"
            />
            <img
              src={
                content.backdrop_path
                  ? `${img_500}/${content.backdrop_path}`
                  : unavailableLandscape
              }
              alt={content.name || content.title}
              className="ContentModal__landscape"
            />
            <div className="ContentModal__about">
              <span className="ContentModal__title">
                {content.name || content.title} (
                {(
                  content.first_air_date ||
                  content.release_date ||
                  "-----"
                ).substring(0, 4)}
                )
              </span>
              {content.tagline && <i className="tagline">{content.tagline}</i>}

              <span className="ContentModal__description">
                {content.overview}
              </span>

              <div></div>

              <div>Watch the Trailer</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movieinfo;
