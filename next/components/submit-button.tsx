"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { ReactNode } from "react";

export default function SubmitButton({
	children,
	loadingText = "Loading...",
}: {
	children: ReactNode;
	loadingText: string;
}) {
	const { pending } = useFormStatus();
	return (
		<Button className="w-full" disabled={pending}>
			{pending ? (
				<span className="flex items-center gap-2">
					<Spinner /> {loadingText}
				</span>
			) : (
				children
			)}
		</Button>
	);
}
