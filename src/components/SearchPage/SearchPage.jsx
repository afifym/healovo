import { Box, Grid } from "@material-ui/core";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import SearchCard from "./SearchCard/SearchCard";
import PaginationSearch from "./PaginationSearch";

import DrawerFilter from "./Filter/DrawerFilter";
import { useState } from "react";
import { DoctorsData } from "../../DoctorsData";
import SearchResultHeader from "./SearchResultHeader";
import { useEffect } from "react";

const defaultFilterSetting = [
  {
    filterName: "Location",
    filterNameDB: "communicationMethods",
    filterData: {
      any: true,
      video: false,
      home: false,
      clinic: false,
    },
  },

  {
    filterName: "Gender",
    filterNameDB: "gender",
    filterData: { any: true, male: false, female: false },
  },
  {
    filterName: "Rating",
    filterNameDB: "rate",
    filterData: { any: true, 2: false, 3: false, 4: false, 5: false },
  },
  {
    filterName: "Price",
    filterNameDB: "price",
    filterData: {
      any: true,
      "Less than $30": false,
      "$30-$50": false,
      "More than $50": false,
    },
  },
  {
    filterName: "open now",
    filterNameDB: "open now",
    filterData: { "open now": false },
  },
];

let schena = {
  rate: "2",

  communicationMethods: { clinic: true, home: true, video: true },

  gender: "male",

  price: 35,
};
/*
const hand = () => {
  defaultFilterSetting.map((singleFilter)=>{
   

    for(let item in singleFilter.filterData ){
      if(singleFilter.filterData[item] == true){

      } 
    }
  })
};

const handl = (){
  switch(title){
    case 'Location':

    case 'Gender':

      case 'Rating':

        case 'Price':

          case 'open now':
  }
}

const handlB = (filter)=>{
  const doctorsCopy = JSON.parse(JSON.stringify(doctors));
  const realFilter ;
  switch(filter){

    case 'rate' :
    
    case 'gender':
      case 'price' :
        case 'communicationMethods' :

  }
    
      doctorsCopy.map((doctor)=>{
       doctor[realFilter] ==
      })
}

*/
const SearchPage = () => {
  const [doctors, setdoctors] = useState(DoctorsData);
  const [doctorsFilter, setDoctorsFilter] = useState(doctors);
  const [filterSettings, setFilterSettings] = useState(defaultFilterSetting);

  const handleCheckBoxChange = (event, idx) => {
    const filterSettingCopy = JSON.parse(JSON.stringify(filterSettings));

    if (event.target.name != "any") {
      filterSettingCopy[idx]["filterData"] = {
        ...filterSettingCopy[idx]["filterData"],
        [event.target.name]: event.target.checked,
        any: false,
      };
    } else if (event.target.name == "any") {
      for (const item in filterSettingCopy[idx]["filterData"]) {
        filterSettingCopy[idx]["filterData"][item] = false;
      }
      filterSettingCopy[idx]["filterData"] = {
        ...filterSettingCopy[idx]["filterData"],
        [event.target.name]: event.target.checked,
        any: true,
      };
    } else {
      filterSettingCopy[idx]["filterData"] = {
        ...filterSettingCopy[idx]["filterData"],
        [event.target.name]: event.target.checked,
      };
    }

    setFilterSettings(filterSettingCopy);
  };
  const generalfun = () => {
    filterSettings.map((filter) => {
      const dFS = filter.filterNameDB;
      const fData = filter.filterData;
      const filterDoctorResult = [];
      if (dFS == "gender" || dFS == "communicationMethods" || dFS == "rate") {
        for (const filterItem in fData) {
          if (fData[filterItem] == true) {
            let x = doctors.filter((doctor) => doctor[dFS] == filterItem);
            x.length > 0 && filterDoctorResult.push(x);
            console.log("xxxxxxxx", filterDoctorResult);
          }
        }
      }
    });
  };

  useEffect(() => {
    generalfun();
  }, [handleCheckBoxChange]);

  return (
    <div style={{ background: "#F1F2F4" }}>
      <Container style={{ padding: "100px 0 50px 0" }}>
        <SearchBar />

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <Box pr={5}>
                <Filter
                  filterSettings={filterSettings}
                  onCheckBoxChange={handleCheckBoxChange}
                />
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <SearchResultHeader searchResultNumber={doctorsFilter.length} />
            {doctorsFilter.map((doctor, idx) => (
              <SearchCard key={idx} Doctor={doctor} />
            ))}

            <PaginationSearch />
          </Grid>
        </Grid>
      </Container>
      <Hidden mdUp>
        <DrawerFilter />
      </Hidden>
    </div>
  );
};

export default SearchPage;
