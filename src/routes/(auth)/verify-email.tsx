import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useParams } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
import { InputOTPForm } from "@/components/otp-form";
export const Route = createFileRoute("/(auth)/verify-email")({
	component: VerifyEmailPage,
});

function VerifyEmailPage() {
	const [isVerifying, setIsVerifying] = useState(true);
	const [isVerified, setIsVerified] = useState(false);
	//const searchParams = useParams();
	//const token = searchParams.get("token");

	return (
		<div className="grid min-h-svh">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<a href="#" className="flex items-center gap-2 font-medium">
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						Acme Inc.
					</a>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs text-center">
						<InputOTPForm />
					</div>
				</div>
			</div>
		</div>
	);
}
