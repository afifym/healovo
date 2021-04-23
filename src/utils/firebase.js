import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyAvhrEd58Qmg_adFoaLwEjkemym4EKUD3s",
  authDomain: "healovo.firebaseapp.com",
  databaseURL: "https://healovo-default-rtdb.firebaseio.com",
  projectId: "healovo",
  storageBucket: "healovo.appspot.com",
  messagingSenderId: "142171972024",
  appId: "1:142171972024:web:09b72a0fc03c5f9bb9ef4d",
  measurementId: "G-NZEYQQLWJW",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const api = "https://healovo-default-rtdb.firebaseio.com";

export const jsonToArray = (data) => {
  const userData = Object.keys(data).map((key) => {
    return { ...data[key], id: key.toString() };
  });
  return userData;
};

// ###########################
// PATIENTS
// ###########################
export const fetchPatients = async () => {
  const response = await axios.get(api + "/patients.json");
  return jsonToArray(response.data);
};
export const fetchOnePatient = async (id) => {
  const response = await axios.get(api + `/patients/${id}.json`);
  return response.data;
};
export const addPatient = async (data) => {
  const response = await axios.post(api + "/patients.json", data);
  return response;
};
export const deletePatient = async (id) => {
  const response = await axios.delete(api + `/patients/${id}.json`);
  return response;
};
export const updatePatient = async (id, data) => {
  const response = await axios.put(api + `/patients/${id}.json`, data);
  return response;
};

// ###########################
// DOCTORS
// ###########################
export const fetchDoctors = async () => {
  const response = await axios.get(api + "/doctors.json");
  return jsonToArray(response.data);
};
export const fetchOneDoctor = async (id) => {
  const response = await axios.get(api + `/doctors/${id}.json`);
  return response.data;
};
export const addDoctor = async (data) => {
  const response = await axios.post(api + "/doctors.json", data);
  return response;
};
export const deleteDoctor = async (id) => {
  const response = await axios.delete(api + `/doctors/${id}.json`);
  return response;
};
export const updateDoctor = async (id, data) => {
  const response = await axios.put(api + `/doctors/${id}.json`, data);
  return response;
};

// ###########################
// APPOINTMENTS
// ###########################
export const fetchAppointments = async () => {
  const response = await axios.get(api + "/appointments.json");
  return jsonToArray(response.data);
};
export const fetchOneAppointment = async (id) => {
  const response = await axios.get(api + `/appointments/${id}.json`);
  return response.data;
};
export const addAppointment = async (data) => {
  const response = await axios.post(api + "/appointments.json", data);
  return response;
};
export const deleteAppointment = async (id) => {
  const response = await axios.delete(api + `/appointments/${id}.json`);
  return response;
};
export const updateAppointment = async (id, data) => {
  const response = await axios.put(api + `/appointments/${id}.json`, data);
  return response;
};

export default firebase;
