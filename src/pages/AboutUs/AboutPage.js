import React from "react";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import AboutUsPagePart from "../../components/AboutUsPage/AboutUsPagePart";

export default function AboutPage() {
  return (
    <div>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <AboutUsPagePart />
      <FooterPart />
    </div>
  );
}
