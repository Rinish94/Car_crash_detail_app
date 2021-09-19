import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import styles from "./Cards.module.css";
const Cards = ({ data }) => {
  const history = useHistory();
  const handlePage = () => {
    history.push(`/details/${data.collision_id}`);
  };
  //   const info = data.filter((el) => el.collision_id === id);
  let dates = Date.parse(data.crash_date);
  //   console.log(new Date(dates));
  let n = new Date(dates);
  let finalDate = n.toLocaleString().split(",")[0];
  console.log(finalDate);

  return (
    <>
      <tr>
        <td>{data.collision_id}</td>
        <td>{data.vehicle_type_code1}</td>
        <td>{data.vehicle_type_code2}</td>
        <td>{finalDate}</td>
        <td>{data.crash_time}</td>
        <td>
          {" "}
          <Button onClick={handlePage}>Click for info</Button>
        </td>
      </tr>
    </>
  );
};

export default Cards;
