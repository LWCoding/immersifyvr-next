"use client";

import styles from "./page.module.css";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteButton from "@/components/quoteButton";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import SquishToMiddle from "@/components/squishToMiddle";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            Welcome to <span>ImmersifyVR</span>
          </h2>
          <p>
            We offer <strong>story-driven experiences</strong> that empower the
            elderly or the disabled to become <strong>physically active</strong>
            .
          </p>
          <QuoteButton />
        </div>
      </div>

      <SquishToMiddle>
        <ContentBlock titleText="What We Do">
          <SideBySide>
            <div>
              <p>
                <span className={styles.pEmphText}>1 in 3</span> older adults
                suffer from a variety of health issues largely due to lack of
                exercise.
              </p>
              <p>
                ImmersifyVR is a virtual reality exercise simulator designed to
                make exercising fun.
              </p>
            </div>
            <div>
              <Image
                className={styles.sideBySideImage}
                src="/img/chateau-1.avif"
                alt="A team member helping out an older adult"
                width={500}
                height={250}
              />
            </div>
          </SideBySide>
        </ContentBlock>
        <ContentBlock titleText="Why ImmersifyVR?">
          <SideBySide>
            <div className={styles.featureCard}>
              <div className={styles.featureCardContent}>
                <div className={styles.featureCardHeader}>
                  <div className={styles.featureIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3370ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <h2 className={styles.featureTitle}>Engaging Storylines</h2>
                </div>
                <p className={styles.featureDescription}>
                  Our VR experiences are built around engaging narratives that
                  captivate users, making exercise feel like an adventure rather
                  than a chore.
                </p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardContent}>
                <div className={styles.featureCardHeader}>
                  <div className={styles.featureIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3370ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <h2 className={styles.featureTitle}>Accessibility</h2>
                </div>
                <p className={styles.featureDescription}>
                  ImmersifyVR addresses these health challenges by turning
                  exercise into an enjoyable and immersive experience for older
                  adults. We offer a virtual reality exercise simulator with many
                  immersive experiences that range in intensity.
                </p>
              </div>
            </div>
          </SideBySide>
          <SideBySide>
            <div className={styles.featureCard}>
              <div className={styles.featureCardContent}>
                <div className={styles.featureCardHeader}>
                  <div className={styles.featureIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3370ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M3 21v-5h5"></path>
                    </svg>
                  </div>
                  <h2 className={styles.featureTitle}>Smooth Process</h2>
                </div>
                <p className={styles.featureDescription}>
                  ImmersifyVR addresses these health challenges by turning
                  exercise into an enjoyable and immersive experience for older
                  adults. We offer a virtual reality exercise simulator with many
                  immersive experiences that range in intensity.
                </p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardContent}>
                <div className={styles.featureCardHeader}>
                  <div className={styles.featureIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3370ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h2 className={styles.featureTitle}>Affordable Price</h2>
                </div>
                <p className={styles.featureDescription}>
                  ImmersifyVR addresses these health challenges by turning
                  exercise into an enjoyable and immersive experience for older
                  adults. We offer a virtual reality exercise simulator with many
                  immersive experiences that range in intensity.
                </p>
              </div>
            </div>
          </SideBySide>
        </ContentBlock>
        <ContentBlock titleText="Testimonials">
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialColumn}>
              <h3 className={styles.testimonialName}>Ms. Gloria</h3>
              <div className={styles.testimonialImage}>
                <Image
                  src="/img/gloria.avif"
                  alt="Virtual reality experience"
                  width={200}
                  height={200}
                />
              </div>
              <p className={styles.testimonialText}>
                &ldquo;[It] would help us to go see things that are not possible
                anymore since we can&apos;t travel, we are limited in mobility …
                We wanna go see, and we can actually use these and actually
                place yourself there, and be on the boat. And see things that
                you wouldn&apos;t otherwise.&rdquo;
              </p>
            </div>

            <div className={styles.columnDivider}></div>

            <div className={styles.testimonialColumn}>
              <h3 className={styles.testimonialName}>Mr. Ed</h3>
              <div className={styles.testimonialImage}>
                <Image
                  src="/img/chateau-3.avif"
                  alt="Virtual reality experience"
                  width={200}
                  height={200}
                />
              </div>
              <p className={styles.testimonialText}>
                &ldquo;You got something [older adults] really want…
                Conceptually, it&apos;s a great idea. And in terms of people
                liking to use it? Off the charts.&rdquo;
              </p>
            </div>

            <div className={styles.columnDivider}></div>

            <div className={styles.testimonialColumn}>
              <h3 className={styles.testimonialName}>Eleanor Davis</h3>
              <div className={styles.testimonialImage}>
                <Image
                  src="/img/chateau-4.avif"
                  alt="Virtual reality experience"
                  width={200}
                  height={200}
                />
              </div>
              <p className={styles.testimonialText}>
                &ldquo;In the afternoon I get really lonely and bored, because
                just the tablet is not enough. I think this virtual reality
                thing would make it more fun.&rdquo; (paraphrased)
              </p>
            </div>
          </div>
        </ContentBlock>
      </SquishToMiddle>

      <Footer />
    </div>
  );
}
