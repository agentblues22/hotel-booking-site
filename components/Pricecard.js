import Image from "next/image";
import classes from "./Pricecard.module.css";

function Pricecard() {
  const photos = [
    {
      description: "room type 1",
      url: "/carouselphotos/photo 1.jpg",
      price: "1100",
      rating: "4.0/5",
    },
    {
      description: "room type 2",
      url: "/carouselphotos/photo 2.jpg",
      price: "1000",
      rating: "4.0/5",
    },
    {
      description: "room type 3",
      url: "/carouselphotos/photo 3.jpg",
      price: "1500",
      rating: "4.0/5",
    },
    {
      description: "room type 4",
      url: "/carouselphotos/photo 4.jpg",
      price: "1750",
      rating: "4.0/5",
    },
  ];
  return (
    <div className={classes.pricecard_main}>
      {photos.map((photo) => {
        return (
          <div className={classes.pricecard_sub}>
            <Image
              className={classes.pricecard_container}
              src={photo.url}
              width="300px"
              height="200px"
            ></Image>
            <div className={classes.pricecard_paragraph}>
              <div className={classes.pricecard_text}>{photo.description}</div>
              <div className={classes.prices_rating}>
                <div className={classes.rating}>
                  user rating : {photo.rating}
                </div>
                <div className={classes.price}> price : ₹{photo.price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pricecard;
