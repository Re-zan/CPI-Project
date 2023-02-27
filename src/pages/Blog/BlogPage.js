import React from "react";
import Mainnavbarpart from "../../components/Mainnavbar/Mainnavbarpart";
import TopMenu from "../../components/Topmenubar/TopMenu";
import Topsearch from "../../components/Topsearchbar/Topsearch";
import FooterPart from "../../components/Footer/FooterPart";
import BlogParts from "../../components/BlogParts/BlogParts";

export default function BlogPage() {
  return (
    <div>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <BlogParts />
      <FooterPart />
    </div>
  );
}
