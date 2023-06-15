import React from "react";
import "./review.css";
// import { Link } from "react-router-dom";
function Review({ children, title }) {
  return (
    <div className="mainback">
      <div>
        <div>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <span className="email">pandedhruv98@gmail.com</span>

                <hr />
              </>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
