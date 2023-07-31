'use client'

import Header from "../Components/Header";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import InnerBanner from "../Components/InnerBanner";


const servicePage = () => {
	return(
		<div className="servicePage">
			<div className="innerHeader">
				<Header />
				<InnerBanner />
			</div>

			<Services />

			<Footer />
		</div>
		
		
	)
	
}

export default servicePage;

{/* <div className="servicesMain">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={"/public"} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
						<div className="serviceBox">
							<div className="serviceItem">
								<Image src={} alt="" height={50} width={50}></Image>
								<div className="textDiv">
									<div className="visible"></div>
									<div className="invisible"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}