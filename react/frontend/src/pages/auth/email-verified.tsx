import { useState, useTransition } from "react";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
import { authClient } from "../../lib/auth-client";

const URL = import.meta.env.VITE_API_FRONTEND_URL;

export default function EmailVerified() {
	const [searchParams] = useSearchParams();
	const error = searchParams.get("error");
	console.log(error);
	return (
		<>
			{error === "token_expired" || error === "invalid_token" ? <InvalidToken /> : <ValidToken />}
		</>
	);
}

const InvalidToken = () => {
	const [isPending, startTransition] = useTransition();
	const [link, setLink] = useState(false);
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email");
	if (!email) return;
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6">
			<div className="w-full max-w-md text-center">
				<h1 className="text-2xl font-semibold text-red-600">Invalid or expired link</h1>

				<p className="text-foreground/70 mt-3">
					The verification link is no longer valid. Request a fresh verification email to continue.
				</p>

				<div className="mt-8">
					<button
						disabled={isPending || link}
						className="inline-block w-full py-3 rounded-md bg-foreground text-white font-medium disabled:opacity-50"
						onClick={() => {
							if (link) return;
							startTransition(async () => {
								await authClient.sendVerificationEmail(
									{
										email,
										callbackURL: `${URL}/email-verified?email=${encodeURIComponent(email)}`,
									},
									{
										onSuccess: (ctx) => {
											console.log("Verification sent", ctx);
											setLink(true);
										},
										onError: (ctx) => {
											console.log("Error sending", ctx.error.message);
										},
									}
								);
							});
						}}
					>
						{link ? "Link sent" : isPending ? "Sending..." : "Resend verification email"}
					</button>
				</div>

				<p className="text-sm text-foreground/40 mt-4">If the issue continues, contact support.</p>
			</div>
		</main>
	);
};

const ValidToken = () => {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6">
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-foreground">Email verified</h1>
				<p className="text-foreground/70 mt-3">Your account is now active.</p>
				<Link
					to="/"
					className="inline-block mt-6 py-3 px-6 rounded-md bg-foreground text-white font-medium"
				>
					Continue
				</Link>
			</div>
		</main>
	);
};
