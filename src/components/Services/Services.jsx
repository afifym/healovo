import { Grid, Container, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { FaCalendarCheck } from 'react-icons/fa';
import { GradientHolder } from '../../styles/shared';
import ServicesItem from './ServicesItem/ServicesItem';
import { StyledHeading } from '../../styles/shared';

const Services = () => {
  return (
    <Container>
      <StyledHeading style={{ margin: '1.5em 0' }}>Our Services</StyledHeading>
      <Box m='auto' maxWidth='75%'>
        <Grid container spacing={7}>
          <ServicesItem
            title='Doctors'
            details='Something about doctors here, bla bla'
            icon={<FaCalendarCheck size={35} />}
          />
          <ServicesItem
            title='Doctors'
            details='Something about doctors here, bla bla'
            icon={<FaCalendarCheck size={35} />}
          />
          <ServicesItem
            title='Doctors'
            details='Something about doctors here, bla bla'
            icon={<FaCalendarCheck size={35} />}
          />
          <ServicesItem
            title='Doctors'
            details='Something about doctors here, bla bla'
            icon={<FaCalendarCheck size={35} />}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
