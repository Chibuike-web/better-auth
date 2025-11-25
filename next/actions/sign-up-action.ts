"use server";

import { auth } from "@/lib/auth";
import { authSchema } from "@/lib/schemas/auth-schema";
import { redirect } from "next/navigation";

export async function signUpAction(prevState: any, formData: FormData) {
	const data = Object.fromEntries(formData);
	const parsed = authSchema.safeParse(data);

	if (!parsed.success) {
		return {
			...prevState,
			error: parsed.error.issues[0].message,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
		};
	}

	try {
		await auth.api.signUpEmail({
			body: {
				name: parsed.data.firstName + " " + parsed.data.lastName,
				email: parsed.data.email,
				password: parsed.data.password,
			},
		});
	} catch (error) {
		return {
			...prevState,
			error: error instanceof Error ? error.message : "Something went wrong",
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
		};
	}

	console.log("Sign up successfull");
	redirect("/");
}
