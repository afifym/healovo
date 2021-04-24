import { Box, Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { FaBriefcaseMedical } from 'react-icons/fa';

import { BsFillCameraVideoFill } from 'react-icons/bs';

import { BiClinic } from 'react-icons/bi';

import { ImHome } from 'react-icons/im';

import { FaSearch } from 'react-icons/fa';

import { IoLocationSharp } from 'react-icons/io5';
import GradientButton from './../../shared/GradientButton/GradientButton';
import { useState } from 'react';
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

const SearchCardWraperGrid = styled(Grid)``;

const SearchBodyGrid = styled(Grid)``;

const SearchBody__HeadeGridr = styled(Grid)``;
const SearchBody__bodyGrid = styled(Grid)`
  padding-top: 15px;
`;
const SearchBody__FooterGrid = styled(Grid)``;

const ImgWraper = styled.div`
  max-width: 200px;
  padding-bottom: 30px;
  img {
    width: 100%;
    height: auto;
  }
`;

const SingleInfo = styled(Box)`
  margin-bottom: 10px;
  display: flex;
`;

const ContactDoctorWraper = styled(Box)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const ContactDoctor = styled(Box)`
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

const goldColor = { color: '#FEC565' };
const singleInfoStyle = {
  paddingLeft: '15px',
  fontSize: '1rem',
  fontFamily: ' Montserrat, sans-serif',
  fontWeight: '400',
  lineHeight: '1.5',
};

const SingletDoctorCon = { paddingLeft: '7.5px', fontSize: 16 };

const IconeColor = { color: '#2D50EF' };

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
        <SearchCardWraperGrid container>
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
            <SearchBody__HeadeGridr
              container
              justify='space-between'
              alignItems='flex-start'
            >
              <Box>
                <Typography
                  variant='h5'
                  style={{ fontWeight: '700', fontSize: '1.8rem' }}
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
            </SearchBody__HeadeGridr>

            <SearchBody__bodyGrid container>
              <Grid item md={6}>
                <SingleInfo>
                  <FaBriefcaseMedical size={17} style={{ color: '#2D50EF' }} />
                  <Typography component='p' style={singleInfoStyle}>
                    {`${specialty}`}
                  </Typography>
                </SingleInfo>

                <SingleInfo>
                  <IoLocationSharp size={17} style={{ color: '#2D50EF' }} />
                  <Typography component='p' style={singleInfoStyle}>
                    {location}
                  </Typography>
                </SingleInfo>

                <ContactDoctorWraper>
                  <ContactDoctor>
                    <BiClinic
                      size={17}
                      style={{
                        color: communicationMethods.clinic ? '#2D50EF' : 'gray',
                      }}
                    />
                    <Typography component='span' style={SingletDoctorCon}>
                      clinic
                    </Typography>
                  </ContactDoctor>

                  <ContactDoctor>
                    <ImHome
                      size={15}
                      style={{
                        color: communicationMethods.home ? '#2D50EF' : 'gray',
                      }}
                    />
                    <Typography component='span' style={SingletDoctorCon}>
                      Home
                    </Typography>
                  </ContactDoctor>

                  <ContactDoctor>
                    <BsFillCameraVideoFill
                      size={16}
                      style={{
                        color: communicationMethods.video ? '#2D50EF' : 'gray',
                      }}
                    />
                    <Typography component='span' style={SingletDoctorCon}>
                      Vedio
                    </Typography>
                  </ContactDoctor>
                </ContactDoctorWraper>
              </Grid>

              <Grid item md={6}>
                <Hidden xsDown>
                  <AvailableTimeLine reservationDates={reservationDates} />
                </Hidden>
              </Grid>
            </SearchBody__bodyGrid>

            <SearchBody__FooterGrid item style={{ paddingTop: 20 }} container>
              <Grid item sm={6}>
                <Hidden xsDown>
                  <GradientButton
                    width='150px'
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
            </SearchBody__FooterGrid>
          </Grid>
        </SearchCardWraperGrid>
      </CustomePaper>
    </Box>
  );
};

export default SearchCard;
