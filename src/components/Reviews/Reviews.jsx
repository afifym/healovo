import OwlCarousel from 'react-owl-carousel';
import Card from './Card/Card';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { StyledHeading } from '../../styles/shared/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main2};
  padding: 3em 0;

  .owl-theme {
    background-color: ${({ theme }) => theme.colors.main2};
  }
`;

const Reviews = () => {
  return (
    <Wrapper>
      <StyledHeading>What People Say</StyledHeading>

      <OwlCarousel
        items='2'
        center
        margin={-100}
        autoplay
        dots={false}
        loop
        autoplayHoverPause
        mouseDrag
        touchDrag
        className='owl-theme'
        slidetransition='linear'
        autoplaySpeed={6000}
        smartSpeed={6000}
        responsive={{
          0: { items: 1, margin: 150 },
          480: { items: 1, margin: 150 },
          550: { items: 2, margin: 300 },
          678: { items: 2, margin: 150 },
          960: { items: 2, margin: 150 },
          1050: { items: 2, margin: 210 },
          1200: { items: 2, margin: -100 },
        }}
      >
        <Card title='Ryan Ronalds' revRotate />
        <Card title='Ryan Ronalds' />
        <Card title='Ryan Ronalds' revRotate />
        <Card title='Ryan Ronalds' />
      </OwlCarousel>
    </Wrapper>
  );
};

export default Reviews;
