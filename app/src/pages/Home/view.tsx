import React from "react";
import { useTranslation } from "react-i18next";
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
  const [t] = useTranslation();

  return (
    <>
      <Header />
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
