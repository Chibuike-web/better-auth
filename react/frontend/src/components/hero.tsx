import { ArrowRight } from "lucide-react";
import Button from "./button";

export default function Hero() {
	return (
		<section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
			<div className="w-full max-w-3xl text-center">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-foreground/70 mb-6">
					<span className="w-2 h-2 bg-primary rounded-full"></span>
					Now available for everyone
				</div>

				{/* Headline */}
				<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
					Build faster, ship smarter
				</h1>

				{/* Subheading */}
				<p className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto text-balance">
					The complete platform to build, deploy, and scale your web applications with confidence.
					Focus on your product, not infrastructure.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button size="lg" className="w-full sm:w-auto">
						Get Started
						<ArrowRight className="w-4 h-4 ml-2" />
					</Button>
					<Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
						View Documentation
					</Button>
				</div>

				{/* Social Proof */}
				<div className="mt-16 pt-12 border-t border-border">
					<p className="text-sm text-foreground/50 mb-6">Trusted by leading companies</p>
					<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
						{["Acme", "Nexus", "Quantum", "Zenith"].map((company) => (
							<div key={company} className="text-foreground/40 font-semibold text-sm">
								{company}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
