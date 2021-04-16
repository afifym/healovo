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

const SpanStyle = { paddingRight: 15 };

const AvailableTimeLine = () => {
  return (
    <List style={ListStyle}>
      <CustomeListItem>
        <Typography style={SpanStyle} compotent="span">
          Mondy
        </Typography>
        100 PM - 6:00 PM
      </CustomeListItem>
      <CustomeListItem>
        <Typography style={SpanStyle} compotent="span">
          Mondy
        </Typography>
        100 PM - 6:00 PM
      </CustomeListItem>
      <CustomeListItem>
        <Typography style={SpanStyle} compotent="span">
          Mondy
        </Typography>
        100 PM - 6:00 PM
      </CustomeListItem>
    </List>
  );
};

export default AvailableTimeLine;
