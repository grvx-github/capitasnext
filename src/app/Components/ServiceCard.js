import Link from "next/link";
import styles from "@/app/styles/services.module.css";

export const ServiceCard = (props) => {
	return (
		<div className={`col-lg-4 col-sm-12`} >
			<div className={styles.serviceCard}>
				<div className={styles.serviceCardItem}>
					<div className={styles.serviceCardIcon}>{props.icon}</div>
					<div className={styles.title}>
						<h3>{props.title}</h3>
					</div>
					<div className="content">
						<p>{props.content}</p>
					</div>
					<div className={styles.vmBtn}>
						<button class={styles.btn2}>
							<Link href="">READ MORE</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;