import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import SearchPage from '../components/SearchPage/SearchPage';
import Navbar from '../components/Navbar/Navbar';

const Search = ({ location }) => {
  return (
    <div>
      <MetaDecorator
        title='Healovo | Search'
        description='Search page where a user can find a doctor for Healovo website'
      />
      <Navbar />
      <SearchPage location={location} />
    </div>
  );
};

export default Search;
