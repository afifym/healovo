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

// useEffect(async () => {
//   try {
//     const data = await fetchPatients();
//   } catch (error) {
//     console.log('error');
//   }
// }, []);

firebase.initializeApp(firebaseConfig);

export const developmentAPI = 'https://healovo-default-rtdb.firebaseio.com';
export const api = 'https://healovo-default-rtdb.firebaseio.com';

export const jsonToArray = (data) => {
  const userData = Object.keys(data).map((key) => {
    return { ...data[key], id: key.toString() };
  });
  return userData;
};

export const fetchPatients = async () => {
  const response = await axios.get(api + '/patients.json');
  return jsonToArray(response.data);
};

export const fetchOnePatient = async (id) => {
  const response = await axios.get(api + `/patients/${id}.json`);
  return jsonToArray(response.data);
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
  return jsonToArray(response.data);
};
export const fetchOneDoctor = async (id) => {
  const response = await axios.get(api + `/doctors/${id}.json`);
  return jsonToArray(response.data);
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

// appointments = {
//   id: 'firebase',
//   patientID: 'id',
//   doctorID: 'id',
//   type: 'clinic',
//   date: '11-11-2011',
//   time: '1:00 pm to 2:00 pm',
// };
