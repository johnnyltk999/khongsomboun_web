"use client";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Customer from "./components/customer/Customer";
import Footter from "./components/footer/Footter";
import Services from "./components/services/Services";
import BackToTopButton from "./components/backtotop/BackToTop";
import Portfolio from "./components/portfolio/Portfolio";
import Heroe from "./components/heroe/Heroe";
// import Timeline from "./components/ProjectTimline/Project";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Heroe></Heroe>
      <Services></Services>
      <About></About>
      <Portfolio></Portfolio>
      {/* <Timeline></Timeline> */}
      <Customer></Customer>
      <hr className="my-6 border-gray-600" />
      <Footter></Footter>

      <BackToTopButton></BackToTopButton>
    </div>
  );
}
