import { Image, Link } from "next"
import { useState } from "react";

const ServiceBox = (props) => {
	const [hovStyle, setHovStyle] = useState({ transform: "translate3d(0px, 80px, 0px)" });

	function handleMouseEnter() {
		setHovStyle({ transform: "translate3d(0px, 0px, 0px)", opacity: 1 });
	}

	function handleMouseLeave() {
		setHovStyle({ transform: "translate3d(0px, 80px, 0px)", opacity: 0 });
	}
	// let iconStyles = { fontSize: "2.5em" };

	return (
		// <div className="serviceBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		// 	<div className="serviceItem">
		// 		<Image src={props.img} alt="" height={400} width={400} />
		// 		<div className="textDiv">
		// 			<div className="visible">
		// 				<div className="serviceListIcon">
		// 					{props.icon}
		// 				</div>
		// 				<h4 className="serviceListTitle">{props.title}</h4>
		// 			</div>
		// 			<div className={`inv`} style={hovStyle}>
		// 				<p>
		// 					{props.content}
		// 				</p>
		// 				<Link href="">Read More</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div></div>
	)
}

export default ServiceBox;
