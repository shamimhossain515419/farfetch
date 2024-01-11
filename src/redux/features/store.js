import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggle/sidebarToggleSlice";

export const store = configureStore({
     reducer: {
          sidebarToggle: sidebarToggleSlice,
     },
});
