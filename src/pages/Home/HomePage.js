import React from "react";
import Heading from "../../components/Heading/Heading";
import LogoPart from "../../components/Logo/LogoPart";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import OurRecentPro from "../../components/OurRecentPro/OurRecentPro";
import ShopTopic from "../../components/ShopTopic/ShopTopic";
import SliderPart from "../../components/Slider/SliderPart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import NewPro from "../../components/NewPro/NewPro";
import DealPrat from "../../components/DealPart/DealPrat";
import Paralex from "../../components/Paralex/Paralex";
import BeThe from "../../components/BeThe/BeThe";
import Testominal from "../../components/Testominal/Testominal";
import FooterPart from "../../components/Footer/FooterPart";

export default function HomePage() {
  
  return (
    <>
      <TopMenu />
      <LogoPart />
      <Topsearch />
      <Mainnavbarpart />
      <SliderPart />
      <ShopTopic />
      <Heading title="Our Recent Products:" />
      <OurRecentPro />
      <Heading title="Deal Of The Day" />
      <DealPrat />
      <Heading title="New Products" />
      <NewPro />
      <Paralex />
      <Heading title="Our Featured Products:" />
      <OurRecentPro />
      <Testominal />
      <BeThe />
      <FooterPart />
    </>
  );
}
