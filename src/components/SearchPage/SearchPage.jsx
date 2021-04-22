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

const SearchPage = () => {
  const [doctors, setdoctors] = useState(DoctorsData);
  const [doctorsFilter, setDoctorsFilter] = useState(doctors);
  const [filterSettings, setFilterSettings] = useState(defaultFilterSetting);

  const goodBye = () => {
    let x = [
      {
        $or: [
          { rate: "2" }, // Starts with "lock"
          { rate: "3" }, // Does not have "arts"
        ],
      },
      {
        $or: [
          { gender: "female" }, // Starts with "lock"
          { gender: "male" }, // Does not have "arts"
        ],
      },
    ];
    const arrRsult = [];
    filterSettings.map((singleFilter) => {
      const singleFObj = { $or: [] };
      for (const filterItem in singleFilter["filterData"]) {
        if (
          singleFilter["filterData"][filterItem] == true &&
          filterItem != "any"
        ) {
          singleFObj["$or"].push({
            [singleFilter["filterNameDB"]]: filterItem,
          });
        }
      }
      singleFObj["$or"].length !== 0 && arrRsult.push(singleFObj);
    });
    console.log("ssssssss", arrRsult);
    return arrRsult;
  };

  const handleFilter = () => {
    const fuse = new Fuse(doctors, {
      keys: [
        "rate",
        "gender",
        "price",
        "communicationMethods.clinic",
        "communicationMethods.video",
        "communicationMethods.home",
      ],
    });
    console.log("fuse", fuse);

    const result = fuse.search({
      $and: [goodBye()],
    });

    console.log("result", result);
    const stateResult = result.map((result) => result.item);
    console.log("stateResult", stateResult);
    setDoctorsFilter(stateResult);
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
  const generalfun = () => {
    const filterDoctorResult = [];
    const doctorFilterResult = [];
    filterSettings.map((filter) => {
      const dFS = filter.filterNameDB;
      const fData = filter.filterData;

      if (dFS == "gender" || dFS == "rate") {
        for (const filterItem in fData) {
          if (fData[filterItem] == true) {
            let x = doctors.filter((doctor) => doctor[dFS] == filterItem);

            if (x.length > 0) {
              let theCompeletArray = [...x];
              for (let i = 0; i < x.length; i++) {
                if (filterDoctorResult.length > 0) {
                  for (let j = 0; j < filterDoctorResult.length; j++) {
                    if (x[i].id == filterDoctorResult[j].id) {
                      theCompeletArray = theCompeletArray.filter(
                        (doctor) => doctor.id != x[i].id
                      );
                    }
                  }
                } else {
                }
              }

              filterDoctorResult.push(...theCompeletArray);
            }
          }
        }
      }
    });

    console.log("xxxxxxxx", filterDoctorResult);
    return filterDoctorResult;
  };

  useEffect(() => {
    const reuslt = generalfun();
    if (reuslt.length == 0) {
      setDoctorsFilter(doctors);
    } else {
      setDoctorsFilter(reuslt);
    }

    goodBye();
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
