import React, { useState } from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const [page, setPage] = useState(1);
  let pageing = Math.ceil(totalPost / postPerPage);

  const handlePage = (value) => {
    setPage(page + value);
    paginate(page);
  };
  return (
    <div>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>
        -
      </button>
      <p>{page}</p>
      <button onClick={() => handlePage(+1)} disabled={page === pageing}>
        +
      </button>
    </div>
  );
};

export default Pagination;
