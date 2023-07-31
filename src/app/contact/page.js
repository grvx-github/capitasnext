'use client'

import Header from "../Components/Header";
import InnerBanner from "../Components/InnerBanner";
import Contact from '../Components/Contact'
import Footer from "../Components/Footer";
import style from "@/app/styles/contact.module.css"

export const ContactPage = () =>{
	return(
		<div className="contactsPage">
			
				<div className="innerHeader">
					<Header />
					<InnerBanner />
				</div>
			<div className="contactsBanner" >
				<div className={style.bannerMain}>
					<h2>
						Contact Us
					</h2>
					<Contact/>
					{/* <div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="cardWrapper">
									<div className="card">
										<div className="card-header">

										</div>
										<div className="card-body">
											 
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="cardWrapper">
									<div className="card">
										<div className="card-header">

										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="cardWrapper">
									<div className="card">
										<div className="card-header">

										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				{/* <div className="contactsBody">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6"></div>
							<div className="col-lg-6"></div>
						</div>
					</div>
					<div className="container">
						<div className="mapsSection">

						</div>
					</div>
					<div className="faqSection">
						<div>
							s
						</div>
					</div>
				</div> */}
				<Footer/>
			</div>
		</div>
	)
}

export default ContactPage;