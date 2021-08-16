import classes from "./MainNavigation.module.css";
import Link from "next/Link";

function MainNavigation() {
  return (
    <section className={classes.container}>
      <div>
        <button className={classes.item_left}>logo</button>
      </div>
      <div className="nav">
        <label className={classes.label} for="toggle">
          &#9776;
        </label>
        <input className={classes.toggle} type="checkbox" id="toggle" />
        <div className={classes.menu}>
          <Link href="/">
            <a className={classes.menu_links}>Home</a>
          </Link>
          <Link href="/bookings">
            <a className={classes.menu_links}>Booking</a>
          </Link>
          <Link href="/discover">
            <a className={classes.menu_links}>Discover</a>
          </Link>
          <Link href="#home">
            <a className={classes.menu_links_contact}>Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainNavigation;
