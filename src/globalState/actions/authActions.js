import { LOGIN, LOGOUT } from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../helpers/setAuthToken";
import { SET_CURRENT_ADMIN } from "./actionTypes";

export const logout = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false)
  dispatch(setCurrentAdmin({}));
  dispatch({ type: LOGOUT });
  history.push('/')
};

export const login = (adminData,history) => dispatch => {
  console.log(adminData);
  axios
    .post("http://localhost:5000/api/admins/login", adminData)

    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch({ type: LOGIN });
      dispatch(setCurrentAdmin(decoded));
      history.push('/admin/dashboard') 
console.log(adminData)
    }) 
	.catch(err =>
	console.log(err));
};
export const setCurrentAdmin = decoded => {
  return {
    type: SET_CURRENT_ADMIN,
    payload: decoded
  };
};
