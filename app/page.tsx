import Image from "next/image";

import Navbar from "./components/Navbar";
  

import Hero from "./components/Hero";
import Business from "./components/Business";
import Simple from "./components/Simple";
import Work from "./components/Work";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Visible from "./components/Visible";
import HelpSelector from "./components/HelpSelector";
import Grow from "./components/Grow";
import Happy from "./components/Happy";
import CaseStudyHero from "./components/CaseStudyHero";
import SuccessStories from "./components/SuccessStories";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import ContactSplit from "./components/ContactSplit";


export default function Home() {
  return (
  <>
{/* <ContactSplit/> */}
  <Hero/>
  <Business/>
  <Simple/>
  <Work/>
  {/* <ReviewsCarousel/> */}
  <Visible/>
  <HelpSelector/>
  <Grow/>
  <Happy/>
        {/* <CaseStudyHero  /> */}
        <Customers/>
<SuccessStories/>

  </>
  );
}
