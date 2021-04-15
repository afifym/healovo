import { Box, Button, Grid } from "@material-ui/core"
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";




const SearchCardWraperGrid = styled(Grid)`
@media (min-width: 960px) {
    padding:20px  0 20px 20px
  }`

const SearchHeaderGrid = styled(Grid)``
const SearchBodyGrid = styled(Grid)``


const SearchBody__HeadeGridr = styled(Grid)``
const SearchBody__bodyGrid = styled(Grid)`
padding-top:15px;`
const SearchBody__FooterGrid = styled(Grid)``


const ImgWraper = styled.div`
padding-right:30px;
max-width:200px;
img{
    width:100%;
    height:auto;
}
`

const SingleInfo = styled(Box)`
margin-bottom:10px`

const ContactDoctorWraper = styled(Box)`
margin-bottom:10px;
display:flex ;
`
const ContactDoctor = styled(Box)`
padding-right:20px
`


const goldColor = { color: '#FEC565' }
const singleInfoStyle = { paddingLeft: '15px' }

const SingletDoctorCon = { paddingLeft: '7.5px' }

const SearchCard = () => {
    return (
        <SearchCardWraperGrid container>

            <SearchHeaderGrid item container
                sm={3}
                xs={12}
                justify='center'
                alignItems='flex-start'>
                <ImgWraper>
                    <img src="doctorAvtar.png" alt="" />
                </ImgWraper>
            </SearchHeaderGrid>

            <SearchBodyGrid item container sm={9} xs={12}>

                <SearchBody__HeadeGridr
                    container
                    justify='space-between'
                    alignItems='flex-start'
                >
                    <Box>
                        <Typography variant="h6" gutterBottom >
                            Dr. John Smith
                        </Typography>
                        <Typography variant="span"  >
                            Masters in medicine
                        </Typography>


                        <Grid
                            container
                            alignItems="center" >
                            <AiFillStar style={goldColor} />
                            <AiFillStar style={goldColor} />
                            <BsStarHalf style={goldColor} />
                            <AiOutlineStar style={goldColor} />
                            <AiOutlineStar style={goldColor} />
                            <Typography component="span" style={{ fontSize: '12px' }} >
                                (4)
                                </Typography>
                        </Grid>
                    </Box>

                    <Typography variant="h6" gutterBottom >
                        $35
                    </Typography>


                </SearchBody__HeadeGridr>

                <SearchBody__bodyGrid>
                    <SingleInfo>
                        <FaBriefcaseMedical />
                        <Typography variant="p" component="span" style={singleInfoStyle} >
                            Dr. John Smith
                        </Typography>
                    </SingleInfo>

                    <SingleInfo>
                        <FaBriefcaseMedical />
                        <Typography variant="p" component="span" style={singleInfoStyle} >
                            Dr. John Smith
                        </Typography>
                    </SingleInfo>

                    <ContactDoctorWraper>

                        <ContactDoctor>
                            <FaBriefcaseMedical />
                            <Typography variant="span" component="span" style={SingletDoctorCon} >
                                Clinc
                        </Typography>
                        </ContactDoctor>

                        <ContactDoctor>
                            <FaBriefcaseMedical />
                            <Typography variant="span" component="span" style={SingletDoctorCon} >
                                Clinc
                        </Typography>
                        </ContactDoctor>

                        <ContactDoctor>
                            <FaBriefcaseMedical />
                            <Typography variant="span" component="span" style={SingletDoctorCon} >
                                Clinc
                        </Typography>
                        </ContactDoctor>

                    </ContactDoctorWraper>

                </SearchBody__bodyGrid>

                <SearchBody__FooterGrid item container>
                    <Button>Book</Button>
                </SearchBody__FooterGrid>

            </SearchBodyGrid>


        </SearchCardWraperGrid>
    );
}

export default SearchCard;