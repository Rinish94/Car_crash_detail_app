import {
  DATAERROR,
  DATASUCCESS,
  DATAREQUEST,
  FILTERDATAERROR,
  FILTERDATASUCCESS,
  FILTERDATAREQUEST,
} from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const showData = (state = initState, action) => {
  // const { type, payload } = action;

  switch (action.type) {
    case DATAREQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DATASUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case DATAERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case FILTERDATAREQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case FILTERDATASUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case FILTERDATAERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
