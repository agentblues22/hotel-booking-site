import Head from "next/head";
import Image from "next/image";
import Booking from "../components/booking";
import Imagegallery from "../components/Imagegallery";
import classes from "../styles/Home.module.css";

export default function hpmepage() {
  return (
    <div>
      <Booking />
      <Imagegallery />
    </div>
  );
}
