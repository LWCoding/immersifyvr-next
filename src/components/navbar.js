"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import QuoteButton from "./quoteButton";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [pathname, setPathname] = useState("");
	const currentPathname = usePathname();

	useEffect(() => {
		setPathname(currentPathname);
	}, [currentPathname]);

	return (
		<nav className={styles.navbar}>
			<Link href="/" className={styles.logo}>
				<Image
					src="/img/logo.avif"
					width={80}
					height={80}
					alt="ImmersifyVR Logo"
				/>
				<div className={styles.brandText}>
					<h1>ImmersifyVR</h1>
					<p>Virtual Reality for Seniors</p>
				</div>
			</Link>

			{/* Hamburger icon */}
			<button
				className={styles.hamburger}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle navigation menu"
			>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</button>

			<ul
				className={`${styles.navLinks} ${
					menuOpen ? styles.navActive : ""
				}`}
			>
				<li>
					<Link
						href="/"
						className={pathname === "/" ? styles.active : ""}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/product"
						className={
							pathname.startsWith("/product") ? styles.active : ""
						}
					>
						Product
					</Link>
				</li>
				<li>
					<Link
						href="/services"
						className={
							pathname.startsWith("/services")
								? styles.active
								: ""
						}
					>
						Services
					</Link>
				</li>
				<li>
					<Link
						href="/our-team"
						className={
							pathname.startsWith("/our-team")
								? styles.active
								: ""
						}
					>
						Our Team
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={
							pathname.startsWith("/contact") ? styles.active : ""
						}
					>
						Contact
					</Link>
				</li>
				<QuoteButton />
			</ul>
		</nav>
	);
}
