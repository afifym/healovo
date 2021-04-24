import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { FaClinicMedical, FaVideo } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { ImHome } from 'react-icons/im';
import { FaSearch } from 'react-icons/fa';
import GradientButton from './../../shared/GradientButton/GradientButton';
import AvailableTimeLine from './AvailableTimeLine';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import DoctorRating from '../DoctorRating';

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const CustomePaper = styled(Paper)`
  background: #ffffff;
  box-shadow: 0px 0px 32px 28px rgba(206, 206, 206, 0.25);
  border-radius: 60px !important;
  width: 800px;
  margin-bottom: 25px;

  @media (min-width: 960px) {
    padding: 20px 30px;
  }
  @media (max-width: 959px) {
    padding: 20px 15px;
    max-width: 700px;
    margin: 25px auto;
  }
  @media (max-width: 340px) {
    padding: 20px 15px;
  }

  @media (max-width: 599px) {
    padding: 20px 25px;
    max-width: 320px;
    margin: 20px auto;
  }
`;

const ContactDoctorWraper = styled(Box)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const SearchCard = ({ Doctor }) => {
  const {
    id,
    image,
    name,
    degree,
    location,
    specialty,
    rate,
    communicationMethods,
    reservationDates,
    price,
  } = Doctor;

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <CustomePaper>
        <Grid container>
          <Grid
            item
            container
            sm={4}
            xs={12}
            justify='center'
            alignItems='center'
          >
            <div className='' style={{ marginRight: '1em' }}>
              <img src={image} alt='doctor' style={{ width: '90%' }} />
            </div>
          </Grid>

          <Grid item container sm={8} xs={12}>
            <Grid container justify='space-between' alignItems='flex-start'>
              <Box>
                <Typography
                  variant='h5'
                  style={{ fontWeight: '700', fontSize: '1.6rem' }}
                  gutterBottom
                  color='secondary'
                >
                  <span style={{ fontWeight: '400' }}>Dr. </span>
                  {`${capitalizeString(name.first)} ${capitalizeString(
                    name.last
                  )}`}
                </Typography>
                <Typography
                  component='p'
                  color='secondary'
                  style={{ paddingBottom: 7 }}
                >
                  {`${degree}`}
                </Typography>

                <DoctorRating RatingVal={rate} />
              </Box>

              <Typography
                style={{ color: 'rgb(45 80 239)', fontWeight: '700' }}
                variant='h5'
                gutterBottom
              >
                {`$${price}`}
              </Typography>
            </Grid>

            <Grid style={{ paddingTop: '15px' }} container>
              <Grid item md={6}>
                <Box display='flex' alignItems='center' my={1}>
                  <FaBriefcaseMedical size={17} style={{ color: '#2D50EF' }} />
                  <Typography
                    component='p'
                    color='secondary'
                    style={{
                      fontWeight: '500',
                      marginLeft: '0.7em',
                      opacity: '0.9',
                    }}
                  >{`${specialty}`}</Typography>
                </Box>

                <Box
                  display='flex'
                  alignItems='center'
                  style={{ margin: '0.5em 0' }}
                >
                  <HiLocationMarker size={20} style={{ color: '#2D50EF' }} />
                  <Typography
                    component='p'
                    color='secondary'
                    style={{
                      fontWeight: '500',
                      marginLeft: '0.7em',
                      opacity: '0.9',
                    }}
                  >
                    {location}
                  </Typography>
                </Box>

                <ContactDoctorWraper>
                  <Box display='flex' alignItems='center'>
                    <FaClinicMedical
                      size={17}
                      style={{
                        color: communicationMethods.clinic ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.clinic ? '1' : '0.5',
                        marginRight: '0.3em',
                      }}
                    />
                    <Typography
                      component='p'
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: communicationMethods.clinic ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.clinic ? '1' : '0.5',
                      }}
                    >
                      Clinic
                    </Typography>
                  </Box>

                  <Box display='flex' alignItems='center' mx={2}>
                    <ImHome
                      size={15}
                      style={{
                        color: communicationMethods.home ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.home ? '1' : '0.5',
                        marginRight: '0.3em',
                      }}
                    />
                    <Typography
                      component='p'
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: communicationMethods.home ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.home ? '1' : '0.5',
                      }}
                    >
                      Home
                    </Typography>
                  </Box>

                  <Box display='flex' alignItems='center'>
                    <FaVideo
                      size={16}
                      style={{
                        color: communicationMethods.video ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.video ? '1' : '0.5',
                        marginRight: '0.3em',
                      }}
                    />
                    <Typography
                      component='p'
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: communicationMethods.video ? '#2D50EF' : 'gray',
                        opacity: communicationMethods.video ? '1' : '0.5',
                      }}
                    >
                      Video
                    </Typography>
                  </Box>
                </ContactDoctorWraper>
              </Grid>

              <Grid item md={6}>
                <Hidden xsDown>
                  <AvailableTimeLine reservationDates={reservationDates} />
                </Hidden>
              </Grid>
            </Grid>

            <Grid justify='center' item style={{ paddingTop: 20 }} container>
              <Grid item sm={6}>
                <Hidden xsDown>
                  <GradientButton
                    width='180px'
                    icon={<FaSearch color='#FFF' size={12} />}
                  >
                    View Profile
                  </GradientButton>
                </Hidden>
              </Grid>

              <Grid item sm={6}>
                <GradientButton
                  width='150px'
                  lightCircle={true}
                  blueBg={true}
                  style={{ padding: '5px 22px !important' }}
                  icon={<FaSearch color='#hsl(229, 86%, 56%)' size={12} />}
                >
                  Book Now
                </GradientButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomePaper>
    </Box>
  );
};

export default SearchCard;
