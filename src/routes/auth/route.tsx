import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";

export const Route = createFileRoute("/auth")({
    component: AuthRoute,
});

function AuthRoute() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <Outlet />
        </div>
    );
}
