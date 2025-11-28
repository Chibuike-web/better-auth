"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function VerifiedBanner() {
	const { data } = authClient.useSession();

	return (
		<>
			{data && !data?.user.emailVerified && (
				<div className="bg-yellow-100 text-yellow-800 text-center py-3 font-medium">
					Your account is not verified.
					<Link href="/verify-email" className="underline ml-1">
						Verify now
					</Link>
				</div>
			)}
		</>
	);
}
