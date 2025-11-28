import ClientOnly from "@/components/client-only";
import EmailVerifiedClient from "./email-verified-client";

export default function EmailVerified() {
	return (
		<ClientOnly>
			<EmailVerifiedClient />
		</ClientOnly>
	);
}
