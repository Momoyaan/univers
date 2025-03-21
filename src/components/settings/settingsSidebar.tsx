import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
    Bell,
    Building,
    Globe,
    Lock,
    LogOut,
    Settings,
    User,
    Users,
} from "lucide-react";

export function SettingsSidebar() {
    const pathname = useRouterState({ select: (s) => s.location.pathname });
    const menuItems = [
        { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
        { id: "account", label: "Account", icon: <Lock className="h-4 w-4" /> },
        {
            id: "notifications",
            label: "Notifications",
            icon: <Bell className="h-4 w-4" />,
        },
        {
            id: "integrations",
            label: "Integrations",
            icon: <Globe className="h-4 w-4" />,
        },
    ];

    return (
        <div className="w-64 border-r bg-background">
            <div className="flex items-center border-b px-6 py-4.5">
                <h1 className="text-lg font-semibold">Settings</h1>
            </div>
            <ScrollArea className="h-[calc(100vh-3.5rem)]">
                <div className="px-2 py-4">
                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const href = `/app/settings/${item.id}`;
                            return (
                                <Link
                                    key={item.id}
                                    to={href}
                                    className={cn(
                                        "inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                        pathname === href
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground hover:bg-secondary hover:text-secondary-foreground",
                                    )}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-1">
                        <Link
                            to="/app/settings/advanced"
                            className={cn(
                                "inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-destructive",
                                "btn-ghost",
                            )}
                        >
                            <Settings className="h-4 w-4" />
                            Advanced
                        </Link>
                        <Button
                            variant="ghost"
                            className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-primary hover:text-destructive"
                        >
                            <LogOut className="h-4 w-4" /> Logout
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
