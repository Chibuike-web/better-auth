import { Check } from "lucide-react";

export default function Features() {
	const features = [
		{
			title: "Lightning Fast",
			description: "Deploy your applications in seconds with our optimized infrastructure.",
		},
		{
			title: "Secure by Default",
			description: "Enterprise-grade security standards built into every aspect of the platform.",
		},
		{
			title: "Global Scale",
			description: "Reach users worldwide with our distributed network of servers.",
		},
		{
			title: "Developer Friendly",
			description: "Intuitive APIs and comprehensive documentation for seamless integration.",
		},
		{
			title: "24/7 Support",
			description: "Expert support team ready to help you around the clock.",
		},
		{
			title: "Real-time Analytics",
			description: "Monitor your applications with detailed insights and performance metrics.",
		},
	];

	return (
		<section className="w-full px-4 py-20 md:py-32 bg-secondary/30">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
						Powerful features for modern teams
					</h2>
					<p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
						Everything you need to build, deploy, and scale your applications with confidence.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
									<Check className="w-4 h-4 text-primary" />
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
									<p className="text-sm text-foreground/60">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
