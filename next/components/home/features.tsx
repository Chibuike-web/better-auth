import { Brain, Lock, Share2, Database, ScanLine, Code2 } from "lucide-react";

const features = [
	{
		icon: ScanLine,
		title: "Smart Digitization",
		description:
			"Upload PDFs, images, or scans. Our OCR + NLP engine extracts clinical data with 99.8% accuracy.",
	},
	{
		icon: Brain,
		title: "Contextual Understanding",
		description:
			"MediBridge doesn't just read text; it understands medical context, linking symptoms to diagnoses.",
	},
	{
		icon: Database,
		title: "Structured FHIR Data",
		description:
			"Automatically convert unstructured notes into standard FHIR resources ready for any EHR system.",
	},
	{
		icon: Lock,
		title: "Enterprise Security",
		description:
			"HIPAA-compliant infrastructure with end-to-end encryption and granular access controls.",
	},
	{
		icon: Code2,
		title: "Developer First",
		description:
			"Robust SDKs and APIs allow you to integrate health data processing into your app in minutes.",
	},
	{
		icon: Share2,
		title: "Seamless Interoperability",
		description: "Connect with Epic, Cerner, and other major EHR platforms out of the box.",
	},
];

export function Features() {
	return (
		<section id="features" className="py-24 bg-secondary/30">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Everything you need to modernize health records
					</h2>
					<p className="text-lg text-muted-foreground">
						From solo clinics to large hospital networks, MediBridge provides the infrastructure to
						make patient data accessible and actionable.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group relative p-8 bg-background rounded-2xl border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
						>
							<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
								<feature.icon className="h-6 w-6" />
							</div>
							<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
							<p className="text-muted-foreground leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
