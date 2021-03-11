import { combineReducers } from 'redux'
import langReducer from './langReducer'
import authReducer from './authReducer'
import searchReducer from './searchReducer'
export default combineReducers({
    lang: langReducer,
    auth: authReducer,
    search:searchReducer
    
})