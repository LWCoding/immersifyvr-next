"use client";

import { useState } from "react";
import styles from "./quoteForm.module.css";

/*
QuoteForm component for displaying a quote form.
*/
export default function QuoteForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		fetch("https://formspree.io/f/xanjrzyk", {
			method: "POST",
			headers: { 'Accept': 'application/json' },
			body: new FormData(event.target),
		}).then((response) => {
			if (response.ok) {
				setSubmitted(true);
			}
		}).catch((error) => {
			console.error("Form error:", error);
			alert("There was an error submitting the form.");
		});
	}

	function handleReload() {
		window.location.reload();
	}

	return (
		<div className={styles.formContainer}>
			{submitted ? (
				<div className={styles.thankYouMessage}>
					<h2>Thank you for your submission!</h2>
					<p>We will get back to you shortly.</p>
					<button className={styles.reloadButton} onClick={handleReload}>
						Reload Page
					</button>
				</div>
			) : (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label className={styles.formLabel} htmlFor="first-name">
							First Name
						</label>
						<input
							className={styles.formInput}
							type="text"
							id="first-name"
							name="first_name"
							required
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
							name="last_name"
							required
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
			)}
		</div>
	);
}