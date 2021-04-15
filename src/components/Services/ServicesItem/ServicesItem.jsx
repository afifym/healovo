import { Grid, Container, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { GradientHolder } from '../../../styles/shared';

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

const ServicesItem = ({ title, details, icon }) => {
  return (
    <Grid item md={6} sm={12}>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <StyledGradientHolder>
          <Container>
            <IconWrapper className='inner-icon'>{icon}</IconWrapper>
            <Typography
              variant='h3'
              style={{ marginTop: 20, marginBottom: 20, fontWeight: '600' }}
            >
              {title}
            </Typography>
            <Typography>{details}</Typography>
          </Container>
        </StyledGradientHolder>
      </Box>
    </Grid>
  );
};

export default ServicesItem;
