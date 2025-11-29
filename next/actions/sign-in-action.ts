"use server";

import { auth } from "@/lib/auth";
import { authSchema } from "@/lib/schemas/auth-schema";
import { APIError } from "better-auth";
import { redirect } from "next/navigation";

export async function signInAction(prevState: any, formData: FormData) {
	const data = Object.fromEntries(formData);
	const parsed = authSchema.safeParse(data);

	if (!parsed.success) {
		return {
			...prevState,
			error: parsed.error.issues[0].message,
			email: data.email,
			password: data.password,
		};
	}

	try {
		await auth.api.signInEmail({
			body: {
				email: parsed.data.email,
				password: parsed.data.password,
			},
		});
	} catch (error) {
		return {
			...prevState,
			error: error instanceof APIError ? error.message : "Something went wrong",
			email: data.email,
			password: data.password,
		};
	}

	console.log("Sign in successfull");
	redirect("/");
}
