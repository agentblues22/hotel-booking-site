import classes from "./footer.module.css";
import Link from "next/Link";
import Image from "next/image";

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.maincontainer}>
        <div className={classes.grid_container}>
          <div className={classes.grid_item_first}>
            <button className={classes.button}> Logo</button>
            <p className={classes.heading_four}>
              some paragraph that makes some sense especially when it talks
              about the residency
            </p>
          </div>
          <div className={classes.grid_item_middle}>
            <Link href="#home">
              <a className={classes.footerlinks}>home</a>
            </Link>
            <Link href="#home">
              <a className={classes.footerlinks}>Booking</a>
            </Link>
            <Link href="#home">
              <a className={classes.footerlinks}>About Us</a>
            </Link>
            <Link href="#home">
              <a className={classes.footerlinks}>Contact Us</a>
            </Link>
          </div>
          <div className={classes.grid_item_last}>
            <h4 className={classes.heading_four}>Address:</h4>
            <p className={classes.heading_four}>example P.O, Example</p>
            <h4 className={classes.heading_four}>email:</h4>
            <p className={classes.heading_four}>example@xyz.com</p>
            <div className={classes.socialcontainer}>
              <a className={classes.img1} href="www.twitter.com" rel="noopener noreferrer" target="_blank" >
                <Image src="/twitter.png" width="30px" height="30px" />
              </a>
              <a className={classes.img2} href="www.facebook.com" rel="noopener noreferrer" target="_blank">
                <Image src="/facebook.png" width="30px" height="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
