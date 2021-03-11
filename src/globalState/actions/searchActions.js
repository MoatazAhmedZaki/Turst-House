import { ENTER_SEARCH } from './actionTypes';
import { SET_CURRENT_SEARCH } from './actionTypes';
import { REMOVE_SEARCH } from './actionTypes';



export const searchEnter = search => dispatch => {

	dispatch({ type: ENTER_SEARCH, payload: search });

};


export const setSearch = search => {
	return {
	  type: SET_CURRENT_SEARCH,
	  payload: search
	};
  };


  export const removeSearch = () => dispatch => {
	dispatch({ type: REMOVE_SEARCH });

};
