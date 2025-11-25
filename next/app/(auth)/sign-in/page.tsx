import Link from "next/link";
import SignInClient from "./sign-in-client";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/icons/google-icon";
import GithubIcon from "@/icons/github-icon";

export default function SignIn() {
	return (
		<main className="grid place-items-center min-h-screen px-6 xl:px-0 bg-white">
			<div className="shadow-xl ring ring-gray-100 bg-gray-100 rounded-2xl overflow-hidden my-20">
				<div className="w-full max-w-[450px] p-6 md:p-10 bg-white rounded-xl ring ring-gray-100">
					<span className="text-[20px] font-bold text-center block">BetterAuth</span>
					<p className="text-[18px] font-semibold text-foreground mt-4 text-center">
						Sign in to your account
					</p>
					<p className="text-foreground/50 font-medium text-center mt-1 mb-6">
						Welcome back! Please enter your credentials to continue
					</p>
					<div className="flex flex-col w-full gap-4 sm:flex-row">
						<Button variant="outline" className="flex-1 font-medium flex gap-2 items-center">
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
					<SignInClient />
				</div>
				<div className="py-6 flex gap-2 items-center justify-center">
					<span className="text-foreground/50">Don’t have an account?</span>
					<Link href="/sign-up" className="font-medium">
						Sign up
					</Link>
				</div>
			</div>
		</main>
	);
}
