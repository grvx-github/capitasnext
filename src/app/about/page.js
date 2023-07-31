"use client";

import About from "../Components/About";
import Header from "../Components/Header";
import InnerBanner from "../Components/InnerBanner";
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
      <div className="innerHeader container-fluid">
        <Header />
        <InnerBanner />
      </div>
      <About />
      <Features />
      <Footer />
    </main>
  );
};

export default page;
