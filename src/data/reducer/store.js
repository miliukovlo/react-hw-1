import { combineReducers, createStore } from "redux";
import { favoriteFilmsReducer } from './favoriteFilmsReducer';

const rootReducer = combineReducers({
    favorite: favoriteFilmsReducer
})

export const store = createStore(rootReducer)