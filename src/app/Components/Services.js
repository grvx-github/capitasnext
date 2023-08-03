'use client'

import ServiceCard from "./ServiceCard";
import cardDetails from "@/app/services"
import styles from '@/app/styles/services.module.css'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const Services = () => {
	const wRef = useRef()

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(wRef.current, { width: "0" }, { width: "100%", duration: 0.7, ease: "inOut", scrollTrigger: { trigger: ".serviceHead" } })
		}, wRef)
	}, [])

	return (
		<div className={styles.servicesSection}>
			<h3 className={`${styles.serviceHead} formula`}>WHAT WE DO</h3>
			<div className={`container-fluid`}>
				<div className={`${styles.serviceRow} row`}>
					{cardDetails.map((entry, index) => (
						<ServiceCard
							key={index}
							hiddenIcon={entry.hoverIcon}
							icon={entry.icon} 
							title={entry.title}
							content={entry.content}
							ref={wRef}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;