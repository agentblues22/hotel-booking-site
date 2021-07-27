import Slider from "react-slick";
import Image from "next/image";
import classes from "./gallery.module.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const photos = [
  {
    name: "photo 1",
    url: "/carouselphotos/photo 1.jpg",
    desc: "photo descrption",
  },
  {
    name: "photo 2",
    url: "/carouselphotos/photo 2.jpg",
    desc: "photo descrption",
  },
  {
    name: "photo 3",
    url: "/carouselphotos/photo 3.jpg",
    desc: "photo descrption",
  },
];
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
const Gallery = () => {
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
  return (
    <div className={classes.App}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className={classes.carousel_shadow}>
              <Image
                className="carouselimagecontainer"
                src={photo.url}
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

export default Gallery;
