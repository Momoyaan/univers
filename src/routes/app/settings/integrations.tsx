import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ExternalLink, Plus } from "lucide-react";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/app/settings/integrations")({
    component: IntegrationSettings,
});
// Sample integrations data
const integrations = [
    {
        id: "google-calendar",
        name: "Google Calendar",
        description: "Sync events with Google Calendar",
        icon: "/placeholder.svg?height=40&width=40",
        connected: true,
    },
    {
        id: "slack",
        name: "Slack",
        description: "Send notifications to Slack channels",
        icon: "/placeholder.svg?height=40&width=40",
        connected: true,
    },
    {
        id: "zoom",
        name: "Zoom",
        description: "Create and manage Zoom meetings for events",
        icon: "/placeholder.svg?height=40&width=40",
        connected: false,
    },
    {
        id: "mailchimp",
        name: "Mailchimp",
        description: "Sync attendees with Mailchimp lists",
        icon: "/placeholder.svg?height=40&width=40",
        connected: false,
    },
];

// Sample available integrations
const availableIntegrations = [
    {
        id: "microsoft-teams",
        name: "Microsoft Teams",
        description: "Create Teams meetings and channels for events",
        icon: "/placeholder.svg?height=40&width=40",
    },
    {
        id: "hubspot",
        name: "HubSpot",
        description: "Sync contacts and events with HubSpot",
        icon: "/placeholder.svg?height=40&width=40",
    },
    {
        id: "stripe",
        name: "Stripe",
        description: "Process payments for paid events",
        icon: "/placeholder.svg?height=40&width=40",
    },
];

export function IntegrationSettings() {
    const [connectedIntegrations, setConnectedIntegrations] = useState(
        integrations.map((integration) => ({
            ...integration,
            enabled: integration.connected,
        })),
    );

    const toggleIntegration = (id: string) => {
        setConnectedIntegrations(
            connectedIntegrations.map((integration) =>
                integration.id === id
                    ? { ...integration, enabled: !integration.enabled }
                    : integration,
            ),
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    Integration Settings
                </h2>
                <p className="text-sm text-muted-foreground">
                    Connect and manage third-party services with your account.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Connected Integrations</CardTitle>
                    <CardDescription>
                        Manage your connected integrations and their settings.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {connectedIntegrations.map((integration) => (
                        <div
                            key={integration.id}
                            className="flex items-center justify-between p-4 rounded-md border"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                                    <img
                                        src={
                                            integration.icon ||
                                            "/placeholder.svg"
                                        }
                                        alt={integration.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium">
                                        {integration.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {integration.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {integration.connected ? (
                                    <div className="flex items-center gap-2">
                                        <Switch
                                            checked={integration.enabled}
                                            onCheckedChange={() =>
                                                toggleIntegration(
                                                    integration.id,
                                                )
                                            }
                                        />
                                        <span className="text-sm">
                                            {integration.enabled
                                                ? "Enabled"
                                                : "Disabled"}
                                        </span>
                                    </div>
                                ) : (
                                    <Button variant="outline" size="sm">
                                        Connect
                                    </Button>
                                )}
                                <Button variant="ghost" size="sm">
                                    Configure
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Available Integrations</CardTitle>
                    <CardDescription>
                        Discover and connect new integrations to enhance your
                        workflow.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {availableIntegrations.map((integration) => (
                        <div
                            key={integration.id}
                            className="flex items-center justify-between p-4 rounded-md border"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                                    <img
                                        src={
                                            integration.icon ||
                                            "/placeholder.svg"
                                        }
                                        alt={integration.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium">
                                        {integration.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {integration.description}
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                            >
                                <Plus className="h-4 w-4" />
                                Connect
                            </Button>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="flex justify-center border-t p-4">
                    <Button variant="outline" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Browse Integration Marketplace
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>API Access</CardTitle>
                    <CardDescription>
                        Manage API keys and access for custom integrations.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-medium">
                                    API Keys
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Create and manage API keys for accessing the
                                    EventFlow API.
                                </p>
                            </div>
                            <Button size="sm">Generate New Key</Button>
                        </div>
                        <div className="rounded-md bg-muted p-4">
                            <p className="text-sm font-medium">
                                No API keys found
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                You haven't created any API keys yet. Generate a
                                key to get started.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-medium">
                                    Webhooks
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Configure webhooks to receive real-time
                                    updates.
                                </p>
                            </div>
                            <Button size="sm">Add Webhook</Button>
                        </div>
                        <div className="rounded-md bg-muted p-4">
                            <p className="text-sm font-medium">
                                No webhooks configured
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                You haven't configured any webhooks yet. Add a
                                webhook to receive event notifications.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
