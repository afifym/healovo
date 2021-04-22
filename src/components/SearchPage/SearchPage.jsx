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
import Fuse from "fuse.js";

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
      "<100": false,
      "100-200": false,
      ">200": false,
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

const SearchPage = () => {
  const [doctors, setdoctors] = useState(DoctorsData);
  const [doctorsFilter, setDoctorsFilter] = useState(doctors);
  const [filterSettings, setFilterSettings] = useState(defaultFilterSetting);

  const handlClaer = () => {
    setFilterSettings(defaultFilterSetting);
  };

  const getPriceStr = (strDoctor) => {
    let spiltStr = strDoctor.split(`"price":"`)[1];
    spiltStr = spiltStr.split(`",`)[0];
    spiltStr = parseInt(spiltStr);
    return spiltStr;
  };
  const goodBye = () => {
    const arrRsult = [];
    filterSettings.map((singleFilter) => {
      for (const filterItem in singleFilter["filterData"]) {
        if (
          singleFilter["filterData"][filterItem] == true &&
          filterItem != "any"
        ) {
          if (
            [singleFilter["filterNameDB"]] == "gender" ||
            [singleFilter["filterNameDB"]] == "rate"
          ) {
            arrRsult.push(
              `"${[singleFilter["filterNameDB"]]}":"${filterItem}"`
            );
          }

          if ([singleFilter["filterNameDB"]] == "communicationMethods") {
            console.log(`"${filterItem}":${true}`);
            arrRsult.push(`"${filterItem}":${true}`);
          }

          if ([singleFilter["filterNameDB"]] == "price") {
            doctors.filter((doctor) => {
              let strDoctor = JSON.stringify(doctor);
              let spiltStr = getPriceStr(strDoctor);

              if (filterItem == "<100" && spiltStr < 100) {
                arrRsult.push(
                  `"${[singleFilter["filterNameDB"]]}":"${spiltStr}"`
                );
              }
              if (
                filterItem == "100-200" &&
                100 <= spiltStr &&
                spiltStr <= 200
              ) {
                arrRsult.push(
                  `"${[singleFilter["filterNameDB"]]}":"${spiltStr}"`
                );
              }
              if (filterItem == ">200" && spiltStr > 200) {
                arrRsult.push(
                  `"${[singleFilter["filterNameDB"]]}":"${spiltStr}"`
                );
              }
              console.log(`strDoctor.splic`, spiltStr);
            });
          }
        }
      }
    });
    console.log("ssssssss", arrRsult);
    return arrRsult;
  };

  const handleFilter = () => {
    let result = goodBye();

    let filterDoctorss = doctors.filter((doctor) => {
      let strDoctor = JSON.stringify(doctor);
      console.log("strDoctor", strDoctor);
      let xx = result.find((res) => {
        return strDoctor.search(res) != -1;
      });

      if (xx) {
        return doctor;
      }
    });
    console.log("filterDoctorss", filterDoctorss);
    return filterDoctorss;
  };

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

  useEffect(() => {
    goodBye();
    setDoctorsFilter(handleFilter());
  }, [filterSettings]);

  return (
    <div style={{ background: "#F1F2F4" }}>
      <Container style={{ padding: "100px 0 50px 0" }}>
        <SearchBar />

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <Box pr={5}>
                <Filter
                  onClear={handlClaer}
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
