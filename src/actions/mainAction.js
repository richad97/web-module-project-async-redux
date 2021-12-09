import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const TOP_TEN = "TOP_TEN";

export const getData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://api.quarantine.country/api/v1/summary/latest")
      .then((resp) => {
        const data = resp.data.data;

        dispatch(fetchSuccess(data));
        dispatch(topTen());
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (err) => {
  return { type: FETCH_FAIL, payload: err };
};

export const topTen = () => {
  return { type: TOP_TEN };
};
