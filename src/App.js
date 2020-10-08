import React from "react";
import Navbar from "./layout/components/Navbar";
import SectionCarousel from "./layout/components/SectionCarousel";
import SectionInfo from "./layout/components/SectionInfo";
import SectionBrands from "./layout/components/SectionBrands";
import SectionSlider from "./layout/components/SectionSlider";
import SectionExtra from "./layout/components/SectionExtra";
import SectionModal from "./layout/components/SectionModal";
import Footer from "./layout/components/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SectionCarousel />
      <SectionInfo />
      <SectionBrands />
      <SectionSlider />
      <SectionExtra />
      <SectionModal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
