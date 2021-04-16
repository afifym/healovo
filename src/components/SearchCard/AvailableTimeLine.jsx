import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const CustomeListItem = styled(ListItem)`
  padding: 0 !important;
  margin-bottom: 10px !important;
`;

const AvailableTimeLine = () => {
  return (
    <List>
      <CustomeListItem>
        <Typography variant="span" compotent="span" gutterBottom>
          Mondy
        </Typography>
        100 PM - 6:00 PM
      </CustomeListItem>
      <CustomeListItem>Mondy 100 PM - 6:00 PM</CustomeListItem>
      <CustomeListItem>Mondy 100 PM - 6:00 PM</CustomeListItem>
    </List>
  );
};

export default AvailableTimeLine;
