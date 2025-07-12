"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

/*
ContactForm component for displaying a contact form.
*/
export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		fetch("https://formspree.io/f/xeokywyw", {
			method: "POST",
			headers: { Accept: "application/json" },
			body: new FormData(event.target),
		})
			.then((response) => {
				if (response.ok) {
					setSubmitted(true);
				}
			})
			.catch((error) => {
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
					<div className={styles.fieldGroup}>
						<div className={styles.inputGroup}>
							<label className={styles.formLabel} htmlFor="first_name">
								First Name
							</label>
							<input
								className={styles.formInput}
								type="text"
								id="first_name"
								name="first_name"
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label className={styles.formLabel} htmlFor="last_name">
								Last Name
							</label>
							<input
								className={styles.formInput}
								type="text"
								id="last_name"
								name="last_name"
								required
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
			)}
		</div>
	);
}
