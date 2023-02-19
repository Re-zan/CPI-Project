import React from "react";
import LogoPart from "../../components/Logo/LogoPart";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import Heading from "../../components/Heading/Heading";
import OurRecentPro from "../../components/OurRecentPro/OurRecentPro";
import AddToCardPage from "../../components/AddToCardPage/AddToCardPage";
export default function Addtocart() {
  return (
    <div>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <AddToCardPage />
      <Heading title="Related Products" />
      <OurRecentPro />
      <FooterPart />
    </div>
  );
}
