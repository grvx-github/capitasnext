'use client'

import ServiceCard from "./ServiceCard";
import cardDetails from "@/app/services"
import styles from '@/app/styles/services.module.css'
import { useState } from "react";


export const Services = () => {

	const [cardState, setCardState] = useState(4);

	const handleMouseOver = () => {
		setCardState(true);
		console.log("hi")
	};

	const handleMouseOut = () => {
		setCardState(false);
	};
	return (
		<div className={styles.servicesSection}>
			<div className={`container-fluid`}>
				<div className={`${styles.serviceRow} row`}>
					{cardDetails.map((entry, index) => (
						<ServiceCard
							key={index}
							icon={entry.icon} 
							title={entry.title}
							content={entry.content}
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}
							style={{ backgroundColor: cardState ? "#0089e9" : "inherit" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;