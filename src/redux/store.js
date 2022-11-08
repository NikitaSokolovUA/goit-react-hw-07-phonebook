import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";



// const rootReducers =combineReducers({
//     contact: contactsReducer
//   })



export const store = configureStore({
  reducer: {
   contacts: contactsReducer
  }
})

