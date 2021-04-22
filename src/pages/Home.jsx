import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import SearchCard from '../components/SearchCard/SearchCard';
import Services from '../components/Services/Services';
import Roadmap from '../components/Roadmap/Roadmap';
import Vision from '../components/Vision/Vision';
import Reviews from '../components/Reviews/Reviews';
import Curious from '../components/Curious/Curious';
import ForDoctors from '../components/ForDoctors/ForDoctors';
import MobileApp from '../components/MobileApp/MobileApp';
import Footer from '../components/Footer/Footer';

const Wrapper = styled.div`
  background-image: url('/assets/images/stetho.jpg'),
    url('/assets/images/header-bg-left.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: top right, 0% 200px;
  background-size: 900px, 20%;
  min-height: 100vh;

  @media (max-width: 540px) {
    background-image: url('/assets/images/header-bg-left.svg');
    background-repeat: no-repeat;
    background-position: 0% 100px;
    background-size: 60%;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <MetaDecorator
        title='Healovo | Home'
        description='A medical booking website that connects doctors with patients'
      />
      <Navbar />
      <SearchCardWrapper>
        <SearchCard className='search-card' />
      </SearchCardWrapper>

      <div className='' style={{ padding: '12em 0' }}>
        <Services />
      </div>

      <div style={{ marginBottom: '10em' }}>
        <Roadmap />
      </div>

      <Vision />

      <Reviews />
      <Curious />
      <div style={{ margin: '8em 0' }}>
        <ForDoctors />
      </div>

      <div style={{ margin: '10em 0', marginBottom: '0' }}>
        <MobileApp />
      </div>

      <Footer />
    </Wrapper>
  );
};

const SearchCardWrapper = styled.div`
  display: flex;
  max-width: 80%;
  padding-top: 12em;
  justify-content: center;
  .search-card {
    position: absolute;
    right: 200px;
  }

  @media (max-width: 540px) {
    padding-top: 8em;
    max-width: 100%;
  }
`;

export default Home;
