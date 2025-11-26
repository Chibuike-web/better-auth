import { Link } from "react-router";

export default function EmailVerified() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6">
			<div className="text-center">
				<h1 className="text-2xl font-semibold text-foreground">Email verified</h1>
				<p className="text-foreground/70 mt-3">Your account is now active.</p>
				<Link
					to="/sign-in"
					className="inline-block mt-6 py-3 px-6 rounded-md bg-foreground text-white font-medium"
				>
					Continue
				</Link>
			</div>
		</main>
	);
}
