import { createStore } from 'redux'
import { rootReducer } from './../reducers/rootReducer';

//1-create store
export const storeCounter = createStore(rootReducer);