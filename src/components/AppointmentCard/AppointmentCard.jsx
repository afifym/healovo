import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Styled from "styled-components/macro";

const Container = Styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 250px;
    display: inline-block;
    margin: 0 30px;

    @media (max-width: 960px) {
      margin: 0;
    }
  }
`;

const Wrapper = Styled.div`
 textAlign: center;
  marginTop: 50px;
`;

const useStyles = makeStyles({
  title: {
    background: "#2D50EF",
    padding: "15px",
    color: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pos: {
    display: "flex",
    flexWrap: "wrap",
    background: "linear-gradient(to right bottom, #FFFFFF, #e7e8e9)",
    padding: "15px",
  },
  text: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: "#2D50EF",
  },
});

export default function SimpleCard({ name, type }) {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Card className="card">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h6"
              component={"span"}
            >
              <AssignmentIndIcon
                fontSize="large"
                style={{ marginRight: "8px" }}
              />
              {name}
            </Typography>

            <Typography
              className={classes.pos}
              color="textSecondary"
              component={"span"}
            >
              <div className={classes.text}>
                <DateRangeIcon
                  fontSize="small"
                  style={{ marginRight: "8px" }}
                />
                <p>Jan 10th</p>
              </div>

              <div className={classes.text}>
                <AddLocationIcon
                  fontSize="small"
                  style={{ marginRight: "8px" }}
                />
                <p>{type}</p>
              </div>

              <div className={classes.text}>
                <QueryBuilderIcon
                  fontSize="small"
                  style={{ marginRight: "8px" }}
                />
                <p>6:00 pm to 7:00 pm</p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Wrapper>
    </Container>
  );
}
