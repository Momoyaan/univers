import ForgotPasswordForm from "@/components/auth/forgotPassword";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password")({
    component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
    return (
        <div className="w-full max-w-md space-y-6">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Forgot Password
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your ID number and we'll send you a password reset
                    link
                </p>
            </div>
            <ForgotPasswordForm />
        </div>
    );
}
