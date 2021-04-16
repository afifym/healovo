import { Box, Button, Grid } from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import GradientButton from "./../shared/GradientButton/GradientButton";
import { useState } from "react";
import AvailableTimeLine from "./AvailableTimeLine";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

const CustomePaper = styled(Paper)`
  background: #ffffff;
  box-shadow: 0px 0px 32px 28px rgba(206, 206, 206, 0.25);
  border-radius: 20px !important;

  margin-bottom: 25px;
  @media (min-width: 960px) {
    padding: 20px 30px;
  }
  @media (max-width: 959px) {
    padding: 20px 25px;
  }
  @media (max-width: 340px) {
    padding: 20px 15px;
  }

  @media (max-width: 600px) {
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
`;

const ContactDoctorWraper = styled(Box)`
  margin-bottom: 10px;
  display: flex;
`;
const ContactDoctor = styled(Box)`
  padding-right: 15px;
`;

const goldColor = { color: "#FEC565" };
const singleInfoStyle = { paddingLeft: "15px" };

const SingletDoctorCon = { paddingLeft: "7.5px" };

const SearchCard = () => {
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
            <img src="doctorAvtar.png" alt="" />
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
                Dr. John Smith
              </Typography>
              <Typography
                variant="span"
                component="p"
                style={{ paddingBottom: 7 }}
              >
                Masters in medicine
              </Typography>

              <Grid container alignItems="center">
                <AiFillStar style={goldColor} />
                <AiFillStar style={goldColor} />
                <BsStarHalf style={goldColor} />
                <AiOutlineStar style={goldColor} />
                <AiOutlineStar style={goldColor} />
                <Typography
                  component="span"
                  style={{
                    fontSize: "12px",
                    paddingLeft: 5,
                    paddingBottom: 1.5,
                  }}
                >
                  (4)
                </Typography>
              </Grid>
            </Box>

            <Typography variant="h6" gutterBottom>
              $35
            </Typography>
          </SearchBody__HeadeGridr>

          <SearchBody__bodyGrid container>
            <Grid item md={6}>
              <SingleInfo>
                <FaBriefcaseMedical style={{ color: "#2D50EF" }} />
                <Typography
                  variant="p"
                  component="span"
                  style={singleInfoStyle}
                >
                  Dr. John Smith
                </Typography>
              </SingleInfo>

              <SingleInfo>
                <FaBriefcaseMedical style={{ color: "#2D50EF" }} />
                <Typography
                  variant="p"
                  component="span"
                  style={singleInfoStyle}
                >
                  Dr. John Smith
                </Typography>
              </SingleInfo>

              <ContactDoctorWraper>
                <ContactDoctor>
                  <FaBriefcaseMedical style={{ color: "#2D50EF" }} />
                  <Typography
                    variant="span"
                    component="span"
                    style={SingletDoctorCon}
                  >
                    Clinc
                  </Typography>
                </ContactDoctor>

                <ContactDoctor>
                  <FaBriefcaseMedical style={{ color: "#2D50EF" }} />
                  <Typography
                    variant="span"
                    component="span"
                    style={SingletDoctorCon}
                  >
                    Home
                  </Typography>
                </ContactDoctor>

                <ContactDoctor>
                  <FaBriefcaseMedical style={{ color: "#2D50EF" }} />
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
                <AvailableTimeLine />
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
