import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styled from 'styled-components';
import CustomeSearchInput from './CustomeSearchInput';
import CustomeSelectInput from './CustomeSelectInput';
import { FaCity, FaUserMd } from 'react-icons/fa';
import { useState } from 'react';

const SearchBarWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchTabBtn = styled(Button)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25) !important;
  width: 120px;
  color: black;
  font-family: Montserrat;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 30px !important;
  text-transform: capitalize !important ;
  border: none !important;
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

const activeBtn = {
  backgroundColor: '#2D50EF',
  color: 'white',
};

const SearchBar = ({
  onSerachByName,
  searchByName,
  onSearchByCity,
  searchByCity,
  onSearchByspecialty,
  searchByspecialty,
}) => {
  const [searchBy, setSearchBy] = useState('name');

  const showSearchInput = () => {
    switch (searchBy) {
      case 'name':
        return (
          <CustomeSearchInput
            searchByName={searchByName}
            onSerachByName={onSerachByName}
          />
        );
      case 'specialty':
        return (
          <CustomeSelectInput
            SelectIconName={FaUserMd}
            title='specialty'
            onSearchBy={onSearchByspecialty}
            searchBy={searchByspecialty}
            selectData={[
              'Respiratory',
              'Ophthalmologist',
              'Gastroenterology',
              'Dentistry',
              'Pediatrics',
              'Orthopedics',
              'Neurology',
            ]}
          />
        );
      case 'city':
        return (
          <CustomeSelectInput
            title='city'
            onSearchBy={onSearchByCity}
            searchBy={searchByCity}
            SelectIconName={FaCity}
            selectData={[
              'Luxor Egypt',
              'Kafr El Sheikh Egypt',
              'Alexandria Egypt',
              'Al Sharqia Egypt',
              'Faiyum Egypt',
              'cairo Egypt',
              'Giza Egypt',
              'Gharbia Egypt',
            ]}
          />
        );
    }
  };

  return (
    <SearchBarWraper className=''>
      <CustomeButtonGroup
        variant='contained'
        color='primary'
        aria-label='contained primary button group'
      >
        <SearchTabBtn
          onClick={() => setSearchBy('name')}
          color={searchBy === 'name' ? 'primary' : 'secondary'}
          style={searchBy !== 'name' ? { opacity: '0.5' } : {}}
        >
          Name
        </SearchTabBtn>
        <SearchTabBtn
          color={searchBy === 'specialty' ? 'primary' : 'secondary'}
          onClick={() => setSearchBy('specialty')}
          style={searchBy !== 'specialty' ? { opacity: '0.5' } : {}}
        >
          Specialty
        </SearchTabBtn>
        <SearchTabBtn
          color={searchBy === 'city' ? 'primary' : 'secondary'}
          onClick={() => setSearchBy('city')}
          style={searchBy !== 'city' ? { opacity: '0.5' } : {}}
        >
          City
        </SearchTabBtn>
      </CustomeButtonGroup>
      {showSearchInput()}
    </SearchBarWraper>
  );
};

export default SearchBar;
