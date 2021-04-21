import { Grid, Container, Box } from '@material-ui/core';
import styled from 'styled-components';
import {
  FaCalendarCheck,
  FaUserNurse,
  FaDatabase,
  FaVideo,
} from 'react-icons/fa';
import ServicesItem from './ServicesItem/ServicesItem';
import { StyledHeading } from '../../styles/shared';

const Wrapper = styled.div`
  background-image: url('/assets/services.svg');
  background-repeat: no-repeat;
  background-position: 0 150px;
`;

const Services = () => {
  return (
    <Wrapper>
      <Container>
        <StyledHeading>Our Services</StyledHeading>
        <Box m='auto' maxWidth='800px'>
          <Grid container spacing={7}>
            <ServicesItem
              title='Doctors'
              details='We have some of the best doctors!'
              icon={<FaUserNurse size={35} />}
            />
            <ServicesItem
              title='Booking'
              details='Book your next appointment in seconds!'
              icon={<FaCalendarCheck size={35} />}
            />
            <ServicesItem
              title='Profile'
              details='We keep your medical data safe and organized!'
              icon={<FaDatabase size={35} />}
            />
            <ServicesItem
              title='Online'
              details='Easily reach out to your doctor with Video Call'
              icon={<FaVideo size={37} />}
            />
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Services;
