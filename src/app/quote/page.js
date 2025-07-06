import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";

export default function Quote() {
  return (
    <div>
      <Navbar />
      <ImageHeader title="Get a Quote" backgroundImage="/img/beach-view.avif" />
      <Footer />
    </div>
  );
}
