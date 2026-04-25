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
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className={styles.profileBg}
            priority={index < 2}
          />
          <div className={styles.profileOverlay} />
          <div className={styles.profileText}>
            <h3 className={styles.profileName}>{profile.name}</h3>
            <p className={styles.profileRole}>{profile.role}</p>
            {profile.introduction ? (
              <p className={styles.profileIntro}>{profile.introduction}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
