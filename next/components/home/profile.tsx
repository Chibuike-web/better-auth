"use client";

import { useTransition } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProfileWrapper() {
	const { data, isPending } = authClient.useSession();

	if (isPending)
		return (
			<span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white font-semibold overflow-hidden" />
		);
	return (
		<>
			{data?.user ? (
				<Profile />
			) : (
				<div className="flex items-center gap-4">
					<Link
						href="/sign-in"
						className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block"
					>
						Sign In
					</Link>

					<Button asChild size="sm" className="rounded-full px-6">
						<Link href="/sign-up">Sign Up</Link>
					</Button>
				</div>
			)}
		</>
	);
}

function Profile() {
	const { data } = authClient.useSession();

	const user = data?.user;
	const [pending, startTransition] = useTransition();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white font-semibold overflow-hidden">
					{user && user.image ? (
						<img src={user.image} referrerPolicy="no-referrer" />
					) : (
						user?.name
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
				<DropdownMenuItem className="flex flex-col items-start">View Profile</DropdownMenuItem>
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
	);
}
