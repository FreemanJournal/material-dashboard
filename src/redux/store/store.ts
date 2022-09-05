import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../state/product.slice";

const store = configureStore({
    reducer:{
        products:productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch