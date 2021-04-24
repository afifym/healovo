import { Box, Grid } from '@material-ui/core';
import Filter from './Filter/Filter';
import SearchBar from './SearchBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import SearchCard from './SearchCard/SearchCard';
import PaginationSearch from './PaginationSearch';
import DrawerFilter from './Filter/DrawerFilter';
import { useState } from 'react';
import SearchResultHeader from './SearchResultHeader';
import { useEffect } from 'react';
import Fuse from 'fuse.js';
import qs from 'query-string';
import { fetchDoctors } from '../../utils/firebase';

const defaultFilterSetting = [
  {
    filterName: 'Location',
    filterNameDB: 'communicationMethods',
    filterData: {
      any: true,
      video: false,
      home: false,
      clinic: false,
    },
  },

  {
    filterName: 'Gender',
    filterNameDB: 'gender',
    filterData: { any: true, male: false, female: false },
  },
  {
    filterName: 'Rating',
    filterNameDB: 'rate',
    filterData: { any: true, 2: false, 3: false, 4: false, 5: false },
  },
  {
    filterName: 'Price',
    filterNameDB: 'price',
    filterData: {
      any: true,
      '<100': false,
      '100-200': false,
      '>200': false,
    },
  },
];

const SearchPage = ({ location }) => {
  const [doctors, setdoctors] = useState([]);
  const [doctorsFilter, setDoctorsFilter] = useState([]);
  const [filterSettings, setFilterSettings] = useState(defaultFilterSetting);
  const [page, setPage] = useState(1);

  const handlePageView = (event, value) => {
    const doctorsCopy = JSON.parse(JSON.stringify(doctorsFilter));
    const doctorData = doctorsCopy.splice((1 - value) * 4, 4);
    setdoctorPagination(doctorData);

    setPage(value);
  };

  useEffect(() => {
    let qResult = handleQuerySring();
    qResult.length > 0 && setDoctorsFilter(qResult);

    const getDoctors = async () => {
      const data = await fetchDoctors();
      console.log(data);
      setdoctors(data);
      setDoctorsFilter(data);
    };
    getDoctors();
  }, []);

  const handleQuerySring = () => {
    let qsResult = qs.parse(location.search);
    let spiltStr = qsResult?.name?.split(' ');
    spiltStr == undefined && (spiltStr = 'asda');
    const CM = `communicationMethods.${qsResult.type}`;
    const fuse = new Fuse(doctorsFilter, {
      keys: [
        'name.first',
        'name.last',
        'specialty',
        'location',
        `communicationMethods.${qsResult.type}`,
      ],
    });

    const fuseResult = fuse.search({
      $and: [
        { 'name.first': spiltStr[0] || '' },
        { 'name.last': spiltStr[1] || '' },
        { specialty: qsResult.specialty || '' },
        { location: qsResult.city || '' },
        { [`communicationMethods.${qsResult.type}`]: `${true}` || '' },
      ],
    });

    const queryiMade = `http://localhost:3000/searchresult?type=home&city=luxor&specialty=Respiratory&name=mohand%20mostafa`;
    const doctorResult = fuseResult.map((result) => result.item);

    return doctorResult;
  };

  const handlePaginationSearch = (event, value) => {
    const doctorsCopy = JSON.parse(JSON.stringify(doctorsFilter));

    const doctorData = doctorsCopy.splice((1 - value) * 4, 4);

    return doctorData;
  };

  const [doctorPagination, setdoctorPagination] = useState(
    handlePaginationSearch()
  );

  const handlClaer = () => {
    setFilterSettings(defaultFilterSetting);
    setDoctorsFilter(doctors);
  };

  const getPriceStr = (strDoctor) => {
    let spiltStr = strDoctor.split(`"price":"`)[1];
    spiltStr = spiltStr.split(`",`)[0];
    spiltStr = parseInt(spiltStr);
    return spiltStr;
  };
  const getArayyOfStrMatch = () => {
    const arrRsult = [];
    filterSettings.map((singleFilter) => {
      for (const filterItem in singleFilter['filterData']) {
        if (
          singleFilter['filterData'][filterItem] == true &&
          filterItem != 'any'
        ) {
          if (
            [singleFilter['filterNameDB']] == 'gender' ||
            [singleFilter['filterNameDB']] == 'rate'
          ) {
            arrRsult.push(
              `"${[singleFilter['filterNameDB']]}":"${filterItem}"`
            );
          }

          if ([singleFilter['filterNameDB']] == 'communicationMethods') {
            arrRsult.push(`"${filterItem}":${true}`);
          }

          if ([singleFilter['filterNameDB']] == 'price') {
            doctors.filter((doctor) => {
              let strDoctor = JSON.stringify(doctor);
              let spiltStr = getPriceStr(strDoctor);

              if (filterItem == '<100' && spiltStr < 100) {
                arrRsult.push(
                  `"${[singleFilter['filterNameDB']]}":"${spiltStr}"`
                );
              }
              if (
                filterItem == '100-200' &&
                100 <= spiltStr &&
                spiltStr <= 200
              ) {
                arrRsult.push(
                  `"${[singleFilter['filterNameDB']]}":"${spiltStr}"`
                );
              }
              if (filterItem == '>200' && spiltStr > 200) {
                arrRsult.push(
                  `"${[singleFilter['filterNameDB']]}":"${spiltStr}"`
                );
              }
            });
          }
        }
      }
    });
    return arrRsult;
  };

  const handleFilter = () => {
    let result = getArayyOfStrMatch();
    let filterDoctorss = doctors.filter((doctor) => {
      let strDoctor = JSON.stringify(doctor);

      let flag = result.find((res) => {
        return strDoctor.search(res) != -1;
      });
      if (flag) {
        return doctor;
      }
    });
    return filterDoctorss;
  };

  const handleCheckBoxChange = (event, idx) => {
    const filterSettingCopy = JSON.parse(JSON.stringify(filterSettings));

    if (event.target.name != 'any') {
      filterSettingCopy[idx]['filterData'] = {
        ...filterSettingCopy[idx]['filterData'],
        [event.target.name]: event.target.checked,
        any: false,
      };
    } else if (event.target.name == 'any') {
      for (const item in filterSettingCopy[idx]['filterData']) {
        filterSettingCopy[idx]['filterData'][item] = false;
      }
      filterSettingCopy[idx]['filterData'] = {
        ...filterSettingCopy[idx]['filterData'],
        [event.target.name]: event.target.checked,
        any: true,
      };
    } else {
      filterSettingCopy[idx]['filterData'] = {
        ...filterSettingCopy[idx]['filterData'],
        [event.target.name]: event.target.checked,
      };
    }

    setFilterSettings(filterSettingCopy);
  };

  useEffect(() => {
    let result = handleFilter();
    result.length > 0
      ? setDoctorsFilter(result)
      : setDoctorsFilter(doctorsFilter);
  }, [filterSettings]);

  useEffect(() => {
    setdoctorPagination(handlePaginationSearch(1));

    setPage(1);
  }, [doctorsFilter]);

  const [searchByName, setSearchByName] = useState('');
  const [searchByCity, setSearchByCity] = useState();
  const [searchByspecialty, setSearchBySpecialty] = useState();

  const handleSearchByspecialty = (e) => {
    const fuse = new Fuse(doctors, {
      keys: ['specialty'],
    });
    const fuseResult = fuse.search(e.target.value);
    const doctorResult = fuseResult.map((result) => result.item);

    setSearchBySpecialty(e.target.value);
    doctorResult.length > 0
      ? setDoctorsFilter(doctorResult)
      : setDoctorsFilter(doctors);
  };
  const handsearchByCity = (e) => {
    const fuse = new Fuse(doctors, {
      keys: ['location'],
      threshold: 0,
    });
    const fuseResult = fuse.search(e.target.value);
    const doctorResult = fuseResult.map((result) => result.item);

    setSearchByCity(e.target.value);
    doctorResult.length > 0
      ? setDoctorsFilter(doctorResult)
      : setDoctorsFilter(doctors);
  };

  const handSearchByName = (e) => {
    let spiltStr = e.target.value.split(' ');
    const fuse = new Fuse(doctorsFilter, {
      keys: ['name.first', 'name.last'],
      threshold: 0,
    });
    const fuseResult = fuse.search({
      $and: [{ 'name.first': spiltStr[0] }, { 'name.last': spiltStr[1] || '' }],
    });
    const doctorResult = fuseResult.map((result) => result.item);

    setSearchByName(e.target.value);
    doctorResult.length > 0
      ? setDoctorsFilter(doctorResult)
      : setDoctorsFilter(doctors);
  };

  return (
    <div style={{ background: '#F1F2F4', paddingTop: '4em' }}>
      <Container style={{ padding: '100px 0 50px 0' }}>
        <SearchBar
          onSerachByName={handSearchByName}
          searchByName={searchByName}
          onSearchByCity={handsearchByCity}
          searchByCity={searchByCity}
          onSearchByspecialty={handleSearchByspecialty}
          searchByspecialty={searchByspecialty}
        />

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
            {doctorPagination.map((doctor, idx) => (
              <SearchCard key={doctor.email} Doctor={doctor} />
            ))}

            <PaginationSearch
              NumberOfPages={Math.ceil(doctorsFilter.length / 4)}
              page={page}
              onHandlePageView={handlePageView}
            />
          </Grid>
        </Grid>
      </Container>
      <Hidden mdUp>
        <DrawerFilter
          onClear={handlClaer}
          filterSettings={filterSettings}
          onCheckBoxChange={handleCheckBoxChange}
        />
      </Hidden>
    </div>
  );
};

export default SearchPage;
