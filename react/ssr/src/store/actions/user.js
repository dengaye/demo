import { USERS_ACTIONS } from "../constants";

export const updateUsersByAction = () => async (dispatch) => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  dispatch({
    type: USERS_ACTIONS.UPDATE_USERS_USERS,
    payload: data?.data || [],
  });
};
