import styles from "./quoteForm.module.css";

/*
QuoteForm component for displaying a quote form.
*/
export default function QuoteForm(props) {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<div className={styles.inputGroup}>
					<label className={styles.formLabel} htmlFor="first-name">
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
				<button className={styles.submitForm} type="submit">
					Get a Quote
				</button>
			</form>
		</div>
	);
}
