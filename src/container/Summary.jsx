import AppointmentCard from '../components/AppointmentCard/AppointmentCard';
import Prescriptions from '../components/Prescription/Prescription';
import Styled from 'styled-components/macro';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
import Vitals from '../components/Vitals/Vitals';

const Summary = () => {
  const patientData = useSelector((state) => state.patient);
  const doctorData = useSelector((state) => state.doctor.name);
  const appointmentData = useSelector((state) => state.appointment);

  return (
    <div>
      <Title>
        <EventAvailableIcon fontSize='large' />
        <Section>Upcoming Appointments</Section>
      </Title>
      <AppointmentCard
        name={`${doctorData?.first} ${doctorData?.last}`}
        type={appointmentData.type}
      />
      <Title>
        <LocalHospitalIcon fontSize='large' />
        <div>
          <Section> Current Prescriptions</Section>
          <p>Last Updated: 1 week ago</p>
        </div>
      </Title>
      {patientData.medications?.map((item, index) => (
        <Prescriptions
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
