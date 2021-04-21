import { Box, InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IoLocationSharp } from 'react-icons/io5';
import { makeStyles } from '@material-ui/core/styles';
import { FaMedkit } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { FaSearch } from 'react-icons/fa';
import GradientButton from '../shared/GradientButton/GradientButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { FaHome, FaClinicMedical, FaVideo } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  @media (max-width: 480px) {
    .feeling {
      font-size: 1.7rem;
    }
    .find {
      font-size: 2.5rem;
    }
    .book {
      font-size: 1.4rem !important;
    }
  }
`;

const StyledRadioControl = styled(FormControlLabel)`
  background: ${({ theme }) => theme.gradients.gradient1};
  border-radius: 15px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c7288;
  transition: color 0.2s ease;
  box-shadow: 7px 7px 30px rgba(180, 180, 180, 0.25);

  .MuiTypography-root {
    font-weight: 700;
  }

  ${({ isactive }) =>
    isactive &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.main1};
      .MuiTypography-root {
        color: ${({ theme }) => theme.colors.main1};
      }
      span {
        color: ${({ theme }) => theme.colors.main1};
      }
    `}

  @media (max-width: 420px) {
    width: 90px !important;
    height: 90px !important;
    margin: 0 !important;
  }
`;

const useStyles = makeStyles(() => ({
  field: {
    margin: '1em 0',
    display: 'block',
  },
  fontSmell: {
    fontSize: 10,
  },
  flexDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: '10px',
  },
  customeCountianer: {
    maxWidth: 580,
    minWidth: 320,
    margin: '0 auto',
    background: 'linear-gradient(152.21deg, #FFFFFF 48.23%, #CFCDC6 100%)',
    boxShadow: '4px 4px 30px rgba(91, 85, 85, 0.25)',
    borderRadius: '50px',
    padding: '80px 40px',
    ['@media (max-width:540px)']: {
      background: 'none',
      boxShadow: 'none',
      borderRadius: '0px',
      padding: '0 15px',
      paddingTop: 25,
    },
  },
  box: {
    width: '105.18px',
    height: '104.35px',
    background: 'linear-gradient(134.5deg, #FFFFFF 0.04%, #E7E8E9 99.79%)',
    boxShadow: '7px 7px 30px rgba(180, 180, 180, 0.25)',

    borderRadius: '20px',
    padding: 0,
    ['@media (max-width:576px)']: {
      width: 'auto',
      height: 'auto',
      padding: '10px 15px',
    },
  },

  heading: {
    fontWeight: 'bolder',
  },

  headingBg: {
    backgroundColor: '#EFC660',
    padding: '5px 10px',
    maxWidth: '340px',
    marginLeft: -10,
    ['@media (max-width:350px)']: {
      maxWidth: '320px',
      padding: '5px 10px',
      fontSize: '1.979rem',
    },
  },
  IconGroup: {
    padding: '60px 0 30px 0',
  },
  smellContainer: {
    maxWidth: 500,
    width: '90%',
    margin: '0 auto',
  },
}));

const IconWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: #6c7288;
  transition: all 0.2s ease;
`;

const RadioWrapper = styled.div`
  position: relative;
  ${({ isactive }) =>
    isactive &&
    css`
      & > span {
        color: ${({ theme }) => theme.colors.main1};
      }
    `}
`;

const Icon = ({ children }) => <IconWrapper>{children}</IconWrapper>;

const cities = [
  'Cairo',
  'Alexandria',
  'Luxor',
  'Aswan',
  'Giza',
  'Hurghada',
  'Ismailia',
  'Beni Suef',
];

const specialties = [
  'Pediatrician',
  'Obstetrician',
  'Surgeon',
  'Psychiatrist',
  'Cardiologist',
  'Dermatologist',
];

const initialFormData = {
  type: '',
  city: '',
  specialty: '',
  name: '',
};

const SearchCard = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let qString = ['/search?'];

    for (const key in formData) {
      if (formData[key] !== '') {
        if (qString.length === 1) {
          qString.push(`${key}=${formData[key].toLowerCase()}`);
        } else {
          qString.push(`&${key}=${formData[key].toLowerCase()}`);
        }
      }
    }
    qString = qString.join('');
    history.push(qString);
  };

  return (
    <Wrapper>
      <div className={classes.customeCountianer}>
        <header>
          <Typography
            variant='h4'
            className={`${classes.heading} ${classes.headingBg} feeling`}
            component='h2'
            color='secondary'
          >
            Not feeling well?
          </Typography>
          <Typography
            variant='h2'
            className={`${classes.heading} ${classes.customeHeading} find`}
            component='h2'
            color='secondary'
          >
            Find a Doctor
          </Typography>
          <Typography
            variant='h4'
            className={`${classes.heading} book`}
            style={{ fontSize: '1.7rem' }}
            component='h2'
            color='secondary'
          >
            Book an Appointment
          </Typography>
        </header>

        <form onSubmit={handleSubmit}>
          <FormControl
            component='fieldset'
            style={{ width: '100%', margin: '1em 0' }}
          >
            <RadioGroup
              row
              aria-label='position'
              name='position'
              defaultValue='clinic'
              style={{ width: '100%' }}
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <Box
                my={4}
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                style={{ width: '100%' }}
              >
                <RadioWrapper isactive={formData.type === 'clinic' ? 1 : 0}>
                  <Icon>
                    <FaHome size={40} />
                  </Icon>
                  <StyledRadioControl
                    isactive={formData.type === 'clinic' ? 1 : 0}
                    value='clinic'
                    control={
                      <Radio color='primary' style={{ visibility: 'hidden' }} />
                    }
                    label='Clinic'
                    labelPlacement='bottom'
                  />
                </RadioWrapper>

                <RadioWrapper isactive={formData.type === 'home' ? 1 : 0}>
                  <Icon>
                    <FaClinicMedical size={40} />
                  </Icon>
                  <StyledRadioControl
                    isactive={formData.type === 'home' ? 1 : 0}
                    value='home'
                    control={
                      <Radio color='primary' style={{ visibility: 'hidden' }} />
                    }
                    label='Home'
                    labelPlacement='bottom'
                  />
                </RadioWrapper>
                <RadioWrapper isactive={formData.type === 'video' ? 1 : 0}>
                  <Icon>
                    <FaVideo size={40} />
                  </Icon>
                  <StyledRadioControl
                    isactive={formData.type === 'video' ? 1 : 0}
                    value='video'
                    control={
                      <Radio
                        color='primary'
                        style={{ visibility: 'hidden' }}
                      ></Radio>
                    }
                    label='Video'
                    labelPlacement='bottom'
                  />
                </RadioWrapper>
              </Box>
            </RadioGroup>
          </FormControl>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <div style={{ width: '300px' }}>
              <FormControl fullWidth style={{ margin: '0.5em 0' }}>
                <InputLabel id='city'>
                  <Box display='flex' alignItems='center'>
                    <IoLocationSharp
                      size={20}
                      style={{ marginRight: '0.5em' }}
                    />
                    City
                  </Box>
                </InputLabel>
                <Select
                  labelId='city'
                  id='select-city'
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                >
                  {cities?.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth style={{ margin: '0.5em 0' }}>
                <InputLabel id='specialty'>
                  <Box display='flex' alignItems='center'>
                    <svg
                      width='14'
                      height='16'
                      viewBox='0 0 14 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ marginRight: '0.5em' }}
                    >
                      <path
                        d='M6.86453 8.33721C4.83556 8.33721 3.19115 6.65854 3.19115 4.58731C3.19115 2.51607 4.83556 0.837402 6.86453 0.837402C8.8935 0.837402 10.5379 2.51607 10.5379 4.58731C10.5379 6.65854 8.8935 8.33721 6.86453 8.33721ZM10.3083 13.259C10.3083 13.6486 10.0012 13.9621 9.61956 13.9621C9.23788 13.9621 8.9308 13.6486 8.9308 13.259C8.9308 12.8693 9.23788 12.5559 9.61956 12.5559C10.0012 12.5559 10.3083 12.8693 10.3083 13.259ZM4.1095 9.29227V10.7278C3.06201 10.9446 2.27281 11.8938 2.27281 13.0246V14.2462C2.27281 14.4689 2.42778 14.6622 2.64302 14.7062L3.5671 14.8937C3.6905 14.9201 3.81104 14.838 3.83687 14.7091L3.92583 14.2492C3.95166 14.1232 3.8713 13.9972 3.74503 13.9738L3.19115 13.8595V13.0246C3.19115 11.1848 5.94619 11.1174 5.94619 13.0803V13.8625L5.39231 13.9767C5.26891 14.0031 5.18855 14.1261 5.21151 14.2521L5.30048 14.712C5.3263 14.838 5.44684 14.9201 5.57024 14.8966L6.46562 14.7736C6.69234 14.7413 6.86166 14.5451 6.86166 14.3078V13.0246C6.86166 11.8938 6.07246 10.9475 5.02497 10.7278V9.40359C5.08811 9.4241 5.15125 9.43582 5.21438 9.45925C5.73095 9.64382 6.28483 9.74636 6.86166 9.74636C7.4385 9.74636 7.99237 9.64382 8.50894 9.45925C8.72131 9.38308 8.93654 9.33621 9.15752 9.30691V11.6975C8.49459 11.8996 8.00959 12.5207 8.00959 13.2619C8.00959 14.1671 8.72992 14.9025 9.61669 14.9025C10.5035 14.9025 11.2238 14.1671 11.2238 13.2619C11.2238 12.5207 10.7388 11.8996 10.0759 11.6975V9.34207C11.9011 9.65554 13.2929 11.261 13.2929 13.2121V14.5246C13.2929 15.2482 12.7161 15.837 12.0073 15.837H1.7218C1.01296 15.837 0.436123 15.2482 0.436123 14.5246V13.2121C0.436123 11.1028 2.06618 9.3948 4.1095 9.29227Z'
                        fill='#6C7288'
                      />
                    </svg>
                    Specialty
                  </Box>
                </InputLabel>
                <Select
                  labelId='specialty'
                  id='select-specialty'
                  value={formData.specialty}
                  onChange={(e) =>
                    setFormData({ ...formData, specialty: e.target.value })
                  }
                >
                  {specialties?.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                id='standard-basic'
                style={{ margin: '0.5em 0' }}
                label={
                  <div className={classes.flexDiv}>
                    <FaMedkit size={16} />
                    <span className={(classes.fontSmell, classes.marginLeft)}>
                      Doctor name
                    </span>
                  </div>
                }
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            mt={3}
          >
            <GradientButton
              className={classes.searchBtn}
              width='210px'
              icon={<FaSearch color='#ffffff' size={15} />}
              type='submit'
            >
              Search
            </GradientButton>
          </Box>
        </form>
      </div>
    </Wrapper>
  );
};

export default SearchCard;
