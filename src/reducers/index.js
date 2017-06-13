import { combineReducers } from 'redux'
import changeNum from './changenum'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  num: changeNum,
  routing: routerReducer
})

export default reducers