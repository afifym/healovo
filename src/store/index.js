import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import appointmentData from "./appointmentData";
import doctorData from "./doctorData";
import patientData from "./patientData";
import userId from "./userId";

const store = configureStore({
  reducer: {
    auth: authSlice,
    appointment: appointmentData,
    doctor: doctorData,
    patient: patientData,
    userId: userId,
  },
});

export default store;
