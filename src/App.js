import React from "react";
import Navbar from "./layout/components/Navbar";
import SectionCarousel from "./layout/components/SectionCarousel";
import SectionInfo from "./layout/components/SectionInfo";
import SectionBrands from "./layout/components/SectionBrands";
import SectionOffers from "./layout/components/SectionOffers";
import SectionExtra from "./layout/components/SectionExtra";
import Footer from "./layout/components/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SectionCarousel />
      <SectionInfo />
      <SectionBrands />
      <SectionOffers />
      <SectionExtra />
      <Footer />
    </React.Fragment>
  );
}

export default App;
