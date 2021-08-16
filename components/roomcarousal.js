import Slider from "react-slick";
import Image from "next/image";
import classes from "./roomcarousal.module.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow_next" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow_prev" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};
const Roomcarousal = (props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    className: 1,
  };
  const photos = props.images;
  return (
    <div className={classes.App}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className={classes.carousel_shadow}>
              <Image
                className="carouselimagecontainer"
                src={photo.image}
                width="500px"
                height="400px"
              ></Image>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Roomcarousal;
