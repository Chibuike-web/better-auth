import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function DeveloperSection() {
	return (
		<section id="developers" className="py-24 bg-slate-950 text-white overflow-hidden">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					<div className="lg:w-1/2 order-2 lg:order-1">
						<div className="rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
							<div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900">
								<div className="flex gap-1.5">
									<div className="h-3 w-3 rounded-full bg-slate-700" />
									<div className="h-3 w-3 rounded-full bg-slate-700" />
									<div className="h-3 w-3 rounded-full bg-slate-700" />
								</div>
								<div className="ml-4 text-xs text-slate-500 font-mono">process-record.ts</div>
							</div>
							<div className="p-6 overflow-x-auto">
								<pre className="font-mono text-sm leading-relaxed">
									<code className="language-typescript">
										<span className="text-purple-400">import</span>{" "}
										<span className="text-blue-400">{`{ MediBridge }`}</span>{" "}
										<span className="text-purple-400">from</span>{" "}
										<span className="text-green-400">'@medibridge/sdk'</span>;{"\n\n"}
										<span className="text-slate-500">// Initialize client</span>
										{"\n"}
										<span className="text-purple-400">const</span> client ={" "}
										<span className="text-purple-400">new</span>{" "}
										<span className="text-yellow-400">MediBridge</span>(process.env.API_KEY);
										{"\n\n"}
										<span className="text-slate-500">// Upload and process a file</span>
										{"\n"}
										<span className="text-purple-400">const</span> record ={" "}
										<span className="text-purple-400">await</span> client.records.
										<span className="text-blue-400">create</span>({`{`}
										{"\n"} file: <span className="text-green-400">"./patient_scan.pdf"</span>,{"\n"}{" "}
										type: <span className="text-green-400">"clinical_note"</span>
										{"\n"}
										{`}`});
										{"\n\n"}
										<span className="text-slate-500">// Get structured FHIR data</span>
										{"\n"}
										<span className="text-purple-400">const</span> fhirBundle ={" "}
										<span className="text-purple-400">await</span> record.
										<span className="text-blue-400">toFHIR</span>();
										{"\n"}
										<span className="text-blue-400">console</span>.
										<span className="text-blue-400">log</span>(fhirBundle.entry[0].resource);
									</code>
								</pre>
							</div>
						</div>
					</div>

					<div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
						<div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm font-medium text-slate-300">
							<span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
							Developer Preview
						</div>
						<h2 className="text-3xl md:text-4xl font-bold">Built for developers, by developers</h2>
						<p className="text-lg text-slate-400">
							Integrate powerful health data processing into your applications with just a few lines
							of code. Fully typed SDKs for Node, Python, and Go.
						</p>

						<ul className="space-y-4">
							{[
								"Type-safe SDKs for major languages",
								"Comprehensive API documentation",
								"Sandbox environment for testing",
								"Webhooks for async processing",
							].map((item, i) => (
								<li key={i} className="flex items-center gap-3">
									<div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
										<Check className="h-3.5 w-3.5" />
									</div>
									<span className="text-slate-300">{item}</span>
								</li>
							))}
						</ul>

						<div className="pt-4">
							<Button className="bg-white text-slate-950 hover:bg-slate-200 rounded-full px-8 h-12">
								Read the Docs
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
