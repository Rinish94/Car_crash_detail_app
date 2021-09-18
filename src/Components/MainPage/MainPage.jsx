import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, getFilterData } from "../../Redux/action";
import Cards from "../Cards/Cards";
import Pagination from "./Pagination";
import MaterialUIPickers from "../Calendar/Calendar";
import { Button } from "@mui/material";
import "../Cards/Cards.css";
const MainPage = () => {
  const [value, setValue] = React.useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const data = useSelector((state) => state.showData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    let n = value.toLocaleString().split(",")[0];
    setValue(n);
    dispatch(getData());
  }, []);
  const indexOfLastPost = currentPage * postPerPage; //get the index of last posts
  const indexOfFirstpost = indexOfLastPost - postPerPage; //get indeof first post
  const currentPosts = data.slice(indexOfFirstpost, indexOfLastPost); /// get current post//
  //   console.log(data);
  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filterData = () => {
    let n = value.trim().split("/");
    let day = n[1];
    let year = n[2];
    let month;
    if (n[0] > 9) {
      month = n[0];
    } else {
      month = `0${n[0]}`;
    }
    if (n[1] > 9) {
      day = n[1];
    } else {
      day = `0${n[1]}`;
    }
    // console.log(`${year}-${month}-${day}`);
    let finaldates = `${year}-${month}-${day}`;
    dispatch(getFilterData(finaldates));
  };
  const resetData = () => {
    dispatch(getData());
    let n = value.toLocaleString().split(",")[0];
    setValue(n);
  };
  console.log(value);

  return (
    <div>
      <MaterialUIPickers value={value} setValue={setValue} />
      <Button onClick={filterData}>Search</Button>
      <Button onClick={resetData}>Reset</Button>
      <table>
        <tr>
          <th>Id</th>
          <th>Vehicle Type 1</th>
          <th>Vehicle Type 2</th>
          <th>Crash Date</th>
          <th>Crash Time</th>
          <th>Actions</th>
        </tr>
        {currentPosts.map((el) => (
          <Cards key={el.collision_id} data={el} />
        ))}
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPost={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPage;
