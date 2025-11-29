import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./db/schema";
import { sendEmail } from "./send-email";

const sqlite = new Database("./db/sqlite.db");
const db = drizzle(sqlite, { schema });

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),

	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url, token }, request) => {
			console.log(user);
			console.log("Password token:", token);
			console.log("Password URL:", url);
			const data = await sendEmail(user.email, url);
			console.log(data);
		},
		onPasswordReset: async ({ user }, request) => {
			console.log(`Password for user ${user.email} has been reset.`);
		},
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url, token }) => {
			console.log(user);
			console.log("Verification URL:", url);
			const data = await sendEmail(user.email, url);
			console.log(data);
		},
	},
	socialProviders: {
		google: {
			prompt: "select_account",
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			scope: ["openid", "profile", "email"],
			mapProfileToUser: (profile) => ({
				email: profile.email,
				name: profile.name,
				image: profile.picture,
			}),
		},
	},

	session: { expiresIn: 60 * 60 * 24 * 7 },
	debug: true,
	trustedOrigins: [`${process.env.CLIENT_URL}`, `${process.env.BETTER_AUTH_URL}`],
	baseURL: process.env.BETTER_AUTH_URL,
	secret: process.env.BETTER_AUTH_SECRET!,
});
