import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: {
      primary_color: "#0069D9",
      primary_faded: '#c5e1ff',
      primary_text_color: '#fff',
      secondary_color: "",
    },
  },
  reducers: {
    setAppTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const { setAppTheme } = actions;

export default reducer;
