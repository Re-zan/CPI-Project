import React from "react";
import LogoPart from "../../components/Logo/LogoPart";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import WishlistPartt from "../../components/WishListPart/WishlistPartt";

export default function WishListPage() {
  return (
    <div>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <WishlistPartt />
      <FooterPart />
    </div>
  );
}
