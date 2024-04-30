import { createStore } from "redux";
import { favoriteFilmsReducer } from './favoriteFilmsReducer';

export const store = createStore({favoriteFilmsReducer})