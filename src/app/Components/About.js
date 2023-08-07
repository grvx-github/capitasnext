"use client";

import styles from "@/app/styles/about.module.css";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  const divRef = useRef(null);
  const hiRef = useRef(null);
  const xRef = useRef()
  const pRef = useRef()
  const lRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none none reset",
      }
    });
    tl.fromTo(hiRef, { yPercent: -2, z: 2, opacity: 0 }, { yPercent: 0, z: 0, opacity: 1, duration: 0.7, ease: "in" })
      .fromTo(xRef, { xPercent: -10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.7, ease: "in" })
      .fromTo(pRef, { xPercent: -10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.7, ease: "in" })
      .fromTo(lRef, { xPercent: -10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.7, ease: "in" })
      .fromTo(divRef, { xPercent: 10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "inOut" });

    // return () => ctx.revert();

  }, [])

  return (
    <div className={`${styles.aboutSection} mt-4`}>
      <div className="container-fluid">
        <div className="row">
          <div className=" row col-lg-6 col-md-12 mx-2">
            <div className="aboutContent">
              <h2 className="formula mb-4" ref={hiRef}>
                Zerror Studios
              </h2>
              <div ref={xRef}>
                <p>
                  Capitas is a specialized international real estate and
                  investment advisory firm that works with a select network of
                  private and institutional capital partners in the areas of real
                  estate acquisition, development management, asset management
                  advisory, and strategic cross border transactions.
                </p>
                <p>
                  Led by a senior management team with over 70 years of
                  experience, and 7 independent financial and real estate
                  platforms launched in the Americas and MENA region, Capitas
                  carries a reputation for successful execution, innovative
                  solutions, and return driven results.
                </p>
              </div>

              <div className={styles.statement} ref={pRef}>
                <button className={`formula ${styles.aboutUs}`}>
                  About Us
                </button>
              </div>

              <div className={styles.aboutCounter} ref={lRef}>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className={`${styles.counterCard}`}>
                      <div className="wrapper" style={{ minHeight: "61px" }}>
                        <div>
                          <CountUp start={0} end={12} delay={0}>
                            {({ countUpRef }) => (

                              <h3 ref={countUpRef}></h3>

                            )}
                          </CountUp>
                        </div>

                        <h3>
                          <span>years of</span>
                        </h3>
                      </div>
                      <p> Company Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className={`${styles.counterCard}`}>
                      <div className="wrapper" style={{ minHeight: "61px" }}>
                        <CountUp start={0} end={70} delay={0}>
                          {({ countUpRef }) => (
                            <div>
                              <h3 ref={countUpRef}></h3>
                            </div>
                          )}
                        </CountUp>
                        <h3>
                          <span>years of</span>
                        </h3>
                      </div>
                      <p>Combined Team Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className={`${styles.counterCard}`}>
                      <div className="wrapper" style={{ minHeight: "61px" }}>
                        <CountUp start={0} end={2} delay={0}>
                          {({ countUpRef }) => (
                            <div>
                              <h3 $ ref={countUpRef}></h3>
                            </div>
                          )}
                        </CountUp>
                        <h3>
                          <span>Billion in</span>
                        </h3>
                      </div>
                      <h3></h3>
                      <p>Business Transactions</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="row col-lg-6 col-md-12" ref={divRef}>
            <div className={styles.aboutImg}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
