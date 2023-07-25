import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PortfolioData from "../portfolioData";
import { sliderSettings } from "../common";
import Image  from "next/image";
import Link from "next/link";
import styles from "@/app/styles/portfolio.module.css"


export const Portfolio = () => {
	// useEffect(() => {
	//   new Swiper(".swiper-container", {
	//     // Customize Swiper options here
	//     slidesPerView: "auto",
	//     spaceBetween: 20,
	//   });
	// }, []);

	return (
		// <div className={styles.pWrapper}>
		// 	<h2>Our Portfolio</h2>
		// 	<div className="container-fluid">
		// 		<div className="row">
		// 			<Swiper {...sliderSettings}>
		// 				{PortfolioData.map((card, index) => {
		// 					return (
		// 						<SwiperSlide key={index}>
		// 							<div className={`${styles.pCard} col-lg-4 col-sm-12`}>
		// 								<div className="card">
		// 									<div className="card-img-top">
		// 										<Image className={styles.cardImg}  src={card.img} alt="" width={1000} height={1000} />
		// 									</div>
		// 									<div className="card-body">
		// 										<h4 className="card-title">{card.title}</h4>
		// 										<p className="card-text">{card.text}</p>
		// 										<Link className={styles.cardLink} href="#">
		// 											<p>See More</p>
		// 										</Link>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</SwiperSlide>
		// 					);

		// 				}

		// 				)}
		// 			</Swiper>
		// 		</div>
		// 	</div>
		// </div>
		<div>Hello</div>
		
	);
};

export default Portfolio;
