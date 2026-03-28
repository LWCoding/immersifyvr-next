"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
	const v = typeof value === "string" ? value.trim() : "";
	if (name === "email") {
		if (!v) return "Email is required.";
		if (!emailPattern.test(v)) return "Enter a valid email address.";
		return "";
	}
	if (!v) {
		const labels = {
			first_name: "First name",
			last_name: "Last name",
			message: "Message",
		};
		return `${labels[name] || "This field"} is required.`;
	}
	return "";
}

/*
ContactForm component for displaying a contact form.
*/
export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [values, setValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	});
	const [touched, setTouched] = useState({});
	const [errors, setErrors] = useState({});

	function setFieldError(name, value) {
		setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
	}

	function handleBlur(name, currentValue) {
		setTouched((prev) => ({ ...prev, [name]: true }));
		setFieldError(name, currentValue);
	}

	function handleChange(name, value) {
		setValues((prev) => ({ ...prev, [name]: value }));
		if (touched[name]) {
			setFieldError(name, value);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const names = ["first_name", "last_name", "email", "message"];
		const nextTouched = Object.fromEntries(names.map((n) => [n, true]));
		setTouched(nextTouched);
		const nextErrors = {};
		let hasError = false;
		for (const n of names) {
			const err = validateField(n, values[n]);
			nextErrors[n] = err;
			if (err) hasError = true;
		}
		setErrors(nextErrors);
		if (hasError) return;

		const form = event.target;
		const fd = new FormData(form);
		fetch("https://formspree.io/f/xeokywyw", {
			method: "POST",
			headers: { Accept: "application/json" },
			body: fd,
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
				<form className={styles.form} onSubmit={handleSubmit} noValidate>
					<div className={styles.fieldGroup}>
						<div className={styles.inputGroup}>
							<label className={styles.formLabel} htmlFor="first_name">
								First Name <span className={styles.required}>*</span>
							</label>
							<input
								className={`${styles.formInput} ${errors.first_name ? styles.inputError : ""}`}
								type="text"
								id="first_name"
								name="first_name"
								value={values.first_name}
								onChange={(e) => handleChange("first_name", e.target.value)}
								onBlur={(e) => handleBlur("first_name", e.target.value)}
								aria-invalid={!!errors.first_name}
								aria-describedby={errors.first_name ? "first_name-error" : undefined}
							/>
							{touched.first_name && errors.first_name ? (
								<span id="first_name-error" className={styles.fieldError} role="alert">
									{errors.first_name}
								</span>
							) : null}
						</div>
						<div className={styles.inputGroup}>
							<label className={styles.formLabel} htmlFor="last_name">
								Last Name <span className={styles.required}>*</span>
							</label>
							<input
								className={`${styles.formInput} ${errors.last_name ? styles.inputError : ""}`}
								type="text"
								id="last_name"
								name="last_name"
								value={values.last_name}
								onChange={(e) => handleChange("last_name", e.target.value)}
								onBlur={(e) => handleBlur("last_name", e.target.value)}
								aria-invalid={!!errors.last_name}
								aria-describedby={errors.last_name ? "last_name-error" : undefined}
							/>
							{touched.last_name && errors.last_name ? (
								<span id="last_name-error" className={styles.fieldError} role="alert">
									{errors.last_name}
								</span>
							) : null}
						</div>
					</div>
					<div className={styles.inputGroup}>
						<label className={styles.formLabel} htmlFor="email">
							Email <span className={styles.required}>*</span>
						</label>
						<input
							className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
							type="email"
							id="email"
							name="email"
							value={values.email}
							onChange={(e) => handleChange("email", e.target.value)}
							onBlur={(e) => handleBlur("email", e.target.value)}
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? "email-error" : undefined}
						/>
						{touched.email && errors.email ? (
							<span id="email-error" className={styles.fieldError} role="alert">
								{errors.email}
							</span>
						) : null}
					</div>
					<div className={styles.inputGroup}>
						<label className={styles.formLabel} htmlFor="message">
							Message <span className={styles.required}>*</span>
						</label>
						<textarea
							className={`${styles.formInput} ${errors.message ? styles.inputError : ""}`}
							id="message"
							name="message"
							rows="4"
							value={values.message}
							onChange={(e) => handleChange("message", e.target.value)}
							onBlur={(e) => handleBlur("message", e.target.value)}
							aria-invalid={!!errors.message}
							aria-describedby={errors.message ? "message-error" : undefined}
						/>
						{touched.message && errors.message ? (
							<span id="message-error" className={styles.fieldError} role="alert">
								{errors.message}
							</span>
						) : null}
					</div>
					<button className={styles.submitForm} type="submit">
						Send Message
					</button>
				</form>
			)}
		</div>
	);
}
