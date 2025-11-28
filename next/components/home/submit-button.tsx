"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { ReactNode } from "react";

export default function SubmitButton({
	children,
	onClick,
	loadingText = "Loading...",
}: {
	children: ReactNode;
	onClick: () => void;
	loadingText: string;
}) {
	const { pending } = useFormStatus();
	return (
		<Button className="w-full" disabled={pending} onClick={onClick}>
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
