import styles from "./profileGallery.module.css";
import Image from "next/image";

export default function ProfileGallery({ profiles }) {
  return (
    <div className={styles.gallery}>
      {profiles.map((profile, index) => (
        <div key={index} className={styles.profileCard}>
          <Image
            src={profile.src}
            alt={profile.alt}
            className={styles.profileImage}
            width={200}
            height={200}
          />
          <h3 className={styles.profileName}>{profile.name}</h3>
          <p className={styles.profileRole}>{profile.role}</p>
        </div>
      ))}
    </div>
  );
}
