import express from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "../auth";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

const URL = process.env.BETTER_AUTH_URL;
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server running at ${URL}`);
});
