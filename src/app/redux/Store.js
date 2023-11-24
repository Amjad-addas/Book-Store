import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducer/cardReducer";


export const store = configureStore({
    reducer: {
      card: cardReducer,
    },
  })