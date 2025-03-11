import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

export interface Notification {
    id: number;
    title: string;
    description: string;
    timestamp: Date;
    read: boolean;
    type: "default" | "success" | "error" | "warning";
}

type NotificationContextType = {
    notifications: Notification[];
    addNotification: (
        notification: Omit<Notification, "id" | "timestamp" | "read">,
    ) => void;
    markAsRead: (id: number) => void;
    clearNotifications: () => void;
    unreadCount: number;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
    undefined,
);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error(
            "useNotification must be used within a NotificationProvider",
        );
    }
    return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        setUnreadCount(notifications.filter((n) => !n.read).length);
    }, [notifications]);

    const addNotification = (
        notification: Omit<Notification, "id" | "timestamp" | "read">,
    ) => {
        const newNotification: Notification = {
            ...notification,
            id: Date.now(),
            timestamp: new Date(),
            read: false,
        };
        setNotifications((prev) => [newNotification, ...prev]);
    };

    const markAsRead = (id: number) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
        );
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                addNotification,
                markAsRead,
                clearNotifications,
                unreadCount,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export function NotificationCenter() {
    const { notifications, markAsRead, clearNotifications, unreadCount } =
        useNotification();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 px-1 min-w-[1.25rem] h-5"
                        >
                            {unreadCount}
                        </Badge>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Notifications
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            You have {unreadCount} unread messages
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length === 0 ? (
                    <DropdownMenuItem>No notifications</DropdownMenuItem>
                ) : (
                    notifications.slice(0, 5).map((notification) => (
                        <DropdownMenuItem
                            key={notification.id}
                            onSelect={() => markAsRead(notification.id)}
                        >
                            <div
                                className={`flex flex-col space-y-1 ${notification.read ? "opacity-50" : ""}`}
                            >
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {notification.description}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(
                                        notification.timestamp,
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </DropdownMenuItem>
                    ))
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link to="/app/notifications">View all notifications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={clearNotifications}>
                    Clear all notifications
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
