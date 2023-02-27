import React from "react";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import SingleShopPagePart from "../../components/SingleShop/SingleShopPagePart";
import Heading from "../../components/Heading/Heading";
import OurRecentPro from "../../components/OurRecentPro/OurRecentPro";

export default function SingleProduct() {
  return (
    <div>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <SingleShopPagePart />
      <Heading title="Related Products" />
      <OurRecentPro />
      <FooterPart />
    </div>
  );
}
