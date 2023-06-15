import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import notes from "../../Data/notes";

import axios from "axios";
import { img_500, unavailableLandscape } from "../../config/config";
import "./ContentModal.css";
import Carousel from "../Carousel/Carousel";
import Review from "../reviews";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [content, setContent] = useState();
  const handleClose = () => setOpen(false);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className="ContentModal">
                {/* <img
                  src={
                    content.poster_path
                      ? `${img_500} /${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                /> */}
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
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
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                  <div>
                    <Carousel id={id} />
                  </div>
                  <div className="b">
                    <span className="a">Review</span>
                  </div>
                </div>
                <div className="r">
                  <div>
                    <textarea
                      placeholder="Write your Review....."
                      className="comment"
                    ></textarea>
                    <div className="post">
                      <span className="a">Post</span>
                    </div>
                  </div>
                  <Review>
                    {notes.map((note) => (
                      <div className="mai">
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            username
                          </footer>
                        </blockquote>
                      </div>
                    ))}
                  </Review>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
