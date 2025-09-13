import style from "./page.module.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import ContentBlock from "@/components/contentBlock";
import SideBySide from "@/components/sideBySide";
import SquishToMiddle from "@/components/squishToMiddle";
import ImageGallery from "@/components/imageGallery";

export default function Product() {
  return (
    <div>
      <Navbar />
      <ImageHeader title="Product" backgroundImage="/img/beach-view.avif" />
      <SquishToMiddle>
        <ContentBlock titleText="What We Offer">
          <div className={style.whatWeOfferContainer}>
            <div className={style.offerRow}>
              <div className={style.offerImage}>
                <img src="/img/chateau-3.avif" alt="Engaging Motivation" />
              </div>
              <div className={style.offerText}>
                <h2>Engaging Motivation</h2>
                <p>
                  Our application also provides motivation to exercise through
                  entertaining VR activities like swimming to catch fish. Instead
                  of providing generalized and basic exercise, our application
                  combines physical activity into an engaging environment.
                </p>
              </div>
            </div>
            <div className={style.offerRow}>
              <div className={style.offerImage}>
                <img src="/img/chateau-4.avif" alt="Safe Exercise" />
              </div>
              <div className={style.offerText}>
                <h2>Safe Exercise</h2>
                <p>
                  Our innovation utilizes virtual reality to provide a stress and
                  danger-free environment for the elderly and disabled to overcome
                  daily limitations. Especially for seniors, going out to
                  exercise, for example, going to a swimming pool, can put them at
                  extreme risk of harm. However, virtual reality allows anyone to
                  immerse themselves in a realistic experience in any safe space
                  they choose.
                </p>
              </div>
            </div>
            <div className={style.offerRow}>
              <div className={style.offerImage}>
                <img src="/img/chateau-5.avif" alt="Immersive Technology" />
              </div>
              <div className={style.offerText}>
                <h2>Immersive Technology</h2>
                <p>
                  By utilizing Unity&apos;s XR Interaction Toolkit, we were able
                  to develop an experience with visually pleasing aesthetics and
                  intuitive controls, helping us reach our goal of making our
                  experience feel as simple and effective as possible. We are
                  constantly developing new engaging storylines and activities to
                  provide unique options of exercise for all.
                </p>
              </div>
            </div>
          </div>
        </ContentBlock>
        <ContentBlock titleText="Example Experiences">
          <SideBySide>
            <div>
              <ImageGallery 
                images={[
                  "/img/beach-view.avif",
                  "/img/chateau-3.avif",
                  "/img/chateau-4.avif"
                ]} 
                altText="Virtual Swimming Experience" 
              />
              <h2>Virtual Swimming</h2>
              <p>
                Swim around in a virtual ocean environment and catch as many
                fish as you can! Users can expect a low-moderate intensity upper
                body workout.
              </p>
            </div>
            <div>
              <ImageGallery 
                images={[
                  "/img/chateau-1.avif",
                  "/img/chateau-5.avif",
                  "/img/chateau-6.avif"
                ]} 
                altText="Spaceball Experience" 
              />
              <h2>Spaceball</h2>
              <p>TBD</p>
            </div>
            <div>
              <ImageGallery 
                images={[
                  "/img/chateau-2.avif",
                  "/img/chateau-7.avif",
                  "/img/presentation.avif"
                ]} 
                altText="Future Experience" 
              />
              <h2>TBD</h2>
              <p>TBD</p>
            </div>
          </SideBySide>
        </ContentBlock>
        <ContentBlock titleText="Video Demo">
          <iframe
            className={style.videoDemo}
            src="https://www.youtube.com/embed/2TfVHTgI-lI?si=KEjEDv7ccGpYr-Zx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </ContentBlock>
      </SquishToMiddle>
      <Footer />
    </div>
  );
}
