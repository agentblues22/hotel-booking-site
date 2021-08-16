import Head from "next/head";
import Image from "next/image";
import Booking from "../components/booking";
import Icongallery from "../components/Icongallery";
import classes from "../styles/bookings.module.css";
import Map from "../components/layout/map";

export default function Bookingpage() {
  return (
    <div>
      <section>
        <Booking />
      </section>
      <section className={classes.icongallery_section}>
        <div className={classes.icongallery_heading}>Services Offered</div>
        <Icongallery />
      </section>
    </div>
  );
}
