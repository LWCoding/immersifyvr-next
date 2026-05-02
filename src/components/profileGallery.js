"use client";

import styles from "./profileGallery.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ProfileGallery({ profiles }) {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (index) => {
    setOpenCards((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  return (
    <div className={styles.gallery}>
      {profiles.map((profile, index) => (
        <div key={index} className={styles.profileCard}>
          <div className={styles.profileImageWrap}>
            <Image
              src={profile.src}
              alt={profile.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className={styles.profileImage}
              priority={index < 2}
            />
          </div>
          <div
            className={`${styles.profileInfoPanel} ${
              openCards[index] ? styles.profileInfoPanelOpen : ""
            }`}
          >
            <div className={styles.profileHeaderRow}>
              <div>
                <h3 className={styles.profileName}>{profile.name}</h3>
                <p className={styles.profileRole}>{profile.role}</p>
              </div>
              <button
                type="button"
                className={styles.expandButton}
                onClick={() => toggleCard(index)}
                aria-expanded={Boolean(openCards[index])}
                aria-label={
                  openCards[index]
                    ? `Collapse ${profile.name} introduction`
                    : `Expand ${profile.name} introduction`
                }
              >
                <span
                  className={`${styles.expandArrow} ${
                    openCards[index] ? styles.expandArrowOpen : ""
                  }`}
                />
              </button>
            </div>
            {profile.introduction ? (
              <div
                className={`${styles.profileIntroWrap} ${
                  openCards[index] ? styles.profileIntroWrapOpen : ""
                }`}
              >
                <p className={styles.profileIntro}>{profile.introduction}</p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
