import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const sidebarToggleSlice = createSlice({
  initialState,
  name: 'sidebar-toggle',
  reducers: {
    toggle: state => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
