import AppointmentCard from '../components/AppointmentCard/AppointmentCard';
import Prescriptions from '../components/Prescription/Prescription';
import Styled from 'styled-components/macro';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
import Vitals from '../components/Vitals/Vitals';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  fetchOneDoctor,
  fetchOnePatient,
  jsonToArray,
} from '../utils/firebase';

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
let data;

const Summary = () => {
  const patientData = useSelector((state) => state.patient);
  const doctorData = useSelector((state) => state.doctor.name);
  const [appointments, setAppointments] = useState([]);
  const userId = useSelector((state) => state.userId.id);

  console.log('RENDER');

  let user = {};
  user.id = userId;
  if (patientData.email) {
    user.type = 'patient';
    console.log('HES is a patient');
  } else if (doctorData.email) {
    user.type = 'doctor';
    console.log('HES is a doctor');
  }

  console.log('APPS BEFORE: ', appointments);
  useEffect(() => {
    console.log('EFFECT');

    const getAppointments = async () => {
      console.log('ASYNC: ');

      if (user.type === 'patient') {
        const response = await axios(
          `https://healovo-default-rtdb.firebaseio.com/appointments.json?orderBy="patientID"&equalTo="${user.id}"`
        );
        data = jsonToArray(response.data);
        console.log('DATA: ', data);

        let appointmentsData = [];
        data.map(async (appointment) => {
          const response = await fetchOneDoctor(appointment.doctorID);
          const { type, date } = appointment;
          appointmentsData.push({ type, date, name: response?.data?.name });
        });

        console.log('APPS: ', appointmentsData);
        setAppointments(appointmentsData);
      } else if (user.type === 'doctor') {
        const response = await axios(
          `https://healovo-default-rtdb.firebaseio.com/appointments.json?orderBy="doctorID"&equalTo="${user.id}"`
        );
        data = jsonToArray(response.data);
        let appointmentsData = [];
        data.map(async (appointment) => {
          const response = await fetchOnePatient(appointment.patientID);
          const { type, date } = appointment;
          appointmentsData.push({
            type,
            date,
            patientName: response?.data?.name,
          });
        });
        console.log('APPS: ', appointmentsData);
        setAppointments(appointmentsData);
      }
    };

    getAppointments();
  }, []);
  console.log('APPS AFTER: ', appointments);

  return (
    <div className=''>
      <div>{appointments[0]?.name.first}</div>

      {/* {appointments.map((item, i) => {
        console.log('ITEM:', item);
        return (
          <div key={i}>
            <h1>
              WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
            </h1>
          </div>
        );
      })} */}

      {/* <Title>
        <EventAvailableIcon fontSize='large' />
        <Section>Upcoming Appointments</Section>
      </Title> */}

      {/* <AppointmentCard
            key={i}
            name={`${capitalizeString(item?.name.first)} ${capitalizeString(
              item?.name.last
            )}`}
            type={item.type}
          /> */}

      <Title>
        <LocalHospitalIcon fontSize='large' />
        <div>
          <Section> Current Prescriptions</Section>
          <p>Last Updated: 1 week ago</p>
        </div>
      </Title>
      {patientData.medications?.map((item, index) => (
        <Prescriptions
          key={index}
          name={item.name}
          duration={item.duration}
          index={index}
        />
      ))}
      <Title>
        <FavoriteIcon fontSize='large' />
        <div>
          <Section> Recent Vitals</Section>
          <p>Last Updated: 2 week ago</p>
        </div>
      </Title>
      <Vitals
        height={patientData.vitals?.height}
        weight={patientData.vitals?.weight}
        massIndex={patientData.vitals?.massIndex}
        fat={patientData.vitals?.fat}
        bbi={patientData.vitals?.bbi}
      />
    </div>
  );
};

const Title = Styled.div`
    color: #2D50EF;
    margin: 50px 0 10px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2D50EF;
    width: 400px;

    p {
        margin-left: 9px;
        font-size: 14px;
    };

    @media (max-width: 500px) {
        width: 240px
    }
`;

const Section = Styled.h2`
    margin-left: 10px;
`;

export default Summary;
