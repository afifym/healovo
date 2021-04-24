import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Styled from "styled-components/macro";
import DeleteIcon from "@material-ui/icons/Delete";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      margin: "15px",
    },
  },
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <Title>
          <LockIcon fontSize="large" />
          <Section>Reset Password</Section>
        </Title>
        <Wrapper>
          <h4 className="title">Password</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="password"
            className="width"
          />
        </Wrapper>
        <Wrapper>
          <h4 className="title">Confirm Password</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="password"
            className="width"
          />
        </Wrapper>

        <div className="btnWrapper">
          <Button variant="contained" className="btn">
            Save
          </Button>
          <Button variant="contained" className="btn cancel">
            Cancel
          </Button>
        </div>
      </form>
      <Title>
        <DeleteIcon fontSize="large" />
        <Section>Delete Account</Section>
      </Title>
      <h4 className="deleteParagraph">
        This action cannot be undone.
        <br /> This will permanently delete your account.
      </h4>
      <Wrapper>
        <h4 className="title">Confirm Password</h4>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          className="width"
        />
      </Wrapper>
      <Button variant="contained" className="btn deleteBtn">
        Delete Account
      </Button>
    </Container>
  );
};
const Container = Styled.div`
    .btn {
        color: white;
        background: #2D50EF;
        width: 150px;
        margin: 30px 10px 0 10px;

        &:hover {
            background: #2D50EF;
        }
    }

    .cancel {
        background: gray;

        &:hover {
            background: gray;
        }
    }

    .deleteParagraph {
        margin: 25px 0;
    }

    .deleteBtn {
        background: red;

        &:hover {
            background: red;
        }
    }

    
    @media (max-width: 760px) {
        .btnWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

const Wrapper = Styled.div`
display: flex;

.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 200px; 
}

.width {
    width: 315px;
}


@media (max-width: 500px) {
        flex-direction: column;

        .width {
            width: 285px;
        }

        .title {
            margin: 20px 0 10px 0;
            width: 150px;
        }     
    }
`;

const Title = Styled.div`
    color: #2D50EF;
    margin: 50px 0 10px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2D50EF;
    width: 400px;

    p {
        margin-left: 9px;
        font-size: 14px;
    };

    @media (max-width: 500px) {
        width: 240px
    }
`;

const Section = Styled.h2`
    margin-left: 10px;

`;

export default Settings;
