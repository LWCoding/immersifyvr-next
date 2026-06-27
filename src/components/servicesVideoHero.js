"use client";

import { useRef, useState } from "react";
import styles from "./servicesVideoHero.module.css";

const DEMO_VIDEO_SRC = "/video/demo.MOV";

function VolumeOnIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

export default function ServicesVideoHero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
  }

  return (
    <section className={styles.videoHero} aria-label="ImmersifyVR demo video">
      <video
        ref={videoRef}
        className={styles.videoHeroVideo}
        src={DEMO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="ImmersifyVR demo video"
      />
      <button
        type="button"
        className={styles.volumeButton}
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
      >
        {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </button>
    </section>
  );
}
