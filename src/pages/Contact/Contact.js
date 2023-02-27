import React from "react";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";

import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import ContacParts from "../../components/ContactPart/ContacParts";
export default function Contact() {
  return (
    <div>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <ContacParts />
      <FooterPart />
    </div>
  );
}
