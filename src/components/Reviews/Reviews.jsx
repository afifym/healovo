import OwlCarousel from "react-owl-carousel";
import Card from './Card/Card'
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";


const Reviews = () => {
  return (
    <>
      <h2>What People Say</h2>

      <OwlCarousel
        items="2"
        center
        margin={-100}
        autoplay
        dots={false}
        loop
        slideSpeed = "220"
        autoplayHoverPause
        mouseDrag
        touchDrag
        className="owl-theme"
      >
        <Card title="Ryan Ronalds" revRotate/>
        <Card title="Ryan Ronalds" />
        <Card title="Ryan Ronalds" revRotate/>
        <Card title="Ryan Ronalds" />
      </OwlCarousel>
    </>
  );
};

export default Reviews;
