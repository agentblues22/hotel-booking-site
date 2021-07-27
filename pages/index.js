import Head from "next/head";
import Image from "next/image";
import Accordion from "../components/accordion";

import Gallery from "../components/gallery";
import Map from "../components/layout/map";

import classes from "../styles/Home.module.css";
import Availability from "../components/Availability";
import Pricecard from "../components/Pricecard";

export default function Home() {
  return (
    <body>
      <section className={classes.hero_section}>
        <div className={classes.hero_wrapper}>
          <div className={classes.hero_header}>
            Come and stay like a local.
            <span className={classes.hero_span}> Kuku Residency</span>
          </div>
          <hero className={classes.hero_description}>
            lorem ipsum dolor amietLorem ipsum dolor sit amet, consectetur
            adipiscing elit. In urna lectus, mattis non accumsan in, tempor
            dictum neque.
          </hero>
          <div>
            <Availability />
          </div>
        </div>
      </section>
      <section className={classes.imagegallery_section}>
        <Pricecard />
      </section>
      <section className={classes.section_container}>
        <div className={classes.alignment_container}>
          <div className={classes.grid_container}>
            <div className={classes.grid_item1}>
              <Gallery />
            </div>
            <div className={classes.grid_item2}>
              Best rooms at affordable prices...
              <div className={classes.paragraphCTA}>
                <p>
                  lorem ipsum dolor amietLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In urna lectus, mattis non accumsan in,
                  tempor dictum neque.{" "}
                </p>
                <button className={classes.galleryCTA}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.mapsection}>
        <div className={classes.map_part}>
          <div className={classes.map_paragraph}>
            <p>find us on the map.</p>
          </div>
          <Map />
        </div>
      </section>
      <section className={classes.FAQ_section}>
        <div className={classes.accordion_container}>
          <div className={classes.faq_heading}>Frequently Asked Questions</div>
          <Accordion
            title="location of the residency?"
            body="address of the residency is given in the footer. please refer.enefnwejfwpfpkfeqijfnwejvnwifnwefnwfwnf wefnwefewfnwfpwefewofj dpofwnefwfnwfpewifnewfpwqefonf ofnwefwenfe2pur2fnofnwrfiun fwepofnwefpwefwenfweprew   dpfnwefwpoifnj2rfpiuqefn2ru  s[onw efriqfneqpurnfw[eoqrn  woefnj2ero2nr2p9urj[ofknwe9 [oweifwe9ru2hjfdw[gnrifju"
          />
          <Accordion
            title="how long does a room stays booked?"
            body="rooms stay booked typically for 24 hours. for more info. contact the residency."
          />
          <Accordion
            title="are sundays closed?"
            body="during covid lockdown, sundays are currently closed.for more details contact residency. contact the residency."
          />
          <Accordion
            title="do we have hotel service as well?"
            body="still in the works. but we plan to have hotel service in the furure"
          />
        </div>
      </section>
    </body>
  );
}
