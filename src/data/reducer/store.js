import { combineReducers, createStore } from "redux";
import { favoriteFilmsReducer } from './favoriteFilmsReducer';
import { watchLaterFilmsReducer } from "./watchLaterFilmsReducer";

const rootReducer = combineReducers({
    favorite: favoriteFilmsReducer,
    later: watchLaterFilmsReducer
})

export const store = createStore(rootReducer)