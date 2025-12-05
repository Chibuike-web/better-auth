const URL = "https://mail.google.com/mail/u/0/#inbox";

export default function EmailVerify() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6">
			<div className="w-full max-w-md text-center">
				<h1 className="text-2xl font-semibold text-foreground">You have successfully signed up</h1>

				<p className="text-foreground/70 mt-3">
					We sent a verification link to your email. Open your inbox and verify your account to
					continue.
				</p>

				<div className="mt-8">
					<a
						href={URL}
						className="inline-block w-full py-3 rounded-md bg-foreground text-white font-medium"
					>
						Open email app
					</a>
				</div>

				<p className="text-sm text-foreground/40 mt-4">
					Didn’t get it? Check spam or try again later.
				</p>
			</div>
		</main>
	);
}
