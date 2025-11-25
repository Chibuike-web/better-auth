import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
	return (
		<section className="py-24">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="relative rounded-3xl bg-primary px-6 py-16 md:px-16 md:py-24 overflow-hidden text-center md:text-left">
					<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
					<div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
					<div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

					<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="max-w-2xl space-y-6">
							<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
								Ready to modernize your health data infrastructure?
							</h2>
							<p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
								Join hundreds of healthcare providers and developers building the future of patient
								care with MediBridge.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 min-w-fit">
							<Button
								size="lg"
								variant="secondary"
								className="h-14 px-8 rounded-full text-base font-semibold"
							>
								Get Started Now
							</Button>
							<Button
								size="lg"
								className="h-14 px-8 rounded-full text-base font-semibold bg-primary-foreground/10 text-white hover:bg-primary-foreground/20 border-transparent"
							>
								Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
