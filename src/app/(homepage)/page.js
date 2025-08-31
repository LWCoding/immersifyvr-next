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
            <div>
              <h2>Engaging Storylines</h2>
              <p>
                Our VR experiences are built around engaging narratives that
                captivate users, making exercise feel like an adventure rather
                than a chore.
              </p>
            </div>
            <div>
              <h2>Accessibility</h2>
              <p>
                ImmersifyVR addresses these health challenges by turning
                exercise into an enjoyable and immersive experience for older
                adults. We offer a virtual reality exercise simulator with many
                immersive experiences that range in intensity.
              </p>
            </div>
          </SideBySide>
          <SideBySide>
            <div>
              <h2>Smooth Process</h2>
              <p>
                ImmersifyVR addresses these health challenges by turning
                exercise into an enjoyable and immersive experience for older
                adults. We offer a virtual reality exercise simulator with many
                immersive experiences that range in intensity.
              </p>
            </div>
            <div>
              <h2>Affordable Price</h2>
              <p>
                ImmersifyVR addresses these health challenges by turning
                exercise into an enjoyable and immersive experience for older
                adults. We offer a virtual reality exercise simulator with many
                immersive experiences that range in intensity.
              </p>
            </div>
          </SideBySide>
        </ContentBlock>
        <ContentBlock titleText="Testimonials">
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialColumn}>
              <h3 className={styles.testimonialName}>Sarah Johnson</h3>
              <div className={styles.testimonialImage}>
                <Image
                  src="/img/chateau-2.avif"
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
              <h3 className={styles.testimonialName}>Michael Chen</h3>
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
