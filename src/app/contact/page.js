import styles from "./page.module.css";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import SquishToMiddle from "@/components/squishToMiddle";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import Spacer from "@/components/spacer";
import ContactForm from "@/components/contactForm";

export default function Contact() {
	return (
		<div>
			<Navbar />
			<ImageHeader
				title="Contact Us"
				backgroundImage="/img/beach-view.avif"
			/>
			<SquishToMiddle>
				<Spacer size="medium" />
				<ContentBlock>
					<SideBySide>
						<div>
							<Image
								className={styles.sideBySideImage}
								src="/img/presentation.avif"
								alt="A team member helping out an older adult"
								width={500}
								height={500}
							/>
						</div>
						<div>
							<p>
								Have a question about our services?
								<br />
								<br />
								Use this quick-and-easy contact form and we'll
								get back to you within a week.
								<ContactForm />
							</p>
						</div>
					</SideBySide>
				</ContentBlock>
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
