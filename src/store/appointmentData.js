import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointment data",
  initialState: {
    date: "",
    doctorID: "",
    patientID: "",
    type: "",
  },
  reducers: {
    addAppointmentData(state, action) {
      state.date = action.payload.date;
      state.doctorID = action.payload.doctorID;
      state.patientID = action.payload.patientID;
      state.type = action.payload.type;
    },
  },
});

export const appointmentActions = appointmentSlice.actions;
export default appointmentSlice.reducer;
