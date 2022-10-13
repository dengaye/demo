import { USERS_ACTIONS } from "../constants";

const initState = {
  users: [],
  userId: 0,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case USERS_ACTIONS.UPDATE_USERS_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
