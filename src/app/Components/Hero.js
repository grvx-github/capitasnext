"use client";

import Image from "next/image";
import styles from "@/app/styles/hero.module.css";
import { useState, useEffect } from "react";

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Dreams", "Hopes", "Lives"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const timer = setTimeout(() => {
      tick();
    }, delta);

    return () => {
      clearTimeout(timer);
    };
  }); // Include 'delta' in the dependency array

  return (

      <section className={styles.heroSection} id="home">
        <div className={styles.container}>
          <div className={styles.bannerMain}>
            <div className={styles.bannerText}>
              <div className={styles.welcome}>
                <h2>Welcome to </h2>
                <Image src="/logo.png" alt="" height={75} width={100} />
              </div>


              <p>Home of Real Estate Investment &amp; Advisory Masters</p>
              <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                  <h1>BUILDING </h1>
                  <h1>
                    <span className={styles.typed}>{text}</span>
                  </h1>
                </div>
              </div>

            </div>
            <div className={styles.heroButtons}>
              <button className={styles.btn1}>
                <a href="">Read More</a>
              </button>
              <button className={styles.btn2}>
                <a href="#">Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Hero;
