"use client";

import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { signUpAction } from "@/actions/sign-up-action";
import { useActionState, useEffect, useState } from "react";

const defaultState = {
	error: "",
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

export default function SignUpClient() {
	const [state, formAction] = useActionState(signUpAction, defaultState);
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
			<form className="mt-8" action={formAction}>
				<div className="flex flex-col items-start md:flex-row md:items-center gap-6 mb-6">
					<div className="flex flex-col w-full">
						<Label htmlFor="firstName" className="flex items-end justify-between mb-2">
							<span className="text-[16px]">First name</span>
							<span className="text-foreground/50 text-[14px]">Optional</span>
						</Label>
						<Input
							type="text"
							placeholder="Enter your first name"
							id="firstName"
							name="firstName"
							defaultValue={state.firstName}
						/>
					</div>
					<div className="flex flex-col w-full">
						<Label htmlFor="lastName" className="flex items-end justify-between mb-2">
							<span className="text-[16px]">Last name</span>
							<span className="text-foreground/50 text-[14px]">Optional</span>
						</Label>
						<Input
							type="text"
							placeholder="Enter your last name"
							id="lastName"
							name="lastName"
							defaultValue={state.lastName}
						/>
					</div>
				</div>
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
				<SubmitButton loadingText="Signing up...">Continue</SubmitButton>
			</form>
		</>
	);
}
