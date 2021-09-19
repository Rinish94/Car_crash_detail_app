import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Paginate.css";
const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const [page, setPage] = useState(1);
  let pageing = Math.ceil(totalPost / postPerPage);

  const handlePage = (value) => {
    setPage(page + value);
    paginate(page);
  };
  return (
    <div className="pagnateCont">
      <Button onClick={() => handlePage(-1)} disabled={page === 1}>
        Prev
      </Button>
      <h6>{page}</h6>
      <Button onClick={() => handlePage(+1)} disabled={page === pageing}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
