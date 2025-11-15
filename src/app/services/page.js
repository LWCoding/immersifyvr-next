import styles from "./page.module.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import SquishToMiddle from "@/components/squishToMiddle";
import QuoteButton from "@/components/quoteButton";

export default function Product() {
	return (
		<div>
			<Navbar />
			<ImageHeader
				title="Our Service"
				backgroundImage="/img/beach-view.png"
			/>
			<SquishToMiddle>
				<ContentBlock titleText="The Process">
					<div className={styles.servicesGrid}>
						<div className={styles.featureCard}>
							<div className={styles.featureCardContent}>
								<div className={styles.featureCardHeader}>
									<div className={styles.numberIcon}>
										1
									</div>
									<h2 className={styles.featureTitle}>Workshops at Retirement Homes</h2>
								</div>
								<div className={styles.featureDescription}>
									<ul>
										<li>
											Host promotional workshops at retirement homes
										</li>
										<li>Our team comes to you</li>
										<li>
											Demonstrate VR experiences to residents and staff
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.arrow}>→</div>
						<div className={styles.featureCard}>
							<div className={styles.featureCardContent}>
								<div className={styles.featureCardHeader}>
									<div className={styles.numberIcon}>
										2
									</div>
									<h2 className={styles.featureTitle}>Personal Trainer One-on-Ones</h2>
								</div>
								<div className={styles.featureDescription}>
									<ul>
										<li>One-on-one sessions with residents</li>
										<li>
											Personalized VR exercise experiences
										</li>
										<li>
											Individual attention and support
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.arrow}>→</div>
						<div className={styles.featureCard}>
							<div className={styles.featureCardContent}>
								<div className={styles.featureCardHeader}>
									<div className={styles.numberIcon}>
										3
									</div>
									<h2 className={styles.featureTitle}>Support</h2>
								</div>
								<div className={styles.featureDescription}>
									<ul>
										<li>Ongoing technical support</li>
										<li>
											Troubleshoot issues and provide assistance
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</ContentBlock>
				<div className={styles.quoteSection}>
					<div className={styles.quoteBackground}>
						<div className={styles.quoteOverlay}>
							<div className={styles.quoteContent}>
								<h2 className={styles.quoteHeader}>Ready to start?</h2>
								<QuoteButton />
							</div>
						</div>
					</div>
				</div>
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
