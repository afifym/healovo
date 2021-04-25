import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isDoctor: false,
    isPatient: false,
  },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    isDoctor(state) {
      state.isDoctor = true;
      state.isPatient = false;
    },
    isPatient(state) {
      state.isDoctor = false;
      state.isPatient = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
