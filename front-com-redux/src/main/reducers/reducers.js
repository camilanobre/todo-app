import { combineReducers } from 'redux'
import todoReducers from '../../todo/reducers/todoReducers'

const rootReducer = combineReducers({
    todo: todoReducers
})

export default rootReducer