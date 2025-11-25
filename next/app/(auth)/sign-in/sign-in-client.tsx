"use client";

import { signInAction } from "@/actions/sign-in-action";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

const defaultState = {
	email: "",
	password: "",
	error: "",
};

export default function SignInClient() {
	const [state, formAction] = useActionState(signInAction, defaultState);
	const [error, setError] = useState("");

	useEffect(() => {
		if (state.error) {
			setError(state.error);
		}
	}, [state.error]);

	return (
		<>
			{error && (
				<div className="flex justify-between items-center gap-2 px-3 py-2 my-4 bg-red-100 text-red-700 text-sm font-medium rounded-md border border-red-200 shadow-sm">
					{error}
					<button type="button" onClick={() => setError("")}>
						<X size={20} />
					</button>
				</div>
			)}
			<form action={formAction} className="mt-8">
				<div className="mb-6">
					<Label htmlFor="email" className="flex text-[16px] items-end justify-between mb-2">
						Email
					</Label>
					<Input
						type="email"
						placeholder="Enter your email address"
						id="email"
						name="email"
						defaultValue={state.email}
					/>
				</div>
				<div className="mb-10">
					<Label htmlFor="password" className="flex text-[16px] items-end justify-between mb-2">
						Password
					</Label>
					<Input
						type="password"
						placeholder="Enter your password"
						id="password"
						name="password"
						defaultValue={state.password}
					/>
				</div>
				<SubmitButton loadingText="Signing in...">Continue</SubmitButton>
			</form>
		</>
	);
}
