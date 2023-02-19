import React from "react";
import Heading from "../../components/Heading/Heading";
import LogoPart from "../../components/Logo/LogoPart";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import OurRecentPro from "../../components/OurRecentPro/OurRecentPro";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import ShopPage from "../../components/Shop/ShopPage";

export default function Shop() {
  return (
    <div>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <ShopPage />
      <Heading title="Related Products" />
      <OurRecentPro />

      <FooterPart />
    </div>
  );
}
