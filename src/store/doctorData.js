import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor data",
  initialState: {
    age: "",
    communicationMethods: {},
    degree: "",
    email: "",
    gender: "",
    image: "",
    joinDate: "",
    location: "",
    name: {},
    overview: "",
    password: "",
    price: "",
    rate: "",
    reservationDates: [],
    specialty: "",
    type: "",
    phone: "",
    birthdate: "",
    isChanged: false,
  },
  reducers: {
    addDoctorData(state, action) {
      state.age = action.payload.age;
      state.communicationMethods = action.payload.communicationMethods;
      state.degree = action.payload.degree;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.joinDate = action.payload.joinDate;
      state.location = action.payload.location;
      state.name = action.payload.name;
      state.overview = action.payload.overview;
      state.password = action.payload.password;
      state.price = action.payload.price;
      state.rate = action.payload.rate;
      state.reservationDates = action.payload.reservationDates;
      state.specialty = action.payload.specialty;
      state.type = action.payload.type;
      state.phone = action.payload.phone;
      state.birthdate = action.payload.birthdate;
      state.isChanged = true;
    },
    updateDoctorData(state, action) {
      state.name.first = action.payload.first;
      state.name.last = action.payload.last;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.birthdate = action.payload.birthdate;
      state.isChanged = true;
    },
  },
});

export const doctorActions = doctorSlice.actions;
export default doctorSlice.reducer;
