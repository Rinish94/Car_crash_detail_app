import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button, Typography } from "@mui/material";
import styles from "./Detailspage.module.css";
import { useHistory } from "react-router-dom";
const DetailsPage = () => {
  const history = useHistory();
  const { id } = useParams();
  // console.log(id)
  const data = useSelector((state) => state.showData.data);
  const info = data.filter((el) => el.collision_id === id);
  let dates = Date.parse(info[0]?.crash_date);
  //   console.log(new Date(dates));
  let n = new Date(dates);
  let finalDate = n.toLocaleString().split(",")[0];
  // console.log(finalDate);

  return (
    <div className={styles.person}>
      <Typography>ACCIDENT DETAILS</Typography>
      <hr />
      {/* button to go back to previous page */}
      <button className={styles.buttons} onClick={() => history.push("/")}>
        Go Back
      </button>
      <div className={styles.card}>
        <table>
          <tr>
            <td>collision Id:</td>
            <td>{info[0]?.collision_id}</td>
          </tr>
          <tr>
            <td>Crash Date:</td>
            <td>{finalDate}</td>
          </tr>
          <tr>
            <td>Crash Time:</td>
            <td>{info[0]?.crash_time}</td>
          </tr>
          <tr>
            <td>Collison Place:</td>
            <td>{info[0]?.on_street_name}</td>
          </tr>
          <tr>
            <td>First Vehicle type:</td>
            <td>{info[0]?.vehicle_type_code1}</td>
          </tr>
          <tr>
            <td>Second Vehicle type:</td>
            <td>{info[0]?.vehicle_type_code2}</td>
          </tr>
          <tr>
            <td>Person Injured Status:</td>
            <td>{info[0]?.number_of_persons_injured}</td>
          </tr>
          <tr>
            <td>Person Casuality Status:</td>
            <td>{info[0]?.number_of_persons_killed}</td>
          </tr>
          <tr>
            <td>Pedestrians Injured Status:</td>
            <td>{info[0]?.number_of_pedestrians_injured}</td>
          </tr>
          <tr>
            <td>Pedestrians Casuality Status:</td>
            <td>{info[0]?.number_of_pedestrians_killed}</td>
          </tr>
          <tr>
            <td>Cyclist Injured Status:</td>
            <td>{info[0]?.number_of_cyclist_injured}</td>
          </tr>
          <tr>
            <td>Cyclist Casuality Status:</td>
            <td>{info[0]?.number_of_cyclist_killed}</td>
          </tr>
          <tr>
            <td>Motorist Injured Status:</td>
            <td>{info[0]?.number_of_motorist_injured}</td>
          </tr>
          <tr>
            <td>Motorist Casuality Status:</td>
            <td>{info[0]?.number_of_motorist_killed}</td>
          </tr>
          <tr>
            <td>First Vehicle Collison Reason: </td>
            <td>{info[0]?.contributing_factor_vehicle_1}</td>
          </tr>
          <tr>
            <td>Second Vehicle Collison Reason:</td>
            <td>{info[0]?.contributing_factor_vehicle_2}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
