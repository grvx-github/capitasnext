import styles from '@/app/styles/contact.module.css'

const Contact = () => {
	<div className={styles.contactSection}>
		<h3>GET IN TOUCH</h3>
		<div className={styles.contactWrapper}>
			<form action="" className={styles.contactForm}>
				<div>
					<input
						type="text"
						className="form-control"
						placeholder="NAME"
						fdprocessedid="ry7kbb"
					/>
				</div>
				<div>
					<input
						type="tel"
						className="form-control"
						placeholder="PHONE NO."
						fdprocessedid="semga"
					/>
				</div>
				<div>
					<input
						type="email"
						className="form-control"
						placeholder="EMAIL ID"
						fdprocessedid="6n89d"
					/>
				</div>
				<div className={styles.messageDiv}>
					<input
						type="text"
						className="form-control"
						placeholder="MESSAGE"
						fdprocessedid="u255kb"
					/>
				</div>
				<button className={styles.btn3} fdprocessedid="tyvzqd">
					SEND
				</button>
			</form>
		</div>
	</div>
}

export default Contact;