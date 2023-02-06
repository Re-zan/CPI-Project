import React from "react";
import Heading from "../Heading/Heading";
import LogoPart from "../Logo/LogoPart";
import Mainnavbarpart from "../Mainnavbar/Mainnavbarpart";
import OurRecentPro from "../OurRecentPro/OurRecentPro";
import ShopTopic from "../ShopTopic/ShopTopic";
import SliderPart from "../Slider/SliderPart";
import TopMenu from "../Topmenubar/TopMenu";
import Topsearch from "../Topsearchbar/Topsearch";
import NewPro from "../NewPro/NewPro";
import DealPrat from "../DealPart/DealPrat";
import Paralex from "../Paralex/Paralex";

export default function HomePage() {
  return (
    <>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <SliderPart />
      <ShopTopic />
      <Heading />
      <OurRecentPro />
      <Heading />
      <DealPrat />

      <Heading />
      <NewPro />
      <Heading />
      <Paralex />
      <OurRecentPro />
    </>
  );
}
