import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
const DetailsPage = () => {
  const { id } = useParams();
  // console.log(id)
  const data = useSelector((state) => state.showData.data);
  const info = data.filter((el) => el.collision_id === id);
  let dates = Date.parse(info[0].crash_date);
  //   console.log(new Date(dates));
  let n = new Date(dates);
  let finalDate = n.toLocaleString().split(",")[0];
  console.log(finalDate);

  return (
    <div>
      <p>{finalDate}</p>
      <p>{info[0].crash_time}</p>
      <p>{info[0].on_street_name}</p>
      <p>{info[0].number_of_persons_injured}</p>
      <p>{info[0].number_of_persons_killed}</p>
    </div>
  );
};

export default DetailsPage;
