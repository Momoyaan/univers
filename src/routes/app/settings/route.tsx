import { SettingsSidebar } from "@/components/settings/settingsSidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/settings")({
    component: Settings,
});

function Settings() {
    return (
        <div className="flex h-screen overflow-y-hidden">
            <SettingsSidebar />
            <div className="flex-1 relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
                <div className="items-center justify-between px-6 py-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
