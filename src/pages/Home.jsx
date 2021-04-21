import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('/assets/images/stetho.jpg'),
    url('/assets/images/header-bg-left.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: top right, 0% 400px;
  background-size: 900px, 30%;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <MetaDecorator
        title='Healovo | Home'
        description='A medical booking website that connects doctors with patients'
      />
<<<<<<< HEAD
      <h2>Home</h2>
    </Wrapper>
=======
      <SearchCard />
    </div>
>>>>>>> SearchCard
  );
};

export default Home;
