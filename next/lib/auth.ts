import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/db/schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema,
	}),
	emailAndPassword: { enabled: true },
	emailVerification: {
		sendVerificationEmail: async ({ user, url, token }) => {
			console.log(user);
			console.log("Verification token:", token);
			console.log("Verification URL:", url);
		},
	},
	session: { expiresIn: 60 * 60 * 24 * 7 },
	debug: true,
	trustedOrigins: ["http://localhost:3000"],

	secret: process.env.BETTER_AUTH_SECRET!,
	baseURL: "http://localhost:3000",
	plugins: [nextCookies()],
});
