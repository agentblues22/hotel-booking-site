import Image from "next/image";
import classes from "./Imagegallery.module.css";

function Imagegallery() {
  const photos = [
    {
      description: '"amazing rooms with affordable prices"',
      url: "/carouselphotos/photo 1.jpg",
    },
    {
      description: '"more option to you the user"',
      url: "/carouselphotos/photo 2.jpg",
    },
    {
      description: '"more text here that makes sense"',
      url: "/carouselphotos/photo 3.jpg",
    },
    {
      description: '"more text here that makes sense"',
      url: "/carouselphotos/photo 4.jpg",
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
              width="300px"
              height="200px"
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

export default Imagegallery;
