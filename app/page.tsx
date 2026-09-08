

import Hero from "./components/Hero";
import Simple from "./components/Simple";
import Work from "./components/Work";
import Visible from "./components/Visible";
import HelpSelector from "./components/HelpSelector";
import Grow from "./components/Grow";
import Happy from "./components/Happy";
import Customers from "./components/Customers";
import Blog from "./components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://topdoglead.com",
  },
};

export default function Home() {
  return (
  <>
  <Hero/>
  <Simple/>
  <Work/>
  <Visible/>
  <HelpSelector/>
  <Grow/>
  <Happy/>
  <Blog/>
        <Customers/>

  </>
  );
}
