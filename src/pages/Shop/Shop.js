import React from "react";
import Heading from "../../components/Heading/Heading";
import LogoPart from "../../components/Logo/LogoPart";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import OurRecentPro from "../../components/OurRecentPro/OurRecentPro";
import SliderPart from "../../components/Slider/SliderPart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import NewPro from "../../components/NewPro/NewPro";
import FooterPart from "../../components/Footer/FooterPart";
export default function Shop() {
  return (
    <div>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <SliderPart />
      <Heading title="All Products" />
      <NewPro />
      <Heading title="Related Products" />
      <OurRecentPro />

      <FooterPart />
    </div>
  );
}
