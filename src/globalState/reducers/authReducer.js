import { LOGIN, LOGOUT,SET_CURRENT_ADMIN } from '../actions/actionTypes'
import isEmpty from '../../helpers/is-Empty'
const initialState = {
    isLoggedIn:false,
    admin:{}
}

export default function(state = initialState, action) {
        switch(action.type) {
            case LOGIN: 
            return {
                ...state,
                isLoggedIn: true,
                admin:action.payload
            }
            case LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
            }
            case SET_CURRENT_ADMIN:
                return{
                    ...state,
                    isLoggedIn:!isEmpty(action.payload),
                    admin:action.payload
                }
            default: return state
        }
}