import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/app/settings/workspaces")({
    component: WorkspaceSettings,
});

// Sample workspace data
const workspaces = [
    {
        id: 1,
        name: "Marketing Events",
        description: "All marketing related events and campaigns",
        color: "bg-blue-500",
        members: 8,
    },
    {
        id: 2,
        name: "Product Launches",
        description: "Product launch events and related activities",
        color: "bg-green-500",
        members: 12,
    },
    {
        id: 3,
        name: "Team Building",
        description: "Internal team building events and activities",
        color: "bg-purple-500",
        members: 15,
    },
    {
        id: 4,
        name: "Conferences",
        description: "Industry conferences and speaking engagements",
        color: "bg-orange-500",
        members: 6,
    },
];

export function WorkspaceSettings() {
    const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    Workspace Settings
                </h2>
                <p className="text-sm text-muted-foreground">
                    Manage your workspaces and their settings.
                </p>
            </div>

            <Tabs defaultValue="workspaces">
                <TabsList>
                    <TabsTrigger value="workspaces">Workspaces</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="workspaces" className="mt-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        {workspaces.map((workspace) => (
                            <Card
                                key={workspace.id}
                                className="overflow-hidden"
                            >
                                <CardHeader className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`h-8 w-8 rounded-md ${workspace.color}`}
                                            />
                                            <div>
                                                <CardTitle className="text-base">
                                                    {workspace.name}
                                                </CardTitle>
                                                <CardDescription className="text-xs">
                                                    {workspace.members} members
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        setActiveWorkspace(
                                                            workspace,
                                                        )
                                                    }
                                                >
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">
                                                    <Trash className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="text-sm text-muted-foreground">
                                        {workspace.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-4 border-t bg-muted/50">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="ml-auto"
                                    >
                                        Manage
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}

                        <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                            <div className="flex flex-col items-center text-center">
                                <div className="rounded-full bg-muted p-3 mb-3">
                                    <Plus className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-medium">
                                    Create Workspace
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    Create a new workspace for your team or
                                    project.
                                </p>
                                <Button>Create Workspace</Button>
                            </div>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="settings" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Workspace Details</CardTitle>
                            <CardDescription>
                                Update the details for "{activeWorkspace.name}"
                                workspace.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="workspace-name">
                                    Workspace Name
                                </Label>
                                <Input
                                    id="workspace-name"
                                    defaultValue={activeWorkspace.name}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="workspace-description">
                                    Description
                                </Label>
                                <Input
                                    id="workspace-description"
                                    defaultValue={activeWorkspace.description}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Color</Label>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-green-500 hover:bg-green-600"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-purple-500 hover:bg-purple-600"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 rounded-full bg-pink-500 hover:bg-pink-600"
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Workspace Members</CardTitle>
                            <CardDescription>
                                Manage members in this workspace.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Jane Doe
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                jane@example.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium">
                                        Owner
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                            <AvatarFallback>AJ</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Alex Johnson
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                alex@example.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium">
                                        Admin
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                            <AvatarFallback>MG</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Maria Garcia
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                maria@example.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium">
                                        Member
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-1">
                                <Plus className="h-4 w-4" />
                                Add Member
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Danger Zone</CardTitle>
                            <CardDescription>
                                Irreversible actions for this workspace.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-destructive/50 p-4">
                                <h3 className="text-base font-medium">
                                    Delete this workspace
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    Once you delete a workspace, there is no
                                    going back. This action cannot be undone.
                                </p>
                                <Button variant="destructive">
                                    Delete Workspace
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
