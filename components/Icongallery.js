import Image from "next/image";
import classes from "./Icongallery.module.css";

function Icongallery() {
  const photos = [
    {
      description: "Wifi",
      url: "/icons/Wifi.png",
    },
    {
      description: "Taxi",
      url: "/icons/taxi.png",
    },
    {
      description: "Housekeeping",
      url: "/icons/housekeeping.png",
    },
    {
      description: "AC and Non-AC",
      url: "/icons/AC.png",
    },
  ];
  return (
    <div className={classes.imagegallery_main}>
      {photos.map((photo) => {
        return (
          <div className={classes.imagegallery_sub}>
            <Image
              className={classes.imagegallery_container}
              src={photo.url}
              width="60px"
              height="50px"
            ></Image>
            <div className={classes.imagegallery_paragraph}>
              {photo.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Icongallery;
