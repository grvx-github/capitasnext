import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import PortfolioData from "../portfolioData";

import Image from "next/image";
import Link from "next/link";


// Swiper styles
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from "@/app/styles/portfolio.module.css"

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const Portfolio = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [show, setShow] = useState("none")

	function handleMouseOver() {
		setShow("block")
	}
	function handleMouseOut(){
		setShow("none")
	}
	return (
		<div className={styles.pWrapper}>
			<h2 className='formula'>Our Portfolio</h2>
			<div className="container-fluid">
				<div className={`row mi-a ${styles.swiperWrapper}`}>
					<Swiper
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Thumbs]}
						className="mySwiper2">
						{PortfolioData.map((card, index) => {
							return (
								<SwiperSlide key={index}>
									<div className={`${styles.pCard} col-lg-9 col-sm-12 mi-a`} onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}>
										<div className="card">
											<div className="card-img-top">
												<Image className={styles.cardImg} src={card.img} alt="" width={1000} height={1000} />
											</div>
											<div className={`card-body ${styles.cbd}`} style={{ display: show}}>
												<h4 className="card-title">{card.title}</h4>
												<p className="card-text">{card.text}</p>
												<Link className={styles.cardLink} href="#">
													<p>See More</p>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);

						}

						)}
					</Swiper>
					<div className={`${styles.bottomContainer}`}>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={8}
						slidesPerView={3}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper"
					>
						{PortfolioData.map((card, index) => {
							return (
						
								<SwiperSlide key={index}>
									<Image className={styles.bImg} src={card.img} alt="" width={1000} height={1000} />
								</SwiperSlide>
								
							);
						}

						)}
					</Swiper>
					</div>
				</div>
			</div>
		</div>

		
	);
};

export default Portfolio;
