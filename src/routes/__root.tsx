import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";
export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
            <Toaster />
        </>
    ),
});
