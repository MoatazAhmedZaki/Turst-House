import { ENTER_SEARCH } from '../actions/actionTypes'
import { REMOVE_SEARCH} from '../actions/actionTypes'

const initialState = {
    search: ''
}

export default function(state = initialState, action) {
        switch(action.type) {
            case ENTER_SEARCH: 
            return {
                ...state,
                search: action.payload
            }

            case REMOVE_SEARCH:
            return{
                ...state,
                search:''
            }
            
            default: return state
        }
}