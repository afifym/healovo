import OwlCarousel from "react-owl-carousel";
import Card from "./Card/Card";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import styled from "styled-components/macro";

const SectionHeading = styled.h2`
  font-size: 46px;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: center;
  background-size: 100%;
  // ** Making a gradient text **
  background-image: ${({ theme }) => theme.gradients.gradient5};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Reviews = () => {
  return (
    <>
      <SectionHeading>What People Say</SectionHeading>

      <OwlCarousel
        items="2"
        center
        margin={-100}
        autoplay
        dots={false}
        loop
        autoplayHoverPause
        mouseDrag
        touchDrag
        className="owl-theme"
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
        <Card title="Ryan Ronalds" revRotate />
        <Card title="Ryan Ronalds" />
        <Card title="Ryan Ronalds" revRotate />
        <Card title="Ryan Ronalds" />
      </OwlCarousel>
    </>
  );
};

export default Reviews;
