import { Star } from "lucide-react";

export default function Testimonials() {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "CEO at TechCorp",
			content:
				"This platform has transformed how we deploy applications. We've cut our deployment time by 80%.",
			rating: 5,
		},
		{
			name: "Michael Chen",
			role: "Lead Developer at StartupXYZ",
			content:
				"The developer experience is exceptional. The documentation is clear and the support team is incredibly responsive.",
			rating: 5,
		},
		{
			name: "Emily Rodriguez",
			role: "CTO at InnovateLabs",
			content:
				"Scaling our infrastructure used to be a nightmare. Now it's seamless. Best investment we made.",
			rating: 5,
		},
	];

	return (
		<section className="w-full px-4 py-20 md:py-32">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
						Loved by developers worldwide
					</h2>
					<p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
						See what our customers have to say about their experience.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-background rounded-lg p-8 border border-border">
							{/* Rating */}
							<div className="flex gap-1 mb-4">
								{Array.from({ length: testimonial.rating }).map((_, i) => (
									<Star key={i} className="w-4 h-4 fill-primary text-primary" />
								))}
							</div>

							{/* Testimonial */}
							<p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

							{/* Author */}
							<div>
								<p className="font-semibold text-foreground">{testimonial.name}</p>
								<p className="text-sm text-foreground/60">{testimonial.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
