import styles from "./page.module.css";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import SquishToMiddle from "@/components/squishToMiddle";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import ProfileGallery from "@/components/profileGallery";

export default function OurTeam() {
	return (
		<div>
			<Navbar />
			<ImageHeader
				title="Our Team"
				backgroundImage="/img/beach-view.avif"
			/>
			<SquishToMiddle>
				<ContentBlock titleText="Who We Are">
					<SideBySide>
						<div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<Image
								className={styles.sideBySideImage}
								src="/img/presentation.avif"
								alt="A team member helping out an older adult"
								width={600}
								height={350}
							/>
						</div>
						<div style={{ 
							flex: '1',
							textAlign: 'left', 
							lineHeight: '1.6',
							color: 'white',
							padding: '0 2rem'
						}}>
							<p>
								Our project idea along with the team stems from
								our shared passion for virtual reality, game
								development, and improving the lives of the
								elderly. Our team members are all young
								teenagers with grandparents who face the same
								issues we work to solve with ImmersifyVR.
							</p>
						</div>
					</SideBySide>
				</ContentBlock>
				<ContentBlock titleText="Our Team">
					<ProfileGallery
						profiles={[
							{
								src: "/img/jonny-headshot.avif",
								alt: "Team Member 1",
								name: "Jonny Tang",
								role: "Art Director",
							},
							{
								src: "/img/jaeho-headshot.avif",
								alt: "Team Member 2",
								name: "Jaeho Lee",
								role: "Tech Lead",
							},
							{
								src: "/img/lucas-headshot.avif",
								alt: "Team Member 3",
								name: "Lucas Wang",
								role: "Project Manager",
							},
							{
								src: "/img/andy-headshot.avif",
								alt: "Team Member 4",
								name: "Andy Liu",
								role: "Product Designer",
							},
						]}
					/>
				</ContentBlock>
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
