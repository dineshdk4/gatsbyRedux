import { combineReducers } from "redux";

import MockieeData from "../reducer/product.reducer";
export const rootReducer = combineReducers({
    mockData: MockieeData,
});