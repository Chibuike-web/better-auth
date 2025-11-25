import { Cta } from "@/components/home/cta";
import { DeveloperSection } from "@/components/home/developer-section";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Navbar } from "@/components/home/navbar";
import { Testimonials } from "@/components/home/testimonials";
import Auth from "@/components/auth/provider";

export default async function Home() {
	return (
		<Auth>
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
		</Auth>
	);
}
