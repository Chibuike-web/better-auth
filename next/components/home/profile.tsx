import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ClientProfile from "./client-profile";

export default async function Profile() {
	const data = await auth.api.getSession({ headers: await headers() });

	return (
		<>
			{data?.user ? (
				<ClientProfile data={data} />
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

export type SessionData = {
	session: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		expiresAt: Date;
		token: string;
		ipAddress?: string | null;
		userAgent?: string | null;
	};
	user: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		email: string;
		emailVerified: boolean;
		name: string;
		image?: string | null;
	};
} | null;
