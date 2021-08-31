import classes from "./MainNavigation.module.css";
import Link from "next/Link";

function MainNavigation() {
  return (
    <section className={classes.container}>
      <div>
        <button className={classes.item_left}>logo</button>
      </div>
      <div className="nav">
        <label className={classes.label} htmlFor="toggle">
          &#9776;
        </label>
        <input className={classes.toggle} type="checkbox" id="toggle" />
        <div className={classes.menu}>
          <Link href="/" passHref>
            <a className={classes.menu_links}>Home</a>
          </Link>

          <Link href="/discover" passHref>
            <a className={classes.menu_links}>Discover</a>
          </Link>
          <Link href="/contact" passHref>
            <a className={classes.menu_links_contact}>Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainNavigation;
