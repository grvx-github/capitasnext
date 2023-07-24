'use client'

import Image from "next/image";
import styles from "@/app/styles/hero.module.css"
import { useState, useEffect } from "react";


const Hero = () => {

	// const [loopNum, setLoopNum] = useState(0);
	// const [isDeleting, setIsDeleting] = useState(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const toRotate = ["Dreams", "Hopes", "Aspirations"];
	const [text, setText] = useState("");
	// const [delta, setDelta] = useState(300);
	const period = 2000;

	useEffect(() => {
		let isMounted = true;
		let loopNum = 0;
		let isDeleting = false;
		let delta = 300;

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText;
		if (isDeleting) {
			updatedText = fullText.substring(0, text.length - 1);
		} else {
			updatedText = fullText.substring(0, text.length + 1);
		}
		setText(updatedText);

		if (!isDeleting && updatedText === fullText) {
			delta = period;
			isDeleting = true;
		} else if (isDeleting && updatedText === '') {
			isDeleting = false;
			loopNum++;
			delta = 300;
		}

		if (isMounted) {
			setTimeout(tick, delta);
		}
	};

	tick();


	return () => {
		isMounted = false;
	};
	}, [text, toRotate, period])

	return (
		<section className={styles.heroSection} id="home">
			<div className={styles.container}>
				<div className={styles.bannerMain}>
					<div className={styles.bannerText}>
						<div className={styles.welcome}>
							<h2>Welcome to </h2>
							<Image src="/logo.png" alt="" height={75} width={100} />
						</div>

						<div className={styles.heading}>
							<h1>BUILDING </h1>
							<h1>
								<span className={styles.typed}>{text}</span>
							</h1>
						</div>

						<p>Home of Real Estate Investment &amp; Advisory Masters</p>
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
			</div>
		</section>
	);
}

export default Hero;