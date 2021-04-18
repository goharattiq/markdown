import { createStore } from 'redux';

import {textReducer} from './markdown/reducer';

const initialState = '';


const store = createStore(
  textReducer,
  initialState,
);


export default store;