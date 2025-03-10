import { InputOTPForm } from "@/components/auth/otp-form";
import { Link, createFileRoute } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
export const Route = createFileRoute("/(auth)/verify-email")({
    component: VerifyEmailPage,
});

function VerifyEmailPage() {
    return (
        <div className="grid min-h-svh">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-medium"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Acme Inc.
                    </Link>
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
