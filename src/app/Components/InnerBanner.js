import CountUp from "react-countup";

const InnerBanner = () => {
	return (
		<div className="innerBanner row">
			<div className="innerBannerLeft col-lg-6 col-sm-12">
				<h2>Who We Are</h2>
				<p>
					Our mission is to engage in issues that are of concern to
					individuals
				</p>
			</div>
			<div className="innerBannerRight col-lg-6 col-sm-12">
				<div className="d-flex rightdivs">
					<div className="counter">
						<CountUp start={0} end={19} delay={0}>
							{({ countUpRef }) => (
								<div className="runner">
									<h3 ref={countUpRef}></h3>
									<h3>+</h3>
								</div>
							)}
						</CountUp>
						<div><h4>Premium Houses</h4></div>
					</div>
					<div className="counter">
						<CountUp start={0} end={10000} delay={0}>
							{({ countUpRef }) => (
								<div className="runner">
									<h3 ref={countUpRef}></h3>
									<h3>+</h3>
								</div>
							)}
						</CountUp>
						<div><h4>Happy Clients</h4></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InnerBanner