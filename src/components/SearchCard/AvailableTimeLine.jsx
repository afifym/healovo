import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const CustomeListItem = styled(ListItem)`
  padding: 0 !important;
  margin-bottom: 10px !important;
`;

const ListStyle = {
  color: "#2d50ef",
  fontWeight: 700,
  padding: 0,
};

const SpanStyle = { paddingRight: 15, width: 55 };

const AvailableTimeLine = ({ ReservationDates }) => {
  return (
    <List style={ListStyle}>
      {ReservationDates.map((singleReserv) => (
        <CustomeListItem>
          <Typography style={SpanStyle} compotent="span">
            {singleReserv.day}
          </Typography>
          {singleReserv.availablePeriod}
        </CustomeListItem>
      ))}
    </List>
  );
};

export default AvailableTimeLine;
