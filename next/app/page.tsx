import { Cta } from "@/components/cta";
import { DeveloperSection } from "@/components/developer-section";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import RootLayout from "@/lib/root-layout";

export default async function Home() {
	return (
		<RootLayout>
			<div className="flex flex-col">
				<Navbar />
				<main className="flex-1">
					<Hero />
					<Features />
					<HowItWorks />
					<DeveloperSection />
					<Testimonials />
					<Cta />
				</main>
				<Footer />
			</div>
		</RootLayout>
	);
}
