import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "styled-components";
import CustomeSearchInput from "./CustomeSearchInput";
import CustomeSelectInput from "./CustomeSelectInput";
import { FaCity, FaUserMd } from "react-icons/fa";

const SearchBarWraper = styled.div`
    display:flex;
    justify-content:center;
    align-items :center; 
    flex-direction column 

  
    
`;

const SearchTabBtn = styled(Button)`
  background: #ffffff !important;
  box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25) !important;

  color: black !important;
  font-family: Montserrat;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 30px !important;
  text-transform: capitalize !important ;

  font-style: normal;
  font-weight: bold;
`;
const CustomeButtonGroup = styled(ButtonGroup)`
  border-radius: 100px !important;
  overflow: hidden !important;
  margin-bottom: 20px;
`;

const SearchBar = () => {
  const HandleClick = (e) => {
    console.log("event", e.target);
  };
  return (
    <SearchBarWraper>
      <CustomeButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>click</Button>
        <SearchTabBtn onClick={HandleClick} name="name">
          Name
        </SearchTabBtn>
        <SearchTabBtn onClick={HandleClick} name="specialty">
          Specialty
        </SearchTabBtn>
        <SearchTabBtn
          disableFocusRipple={true}
          disableElevation={true}
          onClick={HandleClick}
          name="City"
        >
          City
        </SearchTabBtn>
      </CustomeButtonGroup>

      <CustomeSearchInput />

      <CustomeSelectInput
        SelectIconName={FaCity}
        selectData={["mohand", "mostafa", "abadlabary"]}
      />
      <CustomeSelectInput
        SelectIconName={FaUserMd}
        selectData={["mohand", "mostafa", "abadlabary"]}
      />
    </SearchBarWraper>
  );
};

export default SearchBar;
