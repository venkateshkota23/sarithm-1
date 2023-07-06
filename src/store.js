import { configureStore } from "@reduxjs/toolkit";
import postJobSlice from "./slices/postJobSlice";

export default configureStore({
  reducer: {
    postJobDetails: postJobSlice,
  },
});
