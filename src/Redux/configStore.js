import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import {CarouselReducer} from './reducers/CarouselReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import reduxThunk from 'redux-thunk'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  CarouselReducer: CarouselReducer,
  QuanLyPhimReducer: QuanLyPhimReducer,
  QuanLyRapReducer: QuanLyRapReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose
export const store = createStore(
  rootReducer,
  //thunk
  composeEnhancers(applyMiddleware(thunk),applyMiddleware(reduxThunk)),
)