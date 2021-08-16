import classes from "./Collage.module.css";
import Image from "next/image";
import Link from "next/Link";

function Collage() {
  return (
    <div className={classes.collage_main}>
      <div className={classes.collage_item1}>
        <Link href="/Explore#ph1">
          <div className={classes.hover_over}>Photo 1</div>
        </Link>
      </div>

      <div className={classes.collage_item2}>
        <Link href="/Explore#ph2">
          <div className={classes.hover_over}>Photo 2</div>
        </Link>
      </div>
      <div className={classes.collage_item3}>
        <Link href="/Explore#ph3">
          <div className={classes.hover_over}>Photo 3</div>
        </Link>
      </div>
      <div className={classes.collage_item4}>
        <Link href="/Explore#ph4">
          <div className={classes.hover_over1}>Photo 4</div>
        </Link>
      </div>
      <div className={classes.collage_item5}>
        <Link href="/Explore#ph5">
          <div className={classes.hover_over2}>Photo 5</div>
        </Link>
      </div>
      <div className={classes.collage_item6}>
        <Link href="/Explore#ph6">
          <div className={classes.hover_over}>Photo 6</div>
        </Link>
      </div>
    </div>
  );
}

export default Collage;
