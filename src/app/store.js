import { configureStore } from "@reduxjs/toolkit";
import stagiaireSlice from "../features/stagiaireSlice";
const store = configureStore({
  reducer: {
    stagiaire: stagiaireSlice,
  }
});
export default store;
