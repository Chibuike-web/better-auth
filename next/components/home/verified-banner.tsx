import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function VerifiedBanner() {
	const data = await auth.api.getSession({ headers: await headers() });

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
