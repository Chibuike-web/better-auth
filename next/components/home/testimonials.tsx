import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		quote:
			"MediBridge has completely transformed how we handle legacy patient records. What used to take our staff hours now happens in seconds.",
		author: "Dr. Sarah Chen",
		role: "Chief Medical Officer, Pacific Health",
		rating: 5,
	},
	{
		quote:
			"The API is incredibly easy to work with. We integrated the OCR capabilities into our patient portal in less than a week.",
		author: "Marcus Johnson",
		role: "Lead Engineer, HealthTech Solutions",
		rating: 5,
	},
	{
		quote:
			"Accuracy is paramount in healthcare, and MediBridge delivers. The structured data output is consistently reliable.",
		author: "Elena Rodriguez",
		role: "Director of Informatics, City General",
		rating: 5,
	},
];

export function Testimonials() {
	return (
		<section className="py-24 bg-background">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by healthcare leaders</h2>
					<p className="text-lg text-muted-foreground">
						See how MediBridge is helping organizations modernize their data infrastructure.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((t, i) => (
						<Card key={i} className="border-none shadow-lg bg-secondary/20">
							<CardContent className="p-8 flex flex-col h-full">
								<div className="flex gap-1 mb-6">
									{[...Array(t.rating)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
									))}
								</div>
								<blockquote className="text-lg font-medium leading-relaxed mb-6 flex-1">
									"{t.quote}"
								</blockquote>
								<div>
									<div className="font-semibold">{t.author}</div>
									<div className="text-sm text-muted-foreground">{t.role}</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
