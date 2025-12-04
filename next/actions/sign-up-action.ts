"use server";

import { user } from "@/db/schema";
import { auth, db } from "@/lib/auth";
import { authSchema } from "@/lib/schemas/auth-schema";
import { APIError } from "better-auth";
import { eq } from "drizzle-orm";
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
		const existing = await db.select().from(user).where(eq(user.email, parsed.data.email)).limit(1);

		if (existing.length > 0) {
			redirect("/");
		}
		return {
			...prevState,
			error: error instanceof APIError ? error.message : "Something went wrong",
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
		};
	}

	try {
		await auth.api.sendVerificationEmail({
			body: {
				email: parsed.data.email,
				callbackURL: `${process.env.NEXT_PUBLIC_URL}/email-verified?email=${encodeURIComponent(
					parsed.data.email
				)}`,
			},
		});
	} catch (error) {
		return {
			...prevState,
			error: error instanceof APIError ? error.message : "Something went wrong",
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
		};
	}

	console.log("Sign up successfull");
	redirect("/verify-email");
}
