import Image from "next/image";
import { BsShieldCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { PiArmchairLight } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";


import styles from "@/app/styles/about.module.css";

const Features = () => {
	const lRefi = useRef()

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(lRefi.current, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "in" },)
		}, lRefi)
		return () => ctx.revert();
	}, [])

	return (
		<div className={`container ${styles.featuresContainer}`}>
			<section className={` ${styles.investorSection} mt-4`}>
				<div className={`${styles.mainTitle} text-center`}>
					<h2 className="formula">
						<span>OUR</span> FEATURE
					</h2>
					<div className={`${styles.circleItems} ${styles.fadeInUp}`}>
						<div className={`${styles.wheel}`}>
							<div className={`${styles.featureThings}`}>
								<span>
									Safety <strong>Area</strong>
								</span>
								<span>
									<a href="#">
										<BsShieldCheck />
									</a>
								</span>
							</div>
							<div className={`${styles.featureThings}`}>
								<span>
									Good <strong>Furniture</strong>
								</span>
								<span>
									<a href="#">
										<PiArmchairLight />
									</a>
								</span>
							</div>
							<div className={`${styles.featureThings}`}>
								<span>
									<a href="#">
										<BiSupport />
									</a>
								</span>
								<span>
									24 Hours <strong>Support</strong>
								</span>
							</div>
							<div className={`${styles.featureThings}`}>
								<span>
									<a href="#">
										<RiTeamLine />
									</a>
								</span>
								<span>
									Good <strong>Neighbour</strong>
								</span>
							</div>
							{/* <div class="border-circle"></div> */}
							<div className={`${styles.featureMainImg}`} ref={lRefi}>
								<Image
									src="/feature-bg.png"
									alt="Feature"
									width={700}
									height={400}
								/>
							</div>
						</div>{" "}
						{/* /.wheel */}
					</div>{" "}
					{/* /.circle-items */}
				</div>{" "}
				{/* /.container */}
			</section>
		</div>
	)
}

export default Features;