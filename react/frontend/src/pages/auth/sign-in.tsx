import { useState, useTransition, type FormEvent } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import Label from "../../components/label";
import { Link, useNavigate } from "react-router";
import { authSchema } from "../../schema/auth-schema";
import z from "zod";
import { Eye, EyeOff, X } from "lucide-react";
import { authClient } from "../../lib/auth-client";
import GoogleIcon from "../../icons/google-icon";
import GithubIcon from "../../icons/github-icon";
import useIsPasswordVisible from "../../hooks/useIsPasswordVisible";

export default function SignIn() {
	const [errors, setErrors] = useState<Record<string, string>>({
		email: "",
		password: "",
	});
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [signInError, setSignInError] = useState("");
	const [isLoading, startTransition] = useTransition();
	const { isPasswordVisible, setIsPasswordVisible } = useIsPasswordVisible();
	const navigate = useNavigate();

	const handleChange = (id: string, value: string) => {
		if (errors[id] !== "") {
			setErrors((prev) => ({ ...prev, [id]: "" }));
		}
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setSignInError("");

		const data = {
			email: formData.email,
			password: formData.password,
		};

		const result = authSchema.safeParse(data);

		let formErrors: Record<string, string> = {};

		if (!result.success) {
			const { fieldErrors } = z.flattenError(result.error);

			const structured = Object.entries(fieldErrors).map(([key, value]) => ({
				field: key,
				message: value[0],
			}));

			formErrors = structured.reduce((acc, { field, message }) => {
				acc[field] = message;
				return acc;
			}, {} as Record<string, string>);
		}

		setErrors(formErrors);

		if (Object.values(formErrors).some((value) => value !== "")) {
			return;
		}

		startTransition(async () => {
			try {
				await authClient.signIn.email(
					{
						email: formData.email,
						password: formData.password,
						callbackURL: "/",
					},
					{
						onError: (ctx) => {
							setSignInError(ctx.error.message);
						},
						onSuccess: () => {
							navigate("/");
						},
					}
				);
			} catch (err) {
				setSignInError("Unable to reach server. Try again later.");
				console.error("Network error:", err);
			}
		});
	};

	return (
		<main className="grid place-items-center min-h-screen px-6 xl:px-0 bg-white">
			<div className="shadow-xl ring ring-gray-100 bg-gray-100 rounded-2xl overflow-hidden my-20">
				<div className="w-full max-w-[450px] p-6 md:p-10 bg-white rounded-xl ring ring-gray-100">
					<span className="text-[20px] font-bold text-center block">BetterAuth</span>
					<p className="text-[18px] font-semibold text-foreground mt-4 text-center">
						Sign in to your account
					</p>
					<p className="text-foreground/50 font-medium text-center mt-2 mb-6">
						Welcome back! Please enter your credentials to continue
					</p>
					<div className="flex flex-col w-full gap-4 sm:flex-row">
						<Button
							variant="outline"
							className="flex-1 font-medium flex gap-2 items-center"
							onClick={() =>
								authClient.signIn.social({
									provider: "google",
									callbackURL: "http://localhost:5173",
								})
							}
						>
							<span>
								<GoogleIcon />
							</span>
							<span className="leading-0">Google</span>
						</Button>
						<Button variant="outline" className="flex-1 font-medium">
							<span>
								<GithubIcon />
							</span>
							<span className="leading-0">Github</span>
						</Button>
					</div>
					<div className="flex gap-4 items-center my-6">
						<span className="inline-block h-px w-full bg-foreground/10" />
						<span>or</span>
						<span className="inline-block h-px w-full bg-foreground/10" />
					</div>

					{signInError && (
						<div className="flex justify-between items-center gap-2 px-3 py-2 my-4 bg-red-100 text-red-700 text-sm font-medium rounded-md border border-red-200 shadow-sm">
							{signInError}
							<button type="button" onClick={() => setSignInError("")} className="text-red-700">
								<X size={20} />
							</button>
						</div>
					)}

					<form className="mt-8" onSubmit={handleSubmit}>
						<div className="mb-6">
							<Label htmlFor="email" className="flex text-[16px] items-end justify-between mb-2">
								Email
							</Label>
							<Input
								type="email"
								placeholder="Enter your email address"
								id="email"
								name="email"
								value={formData.email}
								onChange={(e) => handleChange(e.target.id, e.target.value)}
								aria-invalid={!!errors.email}
								aria-describedby={errors.email ? "email-error" : undefined}
							/>
							{errors.email && (
								<p id="email-error" className="text-red-500 text-[14px] font-medium mt-1">
									{errors.email}
								</p>
							)}
						</div>
						<div className="mb-10 ">
							<Label htmlFor="password" className="flex text-[16px] items-end justify-between mb-2">
								Password
							</Label>
							<div className="relative">
								<Input
									type={isPasswordVisible ? "text" : "password"}
									placeholder="Enter your password"
									id="password"
									name="password"
									value={formData.password}
									onChange={(e) => handleChange(e.target.id, e.target.value)}
									aria-invalid={!!errors.password}
									aria-describedby={errors.password ? "password-error" : undefined}
								/>
								<button
									type="button"
									aria-label={isPasswordVisible ? "Hide password" : "Show password"}
									className="absolute right-4 top-1/2 -translate-y-1/2"
									onClick={() => setIsPasswordVisible(!isPasswordVisible)}
								>
									{isPasswordVisible ? (
										<EyeOff className="size-[20px] text-gray-600" />
									) : (
										<Eye className="size-[20px] text-gray-600" />
									)}
								</button>
							</div>
							{errors.password && (
								<p id="password-error" className="text-red-500 text-[14px] font-medium mt-1">
									{errors.password}
								</p>
							)}
						</div>
						<Button className="w-full ring-1 ring-foreground bg-foreground/80" disabled={isLoading}>
							{isLoading ? (
								<span className="flex items-center gap-2">
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
									Signing up...
								</span>
							) : (
								"Continue"
							)}
						</Button>{" "}
					</form>
				</div>
				<div className="py-6 flex gap-2 items-center justify-center">
					<span className="text-foreground/50">Don’t have an account?</span>
					<Link to="/sign-up" className="font-medium">
						Sign up
					</Link>
				</div>
			</div>
		</main>
	);
}

<div className="mb-4">
	<Label htmlFor="confirmNewPassword" className="block mb-2">
		Confirm New Password
	</Label>
	<div className="relative">
		<Input id="confirmNewPassword" placeholder="Confirm New password" className="h-11" />
	</div>
</div>;
