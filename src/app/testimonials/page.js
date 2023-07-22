"use client"

import React from "react";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/app/styles/testimonials.module.css"


const testimonials = () => {
	return (
		<div className={styles.tWrapper}>
			<h1>Success Stories</h1>
			<Swiper
				direction={"vertical"}
				pagination={{
					clickable: true,
					// type: 'progressbar'
				}}
				slidesPerView={1}
				loop={true}

				// navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
			</Swiper>
		</div>
	);
};

export default testimonials;
