import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="flex flex-col items-center text-center space-y-8">
					<div className="inline-flex items-center rounded-full border border-secondary bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground backdrop-blur-sm">
						<span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
						Now HIPAA Compliant & SOC 2 Certified
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
						Bridging Physical Records to <span className="text-primary">Digital Intelligence</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
						MediBridge uses advanced AI to instantly convert scanned patient records into
						structured, interoperable digital profiles. Secure, fast, and developer-friendly.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
						<Button size="lg" className="rounded-full px-8 h-12 text-base">
							Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
						</Button>
						<Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
							View Documentation
						</Button>
					</div>

					<div className="pt-12 w-full max-w-5xl mx-auto">
						<div className="relative rounded-xl border bg-card/50 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
							{/* Abstract UI representation */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 w-full h-full opacity-90">
									{/* Left: Physical Record */}
									<div className="hidden md:flex flex-col gap-4 rounded-lg border bg-background p-4 shadow-sm rotate-[-2deg] translate-y-4">
										<div className="h-4 w-1/3 bg-muted rounded" />
										<div className="space-y-2">
											<div className="h-2 w-full bg-muted/50 rounded" />
											<div className="h-2 w-full bg-muted/50 rounded" />
											<div className="h-2 w-3/4 bg-muted/50 rounded" />
										</div>
										<div className="mt-auto flex justify-center">
											<FileText className="h-12 w-12 text-muted-foreground/20" />
										</div>
									</div>

									{/* Center: Processing */}
									<div className="flex flex-col items-center justify-center z-10">
										<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse">
											<Zap className="h-8 w-8 text-primary" />
										</div>
										<div className="text-sm font-medium text-muted-foreground">AI Processing</div>
									</div>

									{/* Right: Digital Profile */}
									<div className="hidden md:flex flex-col gap-4 rounded-lg border bg-background p-4 shadow-sm rotate-[2deg] translate-y-4 border-primary/20">
										<div className="flex items-center gap-3">
											<div className="h-8 w-8 rounded-full bg-primary/20" />
											<div className="space-y-1">
												<div className="h-3 w-24 bg-primary/20 rounded" />
												<div className="h-2 w-16 bg-muted rounded" />
											</div>
										</div>
										<div className="space-y-2 mt-2">
											<div className="flex justify-between">
												<div className="h-2 w-12 bg-muted rounded" />
												<div className="h-2 w-8 bg-primary/20 rounded" />
											</div>
											<div className="flex justify-between">
												<div className="h-2 w-16 bg-muted rounded" />
												<div className="h-2 w-6 bg-primary/20 rounded" />
											</div>
										</div>
										<div className="mt-auto flex justify-center">
											<ShieldCheck className="h-12 w-12 text-primary/20" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-12 flex flex-col items-center gap-4">
						<p className="text-sm text-muted-foreground font-medium">
							TRUSTED BY INNOVATIVE HEALTHCARE TEAMS
						</p>
						<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
							{/* Placeholder logos using text for now, would be SVGs in real app */}
							<span className="text-xl font-bold flex items-center gap-2">
								<div className="h-6 w-6 bg-current rounded-full" /> HealthCore
							</span>
							<span className="text-xl font-bold flex items-center gap-2">
								<div className="h-6 w-6 bg-current rounded-md" /> MediFlow
							</span>
							<span className="text-xl font-bold flex items-center gap-2">
								<div className="h-6 w-6 bg-current rounded-tr-xl" /> CareSync
							</span>
							<span className="text-xl font-bold flex items-center gap-2">
								<div className="h-6 w-6 bg-current rounded-full" /> Vitality
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
