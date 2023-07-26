'use client'

import ServiceCard from "./ServiceCard";
import cardDetails from "@/app/services"
import styles from '@/app/styles/services.module.css'

export const Services = () => {

	return (
		<div className={styles.servicesSection}>
			<h3 className={styles.serviceHead}>WHAT WE DO</h3>
			<div className={`container-fluid`}>
				<div className={`${styles.serviceRow} row`}>
					{cardDetails.map((entry, index) => (
						<ServiceCard
							key={index}
							hiddenIcon={entry.hoverIcon}
							icon={entry.icon} 
							title={entry.title}
							content={entry.content}
							
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;