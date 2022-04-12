import React, { useEffect, useState } from "react";
import About from "../../components/templates/About";
import Acting from "../../components/templates/Acting";
import AddressLocation from "../../components/templates/AddressLocation";
import Contact from "../../components/templates/Contact";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import Team from "../../components/templates/Team";

import "./styles.scss";
import Office from "../../components/templates/Office";

export interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function updateOffset() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", updateOffset);
    updateOffset();

    return () => window.removeEventListener("scroll", updateOffset);
  }, [setOffset]);

  return (
    <>
      <Header offset={offset} />
      <About />
      <Office />
      <Acting />
      <Team />
      <Contact />
      <AddressLocation />
      <Footer />
    </>
  );
};

export default HomeView;
