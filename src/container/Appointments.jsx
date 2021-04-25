import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import Styled from "styled-components/macro";
import { useSelector } from "react-redux";

const Appointments = () => {
  return (
    <Wrapper>
      <Card className="border">
        <h2 className="upcoming endPosition">Upcoming</h2>
        <AppointmentCard name="Ahmed Saleh" type="video" />
      </Card>
      <Card>
        <h2 className="upcoming startPosition">Previous</h2>
        <AppointmentCard name="Gaber Mohamed" type="Clinic" />
      </Card>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    display: flex;
    margin-top: 50px 0;

    .border {
        border-right: 1px solid #666A76;
    }

    @media (max-width: 1000px) {
            flex-direction: column;
            .border {
            border-right: none;
        }
    }
`;
const Card = Styled.div`

    .endPosition {
        justify-content: flex-end;
        margin: 0 30px 20px 0;
    }

    .startPosition {
        justify-content: flex-start;
        margin: 0 0 20px 30px;
    }

   .upcoming {
        color: black;
        display: flex;
        color: #2D50EF
   }

   @media (max-width: 1000px) {
        .endPosition {
            justify-content: flex-start;
            margin: 30px 0;
        } 

        .startPosition {
            margin: 30px 0;
        }
    }
`;

export default Appointments;
