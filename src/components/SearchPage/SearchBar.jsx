import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "styled-components";
import CustomeSearchInput from "./CustomeSearchInput";
import CustomeSelectInput from "./CustomeSelectInput";
import { FaCity, FaUserMd } from "react-icons/fa";
import { useState } from "react";

const SearchBarWraper = styled.div`
    display:flex;
    justify-content:center;
    align-items :center; 
    flex-direction column 

  
    
`;

const SearchTabBtn = styled(Button)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25) !important;

  color: black;
  font-family: Montserrat;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 30px !important;
  text-transform: capitalize !important ;

  font-style: normal;
  font-weight: bold;
  &:hover {
    background: lightgray;
    box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25) !important;

    color: white;
  }
`;
const CustomeButtonGroup = styled(ButtonGroup)`
  border-radius: 100px !important;
  overflow: hidden !important;
  margin-bottom: 20px;
`;

const SearchBar = () => {
  const [searchBy, setSearchBy] = useState("name");
  const activeBtn = {
    backgroundColor: "#2D50EF",
    color: "white",
  };
  const showSearchInput = () => {
    switch (searchBy) {
      case "name":
        return <CustomeSearchInput />;
      case "specialty":
        return (
          <CustomeSelectInput
            SelectIconName={FaCity}
            selectData={["mohand", "mostafa", "abadlabary"]}
          />
        );
      case "city":
        return (
          <CustomeSelectInput
            SelectIconName={FaUserMd}
            selectData={["mohand", "mostafa", "abadlabary"]}
          />
        );
    }
  };
  return (
    <SearchBarWraper>
      <CustomeButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <SearchTabBtn
          onClick={() => setSearchBy("name")}
          style={searchBy == "name" ? activeBtn : {}}
          name="name"
        >
          Name
        </SearchTabBtn>
        <SearchTabBtn
          style={searchBy == "specialty" ? activeBtn : {}}
          onClick={() => setSearchBy("specialty")}
        >
          Specialty
        </SearchTabBtn>
        <SearchTabBtn
          style={searchBy == "city" ? activeBtn : {}}
          onClick={() => setSearchBy("city")}
          name="City"
        >
          City
        </SearchTabBtn>
      </CustomeButtonGroup>
      {showSearchInput()}
    </SearchBarWraper>
  );
};

export default SearchBar;
