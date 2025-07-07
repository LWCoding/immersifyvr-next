import style from "./page.module.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import SquishToMiddle from "@/components/squishToMiddle";
import QuoteForm from "@/components/quoteForm";

export default function Product() {
	return (
		<div>
			<Navbar />
			<ImageHeader
				title="Our Service"
				backgroundImage="/img/beach-view.avif"
			/>
			<SquishToMiddle>
				<ContentBlock titleText="The Process">
					<SideBySide>
						<div>
							<h2>Training Sessions</h2>
							<ul>
								<li>
									Recommended 3 in-person training sessions
									minimum
								</li>
								<li>Our team comes to you</li>
								<li>
									Work with seniors, nurses, and anyone
									using/setting up our application
								</li>
							</ul>
						</div>
						<div>
							<h2>Rentals</h2>
							<ul>
								<li>Rentals of the Meta Quest 3 headset</li>
								<li>
									Accommodate for extensive number of virtual
									reality headsets required
								</li>
								<li>
									Pre-downloaded with our application for free
								</li>
							</ul>
						</div>
						<div>
							<h2>Support</h2>
							<ul>
								<li>Easy and efficient communication</li>
								<li>
									Troubleshoot issues even after training
									sessions
								</li>
							</ul>
						</div>
					</SideBySide>
				</ContentBlock>
				<ContentBlock titleText="Start Now!">
					<QuoteForm />
				</ContentBlock>
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
