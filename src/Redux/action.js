import {
  DATAERROR,
  DATASUCCESS,
  DATAREQUEST,
  FILTERDATAERROR,
  FILTERDATASUCCESS,
  FILTERDATAREQUEST,
} from "./actionTypes";
import axios from "axios";

export const getRequest = () => {
  return {
    type: DATAREQUEST,
  };
};

export const getSuccess = (payload) => {
  return {
    type: DATASUCCESS,
    payload,
  };
};

export const getError = () => {
  return {
    type: DATAERROR,
  };
};

export const filterGetRequest = () => {
  return {
    type: FILTERDATAREQUEST,
  };
};

export const filterGetSuccess = (payload) => {
  return {
    type: FILTERDATASUCCESS,
    payload,
  };
};

export const filterGetError = () => {
  return {
    type: FILTERDATAERROR,
  };
};

const getData = (payload) => (dispatch) => {
  let getReq = getRequest();
  dispatch(getReq);
  // console.log("onn2")
  axios
    .get("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
    .then((res) => {
      const success = getSuccess(res.data);
      dispatch(success);
    })
    .catch((err) => {
      const error = getError();
      dispatch(error);
    });
};

const getFilterData = (payload) => (dispatch) => {
  let getReq = filterGetRequest();
  dispatch(getReq);
  // console.log("onn2")
  axios
    .get(
      `https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${payload}T00:00:00.000`
    )
    .then((res) => {
      const success = filterGetSuccess(res.data);
      dispatch(success);
    })
    .catch((err) => {
      const error = filterGetError();
      dispatch(error);
    });
};

export { getData, getFilterData };
