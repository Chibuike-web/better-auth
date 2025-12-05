"use client";

import { useState, useTransition, type FormEvent } from "react";
import { authClient } from "../../lib/auth-client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPasswordClient() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [sent, setSent] = useState("");
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setSent("");

		if (!email.trim()) {
			setError("Email is required");
			return;
		}

		startTransition(async () => {
			try {
				const res = await authClient.requestPasswordReset({
					email,
					redirectTo: `${process.env.NEXT_PUBLIC_URL}/reset-password`,
				});

				setSent(res.data?.message ?? "");
			} catch (err) {
				setError("Unable to send reset link");
			}
		});
	};

	return (
		<main className="grid place-items-center min-h-screen px-6 xl:px-0 bg-white">
			<div className="shadow-xl ring w-full max-w-[450px] ring-gray-100 bg-gray-100 rounded-2xl overflow-hidden my-20">
				<div className="p-6 md:p-10 bg-white rounded-xl ring ring-gray-100">
					<span className="text-[20px] font-bold text-center block">BetterAuth</span>
					<p className="text-[18px] font-semibold text-foreground mt-4 text-center">
						Reset your password
					</p>
					<p className="text-foreground/50 font-medium text-center mt-2 mb-6">
						Enter your email to receive a reset link
					</p>
					{error && (
						<div className="flex justify-between items-center gap-2 px-3 py-2 my-4 bg-red-100 text-red-700 text-sm font-medium rounded-md border border-red-200 shadow-sm">
							{error}
							<button type="button" onClick={() => setError("")} className="text-red-700">
								<X size={20} />
							</button>
						</div>
					)}

					{sent && (
						<div className="px-3 py-2 my-4 bg-green-100 text-green-700 text-sm font-medium rounded-md border border-green-200 shadow-sm">
							{sent}
						</div>
					)}
					<form className="mt-6" onSubmit={handleSubmit}>
						<div className="mb-8">
							<Label htmlFor="email" className="flex text-[16px] items-end justify-between mb-2">
								Email
							</Label>
							<Input
								type="email"
								id="email"
								placeholder="Enter your email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<Button className="w-full" disabled={isPending}>
							{isPending ? (
								<span className="flex items-center gap-2">
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
									Sending...
								</span>
							) : (
								"Send reset link"
							)}
						</Button>
					</form>
				</div>

				<div className="py-6 flex gap-2 items-center justify-center">
					<Link href="/sign-in" className="font-medium">
						Back to sign in
					</Link>
				</div>
			</div>
		</main>
	);
}
