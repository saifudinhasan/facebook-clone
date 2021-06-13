import { SET_USER } from "./actions";


const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload, }
    default:
      return state;
  }
};
export default stateReducer