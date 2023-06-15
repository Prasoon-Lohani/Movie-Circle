import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
// import { Link } from "react-router-dom";

import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({ id, poster, title, date, vote_average }) => {
  return (
    <ContentModal id={id} poster={poster}>
      <div className="main">
        <Badge
          badgeContent={vote_average ? `${vote_average}` : "N/A"}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          classname="poster"
          src={poster ? `${img_300}/${poster} ` : unavailable}
          alt={title}
        />
        <b className="title">{title ? `${title}` : "Title"}</b>
        <span className="subtitle">
          Movie <span>{date ? `${date}` : "Date"}</span>
        </span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
