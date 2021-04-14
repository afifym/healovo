import { Container, Box } from '@material-ui/core';
import { FaLaptopMedical, FaUserNurse, FaCalendarCheck } from 'react-icons/fa';
import RoadmapItem from './RoadmapItem/RoadmapItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .roadmap-line {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
    width: 4px;
  }
`;

const Roadmap = () => {
  return (
    <Wrapper>
      <Container>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='space-between'
          style={{ height: '600px' }}
        >
          <RoadmapItem
            number='01'
            subtitle='Choose your'
            title='Appointment Type'
            icon={() => (
              <>
                <FaLaptopMedical size={35} />{' '}
                <img
                  className='roadmap-line'
                  src='/assets/svg/roadmap-line.svg'
                  alt='roadmap'
                />{' '}
              </>
            )}
          />
          <RoadmapItem
            number='02'
            subtitle='Select from'
            title='The Best Doctors'
            icon={() => <FaUserNurse size={35} />}
          />
          <RoadmapItem
            number='03'
            subtitle='Book your'
            title='Next Appointment'
            icon={() => <FaCalendarCheck size={35} />}
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Roadmap;
