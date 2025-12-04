import ClientOnly from "@/components/client-only";
import { Cta } from "@/components/home/cta";
import { DeveloperSection } from "@/components/home/developer-section";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Navbar } from "@/components/home/navbar";
import { Testimonials } from "@/components/home/testimonials";
import VerifiedBanner from "@/components/home/verified-banner";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<main className="flex-1">
				<Suspense>
					<VerifiedBanner />
				</Suspense>
				<Hero />
				<Features />
				<HowItWorks />
				<DeveloperSection />
				<Testimonials />
				<Cta />
			</main>
			<Footer />
		</div>
	);
}
