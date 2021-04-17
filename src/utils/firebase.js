import firebase from 'firebase';
import axios from 'axios';
const firebaseConfig = {
  apiKey: 'AIzaSyAvhrEd58Qmg_adFoaLwEjkemym4EKUD3s',
  authDomain: 'healovo.firebaseapp.com',
  databaseURL: 'https://healovo-default-rtdb.firebaseio.com',
  projectId: 'healovo',
  storageBucket: 'healovo.appspot.com',
  messagingSenderId: '142171972024',
  appId: '1:142171972024:web:09b72a0fc03c5f9bb9ef4d',
  measurementId: 'G-NZEYQQLWJW',
};
firebase.initlializeApp(firebaseConfig);

export const developmentAPI = 'https://healovo-default-rtdb.firebaseio.com';
export const api = 'https://healovo-default-rtdb.firebaseio.com';

export const fetchPatients = async () => {
  const response = await axios.get(api + '/patients.json');
  return response;
};
export const fetchOnePatient = async (id) => {
  const response = await axios.get(api + `/patients/${id}.json`);
  return response;
};
export const addPatient = async (data) => {
  const response = await axios.post(api + '/patients.json', data);
  return response;
};
export const deletePatient = async (id) => {
  const response = await axios.delete(api + `/patients/${id}.json`);
  return response;
};

export const fetchDoctors = async () => {
  const response = await axios.get(api + '/doctors.json');
  return response;
};
export const fetchOneDoctor = async (id) => {
  const response = await axios.get(api + `/doctors/${id}.json`);
  return response;
};
export const addDoctor = async (data) => {
  const response = await axios.post(api + '/doctors.json', data);
  return response;
};
export const deleteDoctor = async (id) => {
  const response = await axios.delete(api + `/doctors/${id}.json`);
  return response;
};

export default firebase;
