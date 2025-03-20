import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/venue-approval")({
    component: RouteComponent,
});

function RouteComponent() {
    return <Outlet />;
}
