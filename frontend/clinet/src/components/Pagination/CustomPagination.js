import { Pagination } from "@mui/material";
import React from "react";

const CustomPagination = ({ setPage, numofPages = 100 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        count={numofPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
