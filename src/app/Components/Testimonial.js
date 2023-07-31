"use client";
import React, { useState } from "react";
import testimonialData from "../testimonialdata";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import styles from "@/app/styles/testimonials.module.css";

import { Scrollbar, Navigation, FreeMode, Thumbs } from "swiper/modules";

const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);


  return (
    <div className={styles.testimonialsMain}>
      <div className={`${styles.tBodySection} container-fluid`}>
        <div className="row">
          <div className={`${styles.BodyBottom} row`}>
            <div className={`${styles.bottomL} col-lg-6 d-flex`}>
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.testiSwiper1}
                onSwiper={setFirstSwiper}
              >
                {testimonialData.map((testi, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={`${styles.testiWrapper} d-flex`}>
                        <div
                          className={`${styles.testi} d-flex`}
                          style={{
                            marginInline:
                              testi.id % 2 == 0 ? "50px 0" : "0 50px",
                          }}
                        >
                          <div className={styles.testiImg}>
                            <Image
                              src={testi.img}
                              alt=""
                              height={80}
                              width={80}
                            />
                          </div>
                          <div className={styles.testiText}>
                            <h5>{testi.name}</h5>
                            <h6>{testi.role}</h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className={`${styles.bottomR} col-lg-6`}>
              <h3>
                Why do people love <span className="formula">Zerror</span>
              </h3>
              <Swiper
                navigation={{
                  prevEl: ".slidePrevBtn",
                  nextEl: ".slideNextBtn",
                }}
                scrollbar={{
                  hide: true,
                }}
                onSwiper={setThumbsSwiper}
                freeMode={true}
                modules={[Scrollbar, Navigation]}
                className={styles.testiSwiper2}
              >
                {testimonialData.map((testi, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <p className="t-muted">{`"${testi.testi}"`}</p>
                    </SwiperSlide>
                  );
                })}
                <div className={styles.navBtns}>
                  <button
                    className={styles.slidePrevBtn}
                    onClick={() => thumbsSwiper.slidePrev()}
                  >
                    {"<"}
                  </button>
                  <button
                    className={styles.slideNextBtn}
                    onClick={() => thumbsSwiper.slideNext()}
                  >
                    {">"}
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
