import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

export function HowItWorks() {
	return (
		<section id="how-it-works" className="py-24 overflow-hidden">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					<div className="lg:w-1/2 space-y-8">
						<h2 className="text-3xl md:text-4xl font-bold">
							From paper to patient profile in seconds
						</h2>
						<p className="text-lg text-muted-foreground">
							Stop manual data entry. Our pipeline handles the heavy lifting of digitizing legacy
							records.
						</p>

						<div className="space-y-8">
							<div className="flex gap-4">
								<div className="flex-none flex flex-col items-center">
									<div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
										1
									</div>
									<div className="w-px h-full bg-border my-2"></div>
								</div>
								<div className="pb-8">
									<h3 className="text-xl font-semibold mb-2">Upload Records</h3>
									<p className="text-muted-foreground">
										Securely upload scanned documents, faxes, or images via API or dashboard.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-none flex flex-col items-center">
									<div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
										2
									</div>
									<div className="w-px h-full bg-border my-2"></div>
								</div>
								<div className="pb-8">
									<h3 className="text-xl font-semibold mb-2">AI Extraction & Analysis</h3>
									<p className="text-muted-foreground">
										Our medical LLMs identify patient info, medications, history, and vitals.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-none flex flex-col items-center">
									<div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
										3
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Structured Output</h3>
									<p className="text-muted-foreground">
										Receive clean JSON/FHIR data ready to be pushed to your EHR or application.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:w-1/2 w-full">
						<div className="relative rounded-2xl border bg-muted/30 p-2 md:p-8">
							{/* Mock Interface */}
							<div className="rounded-xl border bg-background shadow-xl overflow-hidden">
								<div className="border-b bg-muted/30 px-4 py-3 flex items-center gap-2">
									<div className="flex gap-1.5">
										<div className="h-3 w-3 rounded-full bg-red-400/80" />
										<div className="h-3 w-3 rounded-full bg-yellow-400/80" />
										<div className="h-3 w-3 rounded-full bg-green-400/80" />
									</div>
									<div className="ml-4 text-xs text-muted-foreground font-mono">
										dashboard.medibridge.com/patients/upload
									</div>
								</div>
								<div className="p-6 grid gap-6">
									<div className="flex items-center justify-between border-b pb-4">
										<div>
											<div className="font-semibold">Processing Queue</div>
											<div className="text-sm text-muted-foreground">3 documents pending</div>
										</div>
										<div className="h-2 w-24 bg-primary/20 rounded-full overflow-hidden">
											<div className="h-full w-2/3 bg-primary animate-pulse" />
										</div>
									</div>

									<div className="space-y-3">
										<div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-transparent hover:border-primary/20 transition-colors">
											<div className="h-10 w-10 rounded bg-white border flex items-center justify-center">
												<FileText className="h-5 w-5 text-muted-foreground" />
											</div>
											<div className="flex-1 min-w-0">
												<div className="font-medium truncate">Patient_Record_A102.pdf</div>
												<div className="text-xs text-muted-foreground">
													2.4 MB • Uploaded 2m ago
												</div>
											</div>
											<div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
												Processing
											</div>
										</div>

										<div className="flex items-center gap-4 p-3 rounded-lg bg-background border">
											<div className="h-10 w-10 rounded bg-white border flex items-center justify-center">
												<FileText className="h-5 w-5 text-muted-foreground" />
											</div>
											<div className="flex-1 min-w-0">
												<div className="font-medium truncate">Lab_Results_Smith.jpg</div>
												<div className="text-xs text-muted-foreground">
													1.1 MB • Uploaded 5m ago
												</div>
											</div>
											<div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
												Complete
											</div>
										</div>
									</div>

									<div className="rounded-lg bg-muted/30 p-4 mt-2">
										<div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
											Extracted Data Preview
										</div>
										<div className="space-y-2 font-mono text-xs">
											<div className="flex gap-2">
												<span className="text-purple-600">"patient_id"</span>:{" "}
												<span className="text-blue-600">"P-99281"</span>,
											</div>
											<div className="flex gap-2">
												<span className="text-purple-600">"diagnosis"</span>:{" "}
												<span className="text-green-600">["Hypertension", "Type 2 Diabetes"]</span>,
											</div>
											<div className="flex gap-2">
												<span className="text-purple-600">"medications"</span>:{" "}
												<span className="text-green-600">
													["Lisinopril 10mg", "Metformin 500mg"]
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
