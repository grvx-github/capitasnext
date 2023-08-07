"use client";

import Header from "../Components/Header";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import InnerBanner from "../Components/InnerBanner";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { PiDesktopTowerDuotone } from "react-icons/pi";
import { BiSolidCloudUpload } from "react-icons/bi";
import { SiSpringsecurity } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

const ServicePage = () => {
  let iconStyles = { fontSize: "2.5em" };

  const [hovStyle, setHovStyle] = useState({transform: "translate3d(0px 80px 0px)"});

  function handleMouseEnter(){
    setHovStyle({transform: "translate3d(0px 0px 0px)", opacity: 1});
  }

  function handleMouseLeave(){
    setHovStyle({transform: "translate3d(0px 80px 0px)", opacity: 0});
  }


  return (
    <div className="servicePage">
      <div className="innerHeader">
        <Header />
        <InnerBanner />
      </div>
      <div className="servicesMain">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/clodu.jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceListIcon">
                        <PiDesktopTowerDuotone style={iconStyles} />
                      </div>
                      <h4 className="serviceListTitle">IT Consultancy</h4>
                    </div>
                    <div className={`inv`} style={hovStyle}>
                      <p>
                        We believe that technology design are revolutionizing
                        brand experiences.
                      </p>
                      <Link href="">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/assurance.jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceListIcon">
                        <BiSolidCloudUpload style={iconStyles} />
                      </div>
                      <h4 className="serviceListTitle">Cloud Migration</h4>
                    </div>
                    <div className={`inv`} style={hovStyle}>
                      <p>
                        Process of designing, creating, deploying and
                        maintaining software.
                      </p>
                      <Link href={"/"}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/team (2).jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceListIcon">
                        <SiSpringsecurity style={iconStyles} />
                      </div>
                      <h4>Quality Assurance</h4>
                    </div>

                    <div className={`inv`} style={hovStyle}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis dolore ullam modi sequi distinctio.</p>
                      <a href="/"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/design.jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceListicon">
                        <MdDesignServices style={iconStyles} />
                      </div>
                      <h4 className="serviceListTitle">Product Desgin</h4>
                    </div>
                    <div className={`inv`} style={hovStyle}>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat facere odio, rem ipsam deleniti?</p>
                      <a href="/"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/poc.jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceItemIcon">
                        <AiOutlineTeam style={iconStyles} />
                      </div>
                      <h4 className="serviceListTitle">Smart Team</h4>
                    </div>
                    <div className={`inv`} style={hovStyle}>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat facere odio, rem ipsam deleniti?</p>
                      <a href="/"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="serviceItem">
                  <Image src="/clodu.jpg" alt="" height={400} width={400} />
                  <div className="textDiv">
                    <div className="visible">
                      <div className="serviceListIcon">
                        <FaLaptopCode style={iconStyles} />
                      </div>
                      <h4 className="serviceListTitle">Poc Development</h4>
                    </div>
                    <div className={`inv`} style={hovStyle}>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat facere odio, rem ipsam deleniti?</p>
                      <a href="/"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />

      <Footer />
    </div>
  );
};

export default ServicePage;
