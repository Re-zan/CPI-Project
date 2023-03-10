import React from "react";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import BLogSinglePart from "../../components/BlogS/BLogSinglePart";

export default function SingleBlogPart() {
  return (
    <div>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <BLogSinglePart />
      <FooterPart />
    </div>
  );
}
