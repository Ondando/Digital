import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import productReducer from "./ProductSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      product: productReducer,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
