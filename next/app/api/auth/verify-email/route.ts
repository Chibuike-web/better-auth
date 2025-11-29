import { auth } from "@/lib/auth";
import { APIError } from "better-auth";
import { NextResponse } from "next/server";

const base = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const token = searchParams.get("token");
	const callbackURL = searchParams.get("callbackURL");
	if (!callbackURL) return NextResponse.redirect(`${base}/sign-up`);
	const email = new URL(callbackURL).searchParams.get("email");

	console.log(email);

	if (!token) {
		return NextResponse.redirect(
			`${base}/email-verified?error=invalid_token&email=${encodeURIComponent(email ?? "")}`
		);
	}
	console.log("run");
	try {
		await auth.api.verifyEmail({ query: { token } });
		return NextResponse.redirect(`${base}/email-verified`);
	} catch (error) {
		if (error instanceof APIError) {
			console.log("verification failed:", error.statusCode, error.status);

			const errorType =
				error.status === "UNAUTHORIZED" || error.statusCode === 401
					? "expired_token"
					: "invalid_token";

			return NextResponse.redirect(
				`${base}/email-verified?error=${errorType}&email=${encodeURIComponent(email ?? "")}`
			);
		} else {
			console.error(error);
		}
	}
}
