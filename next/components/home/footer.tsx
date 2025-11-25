import Link from "next/link";
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-muted/30 border-t pt-16 pb-8">
			<div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
					<div className="col-span-2 lg:col-span-2">
						<Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
								<Activity className="h-5 w-5" />
							</div>
							<span>MediBridge</span>
						</Link>
						<p className="text-muted-foreground max-w-xs mb-6">
							The AI-powered infrastructure for modern healthcare data. Secure, compliant, and
							developer-friendly.
						</p>
						<div className="flex gap-4">
							<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Product</h3>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Features
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									API
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Integrations
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Pricing
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Changelog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Resources</h3>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Documentation
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									API Reference
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Community
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Status
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Legal
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Privacy
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-foreground transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
					<p>© 2025 MediBridge Inc. All rights reserved.</p>
					<div className="flex gap-8">
						<Link href="#" className="hover:text-foreground transition-colors">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:text-foreground transition-colors">
							Terms of Service
						</Link>
						<Link href="#" className="hover:text-foreground transition-colors">
							Cookie Settings
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
