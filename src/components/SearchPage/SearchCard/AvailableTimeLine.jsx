import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const CustomeListItem = styled(ListItem)`
  padding: 0 !important;
  margin-bottom: 10px !important;
`;

const ListStyle = {
  color: '#2d50ef',
  fontWeight: 700,
  padding: 0,
  width: '250px',
};

const SpanStyle = { paddingRight: 15, width: 55 };
const resDates = [
  { day: 'Mon', period: '1:00 pm - 6:00 pm' },
  { day: 'Tue', period: '1:00 pm - 6:00 pm' },
  { day: 'Wed', period: '5:00 pm - 12:00 pm' },
];
const AvailableTimeLine = ({ reservationDates }) => {
  return (
    <List style={ListStyle}>
      {resDates?.map((singleReserv, idx) => (
        <CustomeListItem key={idx}>
          <Typography style={SpanStyle} compotent='span'>
            {singleReserv.day}
          </Typography>
          {singleReserv.period}
        </CustomeListItem>
      ))}
    </List>
  );
};

export default AvailableTimeLine;
