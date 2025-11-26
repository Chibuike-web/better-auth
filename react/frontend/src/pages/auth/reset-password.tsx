import { useState, useTransition, type FormEvent } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { authClient } from "../../lib/auth-client";
import Button from "../../components/button";
import Input from "../../components/input";
import Label from "../../components/label";
import { X, Eye, EyeOff } from "lucide-react";

export default function ResetPassword() {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const token = params.get("token");

	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const [isPending, startTransition] = useTransition();

	const [visible, setVisible] = useState(false);
	const [visibleConfirm, setVisibleConfirm] = useState(false);

	if (!token) {
		return (
			<main className="grid place-items-center min-h-screen bg-white px-6">
				<p className="text-center text-red-600 font-medium">Invalid or missing token</p>
			</main>
		);
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError("");
		setSuccess(false);

		if (!password.trim() || !confirm.trim()) {
			setError("All fields are required");
			return;
		}

		if (password !== confirm) {
			setError("Passwords do not match");
			return;
		}

		startTransition(async () => {
			try {
				await authClient.resetPassword({ newPassword: password, token });

				setSuccess(true);

				setTimeout(() => {
					navigate("/sign-in");
				}, 1200);
			} catch (error) {
				setError(error instanceof Error ? error.message : "Unable to reset password");
			}
		});
	};

	return (
		<main className="grid place-items-center min-h-screen px-6 xl:px-0 bg-white">
			<div className="shadow-xl w-full max-w-[450px] ring ring-gray-100 bg-gray-100 rounded-2xl overflow-hidden my-20">
				<div className=" p-6 md:p-10 bg-white rounded-xl ring ring-gray-100">
					<span className="text-[20px] font-bold text-center block">BetterAuth</span>
					<p className="text-[18px] font-semibold text-foreground mt-4 text-center">
						Reset your password
					</p>
					<p className="text-foreground/50 font-medium text-center mt-2 mb-6">
						Enter a new password to continue
					</p>

					{error && (
						<div className="flex justify-between items-center gap-2 px-3 py-2 my-4 bg-red-100 text-red-700 text-sm font-medium rounded-md border border-red-200 shadow-sm">
							{error}
							<button type="button" onClick={() => setError("")} className="text-red-700">
								<X size={20} />
							</button>
						</div>
					)}

					{success && (
						<div className="px-3 py-2 my-4 bg-green-100 text-green-700 text-sm font-medium rounded-md border border-green-200 shadow-sm">
							Password updated successfully
						</div>
					)}

					<form className="mt-6" onSubmit={handleSubmit}>
						<div className="mb-6">
							<Label htmlFor="password" className="flex text-[16px] mb-2">
								New password
							</Label>

							<div className="relative">
								<Input
									type={visible ? "text" : "password"}
									id="password"
									placeholder="Enter new password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>

								<button
									type="button"
									className="absolute right-4 top-1/2 -translate-y-1/2"
									onClick={() => setVisible(!visible)}
								>
									{visible ? (
										<EyeOff className="size-[20px] text-gray-600" />
									) : (
										<Eye className="size-[20px] text-gray-600" />
									)}
								</button>
							</div>
						</div>

						<div className="mb-8">
							<Label htmlFor="confirm" className="flex text-[16px] mb-2">
								Confirm password
							</Label>

							<div className="relative">
								<Input
									type={visibleConfirm ? "text" : "password"}
									id="confirm"
									placeholder="Re-enter password"
									value={confirm}
									onChange={(e) => setConfirm(e.target.value)}
								/>

								<button
									type="button"
									className="absolute right-4 top-1/2 -translate-y-1/2"
									onClick={() => setVisibleConfirm(!visibleConfirm)}
								>
									{visibleConfirm ? (
										<EyeOff className="size-[20px] text-gray-600" />
									) : (
										<Eye className="size-[20px] text-gray-600" />
									)}
								</button>
							</div>
						</div>

						<Button className="w-full ring-1 ring-foreground bg-foreground/80" disabled={isPending}>
							{isPending ? (
								<span className="flex items-center gap-2">
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
									Resetting...
								</span>
							) : (
								"Reset password"
							)}
						</Button>
					</form>
				</div>

				<div className="py-6 flex gap-2 items-center justify-center">
					<span className="text-foreground/50">Remembered it?</span>
					<a href="/sign-in" className="font-medium">
						Sign in
					</a>
				</div>
			</div>
		</main>
	);
}
