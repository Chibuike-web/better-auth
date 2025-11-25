export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background">
			<div className="px-4 py-8 md:px-8 md:py-12">
				<div className="max-w-6xl mx-auto">
					{/* Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
						{/* Brand */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
									<span className="text-primary-foreground font-bold text-sm">S</span>
								</div>
								<span className="font-bold">SaaS</span>
							</div>
							<p className="text-sm text-foreground/60">
								Build and deploy amazing web applications.
							</p>
						</div>

						{/* Product */}
						<div>
							<h3 className="font-semibold text-sm mb-4">Product</h3>
							<ul className="space-y-2">
								{["Features", "Pricing", "Security", "Enterprise"].map((item) => (
									<li key={item}>
										<a
											href="#"
											className="text-sm text-foreground/60 hover:text-foreground transition-colors"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Resources */}
						<div>
							<h3 className="font-semibold text-sm mb-4">Resources</h3>
							<ul className="space-y-2">
								{["Documentation", "Blog", "Community", "Support"].map((item) => (
									<li key={item}>
										<a
											href="#"
											className="text-sm text-foreground/60 hover:text-foreground transition-colors"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Legal */}
						<div>
							<h3 className="font-semibold text-sm mb-4">Legal</h3>
							<ul className="space-y-2">
								{["Privacy", "Terms", "Cookies", "License"].map((item) => (
									<li key={item}>
										<a
											href="#"
											className="text-sm text-foreground/60 hover:text-foreground transition-colors"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Bottom */}
					<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-sm text-foreground/50">
							© {currentYear} SaaS Inc. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							{["Twitter", "GitHub", "LinkedIn"].map((social) => (
								<a
									key={social}
									href="#"
									className="text-sm text-foreground/50 hover:text-foreground transition-colors"
								>
									{social}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
