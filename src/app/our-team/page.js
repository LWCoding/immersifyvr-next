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
				backgroundImage="/img/beach-view.png"
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
							textAlign: 'center', 
							lineHeight: '1.8',
							color: 'white',
							padding: '4rem 3rem',
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							minHeight: '400px'
						}}>
							<p style={{ 
								margin: 0,
								maxWidth: '600px',
								fontWeight: '400'
							}}>
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
								role: "Team Member",
								introduction: "I love programming, music, art, and helping others. I worked on both the VR and website development and design, such as the spaceball design and the website layout."
							},
							{
								src: "/img/jaeho-headshot.avif",
								alt: "Team Member 2",
								name: "Jaeho Lee",
								role: "Team Member",
								introduction: "I'm a learning game developer and also enjoy music, golf, and running as a hobby. With the team, I work on various parts of the project, from the swimming algorithm to tutorials."
							},
							{
								src: "/img/lucas-headshot.avif",
								alt: "Team Member 3",
								name: "Lucas Wang",
								role: "Business Coach",
								introduction: "I'm a product and user experience designer who loves playing games. I guide the business side of things and help plan our next moves."
							},
							{
								src: "/img/andy-headshot.avif",
								alt: "Team Member 4",
								name: "Andy Liu",
								role: "Technical Coach",
								introduction: "(Placeholder) Hi, I'm Andy and I'm into VR development. I mentor the team on technical challenges and help debug our code."
							},
						]}
					/>
				</ContentBlock>
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
