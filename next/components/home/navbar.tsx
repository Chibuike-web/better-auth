import Link from "next/link";
import { Activity } from "lucide-react";
import ProfileWrapper from "./profile";

export async function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center mx-auto max-w-screen-xl justify-between px-4 md:px-8">
				<div className="flex items-center gap-2">
					<Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<Activity className="h-5 w-5" />
						</div>
						<span>MediBridge</span>
					</Link>
				</div>

				<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
					<Link href="#features" className="hover:text-foreground transition-colors">
						Features
					</Link>
					<Link href="#how-it-works" className="hover:text-foreground transition-colors">
						How it Works
					</Link>
					<Link href="#developers" className="hover:text-foreground transition-colors">
						Developers
					</Link>
					<Link href="#pricing" className="hover:text-foreground transition-colors">
						Pricing
					</Link>
				</nav>

				<ProfileWrapper />
			</div>
		</header>
	);
}
