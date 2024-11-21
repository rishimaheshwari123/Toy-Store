import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import newsReducer from "./newsSlice"
import carReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    cart: carReducer,

  },
});

export default store;
