"use client"

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { FaQuoteLeft } from "react-icons/fa"
import Testimonial from "../Components/Testimonial"

 const testimonialsPage = () => {
	return(
		<div className="testimonialPage">
			<Header />
			<Testimonial />
			{/* <div className="col-lg-12">

		</div>
		<div className="col-lg-4">
			<div className="card">
				<div className="card-img-top">
					<FaQuoteLeft />
				</div>
				<div className="card title">
					<h5></h5>
				</div>
				<div className="card-subtitle t-muted">

				</div>
				<div className="card-text t.muted">

				</div>
			</div>
		</div>
		<div className="col-lg-4">
			<div className="card">
				<div className="card-img-top">
					<FaQuoteLeft />
				</div>
				<div className="card title">
					<h5></h5>
				</div>
				<div className="card-subtitle t-muted">

				</div>
				<div className="card-text">

				</div>
			</div>
		</div>
		<div className="col-lg-4">
			<div className="card">
				<div className="card-img-top">
					<FaQuoteLeft />
				</div>
				<div className="card title">
					<h5></h5>
				</div>
				<div className="card-subtitle t-muted">

				</div>
				<div className="card-text">

				</div>
			</div>
		</div> */}
			<Footer />
		</div>
	)
	
}

export default testimonialsPage;