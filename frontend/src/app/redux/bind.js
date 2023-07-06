import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";

/* SET BLACKLIST */
export const blacklist = [];

/* combine reducers */
export const slices = combineReducers({
  authReducer,
});
