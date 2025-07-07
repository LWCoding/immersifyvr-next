import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageHeader from "@/components/imageHeader";
import SquishToMiddle from "@/components/squishToMiddle";
import Spacer from "@/components/spacer";
import QuoteForm from "@/components/quoteForm";

export default function Quote() {
	return (
		<div>
			<Navbar />
			<ImageHeader
				title="Get a Quote"
				backgroundImage="/img/beach-view.avif"
			/>
			<SquishToMiddle>
				<Spacer size="medium" />
				<Spacer size="large" />
				<QuoteForm />
				<Spacer size="large" />
			</SquishToMiddle>
			<Footer />
		</div>
	);
}
