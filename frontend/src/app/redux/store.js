import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { blacklist, slices } from "./bind";

const config = {
  key: "campus_connect",
  version: 1,
  storage: storage,
  blacklist,
};

const store = configureStore({
  reducer: persistReducer(config, slices),
  devTools: true,
  middleware: (setup) =>
    setup({
      serializableCheck: false,
    }),
});

export default store;
