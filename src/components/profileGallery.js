import styles from "./profileGallery.module.css";

export default function ProfileGallery({ profiles }) {
	return (
		<div className={styles.gallery}>
			{profiles.map((profile, index) => (
				<div key={index} className={styles.profileCard}>
					<img
						src={profile.src}
						alt={profile.alt}
						className={styles.profileImage}
					/>
					<h3 className={styles.profileName}>{profile.name}</h3>
					<p className={styles.profileRole}>{profile.role}</p>
				</div>
			))}
		</div>
	);
}
