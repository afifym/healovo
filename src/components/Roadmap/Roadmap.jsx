import { Grid, Container, Typography } from '@material-ui/core';
import { FaLaptopMedical, FaUserNurse, FaCalendarCheck } from 'react-icons/fa';
import { GradientHolder } from '../../styles/shared';

const roadmapData = [
  {
    number: '01',
    sub: 'Choose your',
    main: 'Appointment Type',
    icon: () => <FaLaptopMedical size={35} />,
  },
  {
    number: '02',
    sub: 'Select from',
    main: 'The Best Doctors',
    icon: () => <FaUserNurse size={35} />,
  },
  {
    number: '03',
    sub: 'Book your next',
    main: 'Appointment',
    icon: () => <FaCalendarCheck size={35} />,
  },
];

const Roadmap = () => {
  return (
    <Container>
      <Grid
        container
        direction='column'
        style={{ width: '500px', margin: 'auto' }}
        spacing={10}
        className='debug'
      >
        {roadmapData?.map((item) => {
          return (
            <Grid key={item.number} item>
              <Grid container direction='row' alignItems='center' spacing={1}>
                <Grid item>
                  <GradientHolder primaryColor circle reverse>
                    {item.icon()}
                  </GradientHolder>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={2}
                    direction='row'
                    alignItems='center'
                  >
                    <Grid item>
                      <Typography
                        variant='h3'
                        color='primary'
                        display='inline'
                        style={{ fontWeight: 700 }}
                      >
                        {item.number}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color='primary'>{item.sub}</Typography>
                      <Typography
                        style={{ fontWeight: 700 }}
                        variant='h5'
                        color='primary'
                      >
                        {item.main}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Roadmap;
