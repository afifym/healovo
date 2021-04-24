import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import Styled from "styled-components/macro";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { useSelector } from "react-redux";

const DoctorSummary = () => {
  const patientData = useSelector((state) => state.patient);
  const appointmentData = useSelector((state) => state.appointment);

  return (
    <div>
      <Title>
        <EventAvailableIcon fontSize="large" />
        <Section>Upcoming Appointments</Section>
      </Title>
      <AppointmentCard
        name={`${patientData.name?.first} ${patientData.name?.last}`}
        type={appointmentData.type}
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

export default DoctorSummary;
