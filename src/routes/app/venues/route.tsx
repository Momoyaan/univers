import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/venues")({
    component: RouteComponent,
});

function RouteComponent() {
    return <Outlet />;
}
