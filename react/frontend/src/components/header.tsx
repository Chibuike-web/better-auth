import { useState, useTransition } from "react";
import { Menu, X } from "lucide-react";
import Button from "./button";
import { Link } from "react-router";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";
import { authClient } from "../lib/auth-client";

interface NavLink {
	label: string;
	href: string;
}

const navLinks: NavLink[] = [
	{ label: "Features", href: "#features" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Docs", href: "#docs" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [pending, startTransition] = useTransition();

	const { data } = authClient.useSession();

	const user = data?.user;
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4 md:px-8">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
						<span className="text-primary-foreground font-bold text-lg">S</span>
					</div>
					<span className="font-bold text-lg hidden sm:inline">SaaS</span>
				</div>

				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-sm text-foreground/70 hover:text-foreground transition-colors"
						>
							{link.label}
						</a>
					))}
				</div>

				{user ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white font-semibold overflow-hidden">
								{user.image ? (
									<img src={user.image} referrerPolicy="no-referrer" />
								) : (
									user.name
										.split(" ")
										.map((w) => w[0])
										.join("")
										.toUpperCase()
								)}
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="rounded-[12px] ">
							<DropdownMenuItem className="flex flex-col items-start gap-1">
								<p className="text-sm font-medium">{user?.name}</p>
								<p className="text-xs text-muted-foreground">{user?.email}</p>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="flex flex-col items-start">
								View Profile
							</DropdownMenuItem>
							<DropdownMenuItem className="flex flex-col items-start">Settings</DropdownMenuItem>
							<DropdownMenuItem
								disabled={pending}
								className="flex flex-col items-start"
								onClick={() => {
									startTransition(async () => {
										try {
											await authClient.signOut();
										} catch (error) {
											console.log(error);
										}
									});
								}}
							>
								{pending ? "Logging out..." : "Log Out"}
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<div className="hidden md:flex items-center gap-3">
						<Button variant="ghost" size="sm">
							<Link to="sign-in"> Sign In</Link>
						</Button>
						<Button size="sm">
							<Link to="sign-up"> Sign Up</Link>
						</Button>
					</div>
				)}

				<div className="md:hidden flex items-center gap-2">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className=" p-2 hover:bg-secondary rounded-lg transition-colors"
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
					{user && (
						<button className=" h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-white font-semibold overflow-hidden">
							{user.image ? (
								<img src={user.image} />
							) : (
								user.name
									.split(" ")
									.map((w) => w[0])
									.join("")
									.toUpperCase()
							)}
						</button>
					)}
				</div>
			</nav>

			{isOpen && (
				<div className="md:hidden border-t border-border bg-background">
					<div className="flex flex-col gap-4 px-4 py-4">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm text-foreground/70 hover:text-foreground transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						))}
						<div className="flex flex-col gap-2 pt-2 border-t border-border">
							<Button variant="ghost" size="sm" className="w-full justify-start">
								<Link to="/sign-in"> Sign In</Link>
							</Button>
							<Button size="sm" className="w-full">
								Sign Up
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
