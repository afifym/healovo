import { Box, Button, Grid } from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";

import { BsFillCameraVideoFill } from "react-icons/bs";

import { BiClinic } from "react-icons/bi";

import { ImHome } from "react-icons/im";

import { FaSearch } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import GradientButton from "./../shared/GradientButton/GradientButton";
import { useState } from "react";
import AvailableTimeLine from "./AvailableTimeLine";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import DoctorRating from "../SearchPage/DoctorRating";

const CustomePaper = styled(Paper)`
  background: #ffffff;
  box-shadow: 0px 0px 32px 28px rgba(206, 206, 206, 0.25);
  border-radius: 20px !important;

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

const SearchHeaderGrid = styled(Grid)``;
const SearchBodyGrid = styled(Grid)``;

const SearchBody__HeadeGridr = styled(Grid)``;
const SearchBody__bodyGrid = styled(Grid)`
  padding-top: 15px;
`;
const SearchBody__FooterGrid = styled(Grid)``;

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

const goldColor = { color: "#FEC565" };
const singleInfoStyle = {
  paddingLeft: "15px",
  fontSize: "1rem",
  fontFamily: " Montserrat, sans-serif",
  fontWeight: "400",
  lineHeight: "1.5",
};

const SingletDoctorCon = { paddingLeft: "7.5px", fontSize: 16 };

const IconeColor = { color: "#2D50EF" };
const SearchCard = ({ Doctor }) => {
  const {
    id,
    avtarImg,
    name,
    degree,
    location,
    Specialty,
    rate,
    CommunicationMethods,
    ReservationDates,
    price,
  } = Doctor;
  console.log(
    id,
    avtarImg,
    name,
    degree,
    location,
    Specialty,
    rate,
    CommunicationMethods,
    ReservationDates,
    price
  );
  return (
    <CustomePaper>
      <SearchCardWraperGrid container>
        <SearchHeaderGrid
          item
          container
          sm={3}
          xs={12}
          justify="center"
          alignItems="flex-start"
        >
          <ImgWraper>
            <img src={avtarImg} alt="" />
          </ImgWraper>
        </SearchHeaderGrid>

        <SearchBodyGrid item container sm={9} xs={12}>
          <SearchBody__HeadeGridr
            container
            justify="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography variant="h5" gutterBottom>
                {` Dr. ${name.firstName} ${name.lastName}`}
              </Typography>
              <Typography
                variant="span"
                component="p"
                style={{ paddingBottom: 7 }}
              >
                {`${degree}`}
              </Typography>

              <DoctorRating RatingVal={rate} />
            </Box>

            <Typography
              style={{ color: "rgb(45 80 239)", fontSize: 24 }}
              variant="h6"
              gutterBottom
            >
              {`$${price}`}
            </Typography>
          </SearchBody__HeadeGridr>

          <SearchBody__bodyGrid container>
            <Grid item md={6}>
              <SingleInfo>
                <FaBriefcaseMedical size={17} style={{ color: "#2D50EF" }} />
                <Typography variant="p" component="p" style={singleInfoStyle}>
                  {`${Specialty}`}
                </Typography>
              </SingleInfo>

              <SingleInfo>
                <IoLocationSharp size={17} style={{ color: "#2D50EF" }} />
                <Typography variant="p" component="p" style={singleInfoStyle}>
                  {`${location.Governorate}, ${location.Country}`}
                </Typography>
              </SingleInfo>

              <ContactDoctorWraper>
                <ContactDoctor>
                  <BiClinic
                    size={17}
                    style={{
                      color: CommunicationMethods.clinc ? "#2D50EF" : "gray",
                    }}
                  />
                  <Typography
                    variant="span"
                    component="span"
                    style={SingletDoctorCon}
                  >
                    Clinc
                  </Typography>
                </ContactDoctor>

                <ContactDoctor>
                  <ImHome
                    size={15}
                    style={{
                      color: CommunicationMethods.home ? "#2D50EF" : "gray",
                    }}
                  />
                  <Typography
                    variant="span"
                    component="span"
                    style={SingletDoctorCon}
                  >
                    Home
                  </Typography>
                </ContactDoctor>

                <ContactDoctor>
                  <BsFillCameraVideoFill
                    size={16}
                    style={{
                      color: CommunicationMethods.video ? "#2D50EF" : "gray",
                    }}
                  />
                  <Typography
                    variant="span"
                    component="span"
                    style={SingletDoctorCon}
                  >
                    Vedio
                  </Typography>
                </ContactDoctor>
              </ContactDoctorWraper>
            </Grid>

            <Grid item md={6}>
              <Hidden xsDown>
                <AvailableTimeLine ReservationDates={ReservationDates} />
              </Hidden>
            </Grid>
          </SearchBody__bodyGrid>

          <SearchBody__FooterGrid item style={{ paddingTop: 20 }} container>
            <Grid item sm={6}>
              <Hidden xsDown>
                <GradientButton
                  width="150px"
                  icon={<FaSearch color="#FFF" size={12} />}
                >
                  View Profile
                </GradientButton>
              </Hidden>
            </Grid>

            <Grid item sm={6}>
              <GradientButton
                width="150px"
                lightCircle
                blueBg
                style={{ padding: "5px 22px !important" }}
                icon={<FaSearch color="#hsl(229, 86%, 56%)" size={12} />}
              >
                Book Now
              </GradientButton>
            </Grid>
          </SearchBody__FooterGrid>
        </SearchBodyGrid>
      </SearchCardWraperGrid>
    </CustomePaper>
  );
};

export default SearchCard;
