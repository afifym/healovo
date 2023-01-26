import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient data",
  initialState: {
    age: "",
    email: "",
    gender: "",
    image: "",
    joinDate: "",
    location: "",
    medications: [],
    name: {},
    password: null,
    type: "",
    vitals: {},
    phone: "",
    birthdate: "",
    isChanged: false,
  },
  reducers: {
    addPatientData(state, action) {
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.joinDate = action.payload.joinDate;
      state.location = action.payload.location;
      state.medications = action.payload.medications;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.type = action.payload.type;
      state.vitals = action.payload.vitals;
      state.phone = action.payload.phone;
      state.birthdate = action.payload.birthdate;
      state.isChanged = true;
    },
    updatePatientData(state, action) {
      state.name.first = action.payload.first;
      state.name.last = action.payload.last;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.birthdate = action.payload.birthdate;
      state.isChanged = true;
    },
  },
});

export const patientActions = patientSlice.actions;
export default patientSlice.reducer;
