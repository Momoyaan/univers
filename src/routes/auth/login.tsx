import LoginForm from "@/components/auth/loginForm";
import { isAuthenticated } from "@/lib/types";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
    component: LoginPage,
    beforeLoad: async () => {
        if (isAuthenticated) {
            throw redirect({
                to: "/app/dashboard",
            });
        }
    },
});

function LoginPage() {
    return (
        <div className="w-full max-w-md space-y-6">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Login to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your credentials below to access your account
                </p>
            </div>
            <LoginForm />
        </div>
    );
}
