import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnabled: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
  },
});

export const { toggleDarkMode } = settingSlice.actions;
export const settingReducer = settingSlice.reducer;