import {
  FETCH_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
  TOP_TEN,
} from "../actions/mainAction";

const initialState = {
  regions: [],
  summary: {},
  topTen: [],
  isFetching: false,
  error: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        //turns objs in data into array of objects
        regions: Object.keys(action.payload.regions).map(
          (key) => action.payload.regions[key]
        ),
        summary: action.payload.summary,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case TOP_TEN:
      return {
        ...state,
        topTen: state.regions
          .sort((a, b) => parseFloat(b.deaths) - parseFloat(a.deaths))
          .slice(0, 10),
      };

    default:
      return state;
  }
};

export default mainReducer;
