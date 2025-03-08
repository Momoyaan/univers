import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/app/settings/notifications")({
    component: NotificationSettings,
});
export function NotificationSettings() {
    const [notifications, setNotifications] = useState({
        eventReminders: true,
        eventUpdates: true,
        teamMessages: true,
        taskAssignments: true,
        taskUpdates: true,
        weeklyDigest: false,
        marketingEmails: false,
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    Notification Settings
                </h2>
                <p className="text-sm text-muted-foreground">
                    Manage how and when you receive notifications.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Event Notifications</CardTitle>
                    <CardDescription>
                        Control notifications related to events you're involved
                        with.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="event-reminders">
                                Event reminders
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications before events start.
                            </p>
                        </div>
                        <Switch
                            id="event-reminders"
                            checked={notifications.eventReminders}
                            onCheckedChange={() =>
                                handleToggle("eventReminders")
                            }
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="event-updates">Event updates</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications when events are updated.
                            </p>
                        </div>
                        <Switch
                            id="event-updates"
                            checked={notifications.eventUpdates}
                            onCheckedChange={() => handleToggle("eventUpdates")}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Team Notifications</CardTitle>
                    <CardDescription>
                        Control notifications related to your team.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="team-messages">Team messages</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications for new team messages.
                            </p>
                        </div>
                        <Switch
                            id="team-messages"
                            checked={notifications.teamMessages}
                            onCheckedChange={() => handleToggle("teamMessages")}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="task-assignments">
                                Task assignments
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications when you're assigned a
                                task.
                            </p>
                        </div>
                        <Switch
                            id="task-assignments"
                            checked={notifications.taskAssignments}
                            onCheckedChange={() =>
                                handleToggle("taskAssignments")
                            }
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="task-updates">Task updates</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications when tasks are updated.
                            </p>
                        </div>
                        <Switch
                            id="task-updates"
                            checked={notifications.taskUpdates}
                            onCheckedChange={() => handleToggle("taskUpdates")}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Email Preferences</CardTitle>
                    <CardDescription>
                        Control what types of emails you receive.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="weekly-digest">Weekly digest</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive a weekly summary of your events and
                                tasks.
                            </p>
                        </div>
                        <Switch
                            id="weekly-digest"
                            checked={notifications.weeklyDigest}
                            onCheckedChange={() => handleToggle("weeklyDigest")}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="marketing-emails">
                                Marketing emails
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive emails about new features and
                                promotions.
                            </p>
                        </div>
                        <Switch
                            id="marketing-emails"
                            checked={notifications.marketingEmails}
                            onCheckedChange={() =>
                                handleToggle("marketingEmails")
                            }
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button>Save Preferences</Button>
            </div>
        </div>
    );
}
