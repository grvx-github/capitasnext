"use client";

import About from "../Components/About";
import Header from "../Components/Header";
import CountUp from "react-countup";
import { Roboto } from "next/font/google";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const page = () => {
  return (
    <main className={roboto.className}>
      <div className="aboutHeader container-fluid">
        <Header />
        <div className="aboutBanner row">
          <div className="aboutBannerLeft col-lg-6 col-sm-12">
            <h2>Who We Are</h2>
            <p>
              Our mission is to engage in issues that are of concern to
              individuals
            </p>
          </div>
          <div className="aboutBannerRight col-lg-6 col-sm-12">
            <div className="d-flex rightdivs">
              <div className="counter">
                <CountUp start={0} end={19} delay={0}>
                  {({ countUpRef }) => (
                    <div className="runner">
                      <h3 ref={countUpRef}></h3>
                      <h3>+</h3>
                    </div>
                  )}
                </CountUp>
                <div><h4>Premium Houses</h4></div>
              </div>
              <div className="counter">
                <CountUp start={0} end={10000} delay={0}>
                  {({ countUpRef }) => (
                    <div className="runner">
                      <h3 ref={countUpRef}></h3>
                      <h3>+</h3>
                    </div>
                  )}
                </CountUp>
                <div><h4>Happy Clients</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Features />
      <Footer />
    </main>
  );
};

export default page;
