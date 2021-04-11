import { Grid, Container, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { FaCalendarCheck } from 'react-icons/fa';
import { GradientHolder } from '../../styles/shared';

const StyledGradientHolder = styled(GradientHolder)`
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.gradients.gradient4};
    color: white;

    .inner-icon {
      background-color: #a7bcfb;
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  color: #343949;
  border-radius: 50%;
`;

const servicesData = [{}, {}, {}, {}];

const Services = () => {
  return (
    <Container>
      <Box m='auto' maxWidth='75%'>
        <Grid container spacing={7}>
          {servicesData?.map((item, i) => {
            return (
              <Grid key={i} item md={6} sm={12}>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <StyledGradientHolder>
                    <Container>
                      <IconWrapper className='inner-icon'>
                        <FaCalendarCheck size={35} />
                      </IconWrapper>
                      <Typography
                        variant='h3'
                        style={{ marginTop: 20, marginBottom: 20 }}
                      >
                        Doctors
                      </Typography>
                      <Typography>
                        Something about doctors here, bla bla
                      </Typography>
                    </Container>
                  </StyledGradientHolder>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
