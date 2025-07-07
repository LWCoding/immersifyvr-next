import styles from "./contactForm.module.css";

/*
ContactForm component for displaying a contact form.
*/
export default function ContactForm(props) {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<div className={styles.fieldGroup}>
					<div className={styles.inputGroup}>
						<label
							className={styles.formLabel}
							htmlFor="first-name"
						>
							First Name
						</label>
						<input
							className={styles.formInput}
							type="text"
							id="first-name"
							name="first-name"
						/>
					</div>
					<div className={styles.inputGroup}>
						<label className={styles.formLabel} htmlFor="last-name">
							Last Name
						</label>
						<input
							className={styles.formInput}
							type="text"
							id="last-name"
							name="last-name"
						/>
					</div>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.formLabel} htmlFor="email">
						Email <span className={styles.required}>*</span>
					</label>
					<input
						className={styles.formInput}
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.formLabel} htmlFor="message">
						Message
					</label>
					<textarea
						className={styles.formInput}
						id="message"
						name="message"
						rows="4"
						required
					/>
				</div>
				<button className={styles.submitForm} type="submit">
					Send Message
				</button>
			</form>
		</div>
	);
}
