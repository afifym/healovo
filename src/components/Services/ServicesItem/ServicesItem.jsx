import { Grid, Container, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { GradientHolder } from '../../../styles/shared';
import { Link } from 'react-router-dom';

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
  margin: 1em 0;
  .heading {
    margin-top: 0.5em;
    margin-bottom: 0.3em;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background: ${({ theme }) => theme.gradients.gradient4};
    color: white;

    .inner-icon {
      background-color: #a7bcfb;
      color: white;
    }
  }

  @media (max-width: 768px) {
    .inner-icon {
      align-self: center;
      margin: auto;
    }
    padding-left: 0.2em;
    padding-right: 0.2em;
    text-align: center;
  }
`;

const ServicesItem = ({ title, details, icon }) => {
  return (
    <Grid item md={6} sm={12}>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <StyledGradientHolder>
          <Link to='/signup'>
            <Container>
              <IconWrapper className='inner-icon'>{icon}</IconWrapper>
              <Typography variant='h3' className='heading'>
                {title}
              </Typography>
              <p>{details}</p>
            </Container>
          </Link>
        </StyledGradientHolder>
      </Box>
    </Grid>
  );
};

export default ServicesItem;
