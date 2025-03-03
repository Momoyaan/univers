import { createFileRoute, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/lib/stores";
import { Sidebar } from "@/components/sideBar";
import { Outlet } from "@tanstack/react-router";
import { SettingsProvider } from "@/contexts/settings-context";
import { useState } from "react";
export const Route = createFileRoute("/(app)/dashboard")({
  component: LayoutDashboard,
  // beforeLoad: async ({ location }) => {
  // 	if (!isAuthenticated) {
  // 		throw redirect({
  // 			to: "/login",
  // 			search: {
  // 				// Use the current location to power a redirect after login
  // 				// (Do not use `router.state.resolvedLocation` as it can
  // 				// potentially lag behind the actual current location)
  // 				redirect: location.href,
  // 			},
  // 		});
  // 	}
  // },
});

function LayoutDashboard() {
  const [view, setView] = useState<"list" | "timeline">("list");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex">
      <SettingsProvider>
        <Sidebar setView={setView} currentView={view} />
        <div className="flex-1">
          <div className="container mx-auto p-6 max-w-7xl">
            <main className="w-full">
              <Outlet />
            </main>
          </div>
        </div>
      </SettingsProvider>
    </div>
  );
}
