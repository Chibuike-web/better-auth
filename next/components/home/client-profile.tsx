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
import { SessionData } from "./profile";
import { useRouter } from "next/navigation";

export default function ClientProfile({ data }: { data: SessionData }) {
	const user = data?.user;
	const [pending, startTransition] = useTransition();
	const router = useRouter();

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
								router.refresh();
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
