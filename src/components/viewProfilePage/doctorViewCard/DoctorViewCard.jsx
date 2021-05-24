import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { BiClinic } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import DoctorRating from '../../SearchPage/DoctorRating';

const CustomePaper = styled.div`
  max-width: 360px;
  background: #ffffff;
  box-shadow: 0px 0px 32px 28px rgba(206, 206, 206, 0.25);
  border-radius: 20px !important;

  margin-bottom: 25px;
  @media (min-width: 960px) {
    padding: 20px 30px;
  }
  @media (max-width: 959px) {
    padding: 20px 25px;

    margin: 25px auto;
    margin-bottom: 50px;
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

const SearchBody__HeadeGridr = styled(Grid)``;
const SearchBody__bodyGrid = styled(Grid)`
  padding-top: 15px;
`;

const ImgWraper = styled.div`
  padding-right: 30px;
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

const singleInfoStyle = {
  paddingLeft: '15px',
  fontSize: '1rem',
  fontFamily: ' Montserrat, sans-serif',
  fontWeight: '400',
  lineHeight: '1.5',
};

const SingletDoctorCon = { paddingLeft: '7.5px', fontSize: 16 };

const overViewTrim = (str) => {
  if (str.length > 10) str = `${str.substring(0, 100)} ...`;
  return str;
};

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const DoctorViewCard = ({ doctor }) => {
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
    overview,
    price,
  } = doctor;

  return (
    <CustomePaper>
      <Grid container>
        <Grid item container xs={12} justify='center' alignItems='flex-start'>
          <ImgWraper>
            <img src={image || '/assets/images/doctorImage.png'} alt='' />
          </ImgWraper>
        </Grid>

        <Grid item container xs={12}>
          <SearchBody__HeadeGridr
            container
            justify='space-between'
            alignItems='flex-start'
          >
            <Box>
              <Typography
                variant='h5'
                style={{ fontWeight: '700' }}
                color='secondary'
                gutterBottom
              >
                {` Dr. ${capitalizeString(name.first)} ${capitalizeString(
                  name.last
                )}`}
              </Typography>
              <Typography
                color='secondary'
                component='p'
                style={{ paddingBottom: 7 }}
              >
                {`${degree}`}
              </Typography>

              <DoctorRating RatingVal={rate} />
            </Box>

            <Typography
              style={{
                color: 'rgb(45 80 239)',
                fontWeight: '600',
                fontSize: 24,
              }}
              color='secondary'
              variant='h6'
              gutterBottom
            >
              {`$${price}`}
            </Typography>
          </SearchBody__HeadeGridr>

          <SearchBody__bodyGrid container>
            <Grid item xs={12}>
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
          </SearchBody__bodyGrid>
          <Grid item style={{ paddingTop: 10 }} container>
            <Grid item sm={12}>
              {/* <OverView>
                <span>overview</span>
                {` ${overViewTrim(overview)}`}
              </OverView> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomePaper>
  );
};

export default DoctorViewCard;
