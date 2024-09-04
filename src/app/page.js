"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Gallery from "./Components/Gallery";
import Events from "./Components/Events";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BookTable from "./Components/BookTable";

export default function Home() {

  return (
    <div id="main">
      <Navbar />
      <Banner />
      <About />
      <Menu />
      <Events />
      <BookTable />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
