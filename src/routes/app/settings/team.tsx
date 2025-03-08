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
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Check,
    ChevronsUpDown,
    MoreHorizontalIcon,
    PlusIcon,
    Search,
    UserPlus,
} from "lucide-react";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/app/settings/team")({
    component: TeamSettings,
});

// Sample team members data
const teamMembers = [
    {
        id: 1,
        name: "Jane Doe",
        email: "jane@example.com",
        role: "Admin",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "active",
    },
    {
        id: 2,
        name: "Alex Johnson",
        email: "alex@example.com",
        role: "Admin",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "active",
    },
    {
        id: 3,
        name: "Maria Garcia",
        email: "maria@example.com",
        role: "Member",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "active",
    },
    {
        id: 4,
        name: "Sam Lee",
        email: "sam@example.com",
        role: "Member",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "active",
    },
    {
        id: 5,
        name: "Taylor Swift",
        email: "taylor@example.com",
        role: "Member",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "invited",
    },
];

// Sample roles
const roles = [
    { value: "owner", label: "Owner" },
    { value: "admin", label: "Admin" },
    { value: "member", label: "Member" },
    { value: "guest", label: "Guest" },
];

export function TeamSettings() {
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");

    const filteredMembers = teamMembers.filter(
        (member) =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    Team Settings
                </h2>
                <p className="text-sm text-muted-foreground">
                    Manage your team members and their permissions.
                </p>
            </div>

            <Tabs defaultValue="members">
                <TabsList>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="invitations">Invitations</TabsTrigger>
                    <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
                </TabsList>

                <TabsContent value="members" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Team Members</CardTitle>
                                <CardDescription>
                                    Manage your team members and their roles.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search members..."
                                        className="w-64 pl-8"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                    />
                                </div>
                                <Button className="gap-1">
                                    <UserPlus className="h-4 w-4" />
                                    Invite
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                                    <div className="col-span-5">Name</div>
                                    <div className="col-span-4">Email</div>
                                    <div className="col-span-2">Role</div>
                                    <div className="col-span-1"></div>
                                </div>
                                <div className="divide-y">
                                    {filteredMembers.map((member) => (
                                        <div
                                            key={member.id}
                                            className="grid grid-cols-12 p-4 items-center"
                                        >
                                            <div className="col-span-5 flex items-center gap-3">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage
                                                        src={member.avatar}
                                                    />
                                                    <AvatarFallback>
                                                        {member.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {member.name}
                                                    </p>
                                                    {member.status ===
                                                        "invited" && (
                                                        <span className="text-xs text-muted-foreground">
                                                            Invited
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-span-4 text-sm">
                                                {member.email}
                                            </div>
                                            <div className="col-span-2">
                                                <Popover
                                                    open={open === member.id}
                                                    onOpenChange={() =>
                                                        setOpen(member.id)
                                                    }
                                                >
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className="w-full justify-between"
                                                            size="sm"
                                                        >
                                                            {member.role}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Search role..." />
                                                            <CommandList>
                                                                <CommandEmpty>
                                                                    No role
                                                                    found.
                                                                </CommandEmpty>
                                                                <CommandGroup>
                                                                    {roles.map(
                                                                        (
                                                                            role,
                                                                        ) => (
                                                                            <CommandItem
                                                                                key={
                                                                                    role.value
                                                                                }
                                                                                value={
                                                                                    role.value
                                                                                }
                                                                                onSelect={() => {
                                                                                    setSelectedRole(
                                                                                        role.value ===
                                                                                            selectedRole
                                                                                            ? ""
                                                                                            : role.value,
                                                                                    );
                                                                                    setOpen(
                                                                                        false,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <Check
                                                                                    className={`mr-2 h-4 w-4 ${
                                                                                        selectedRole ===
                                                                                        role.value
                                                                                            ? "opacity-100"
                                                                                            : "opacity-0"
                                                                                    }`}
                                                                                />
                                                                                {
                                                                                    role.label
                                                                                }
                                                                            </CommandItem>
                                                                        ),
                                                                    )}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="col-span-1 text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                        >
                                                            <MoreHorizontalIcon className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>
                                                            View Profile
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            Resend Invitation
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="text-destructive">
                                                            Remove
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="invitations" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Invitations</CardTitle>
                            <CardDescription>
                                Manage invitations that have been sent but not
                                yet accepted.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                                    <div className="col-span-5">Email</div>
                                    <div className="col-span-3">Role</div>
                                    <div className="col-span-3">Sent</div>
                                    <div className="col-span-1"></div>
                                </div>
                                <div className="divide-y">
                                    <div className="grid grid-cols-12 p-4 items-center">
                                        <div className="col-span-5 text-sm">
                                            taylor@example.com
                                        </div>
                                        <div className="col-span-3 text-sm">
                                            Member
                                        </div>
                                        <div className="col-span-3 text-sm text-muted-foreground">
                                            2 days ago
                                        </div>
                                        <div className="col-span-1 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <MoreHorizontalIcon className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>
                                                        Resend
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-destructive">
                                                        Cancel Invitation
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 p-4 items-center">
                                        <div className="col-span-5 text-sm">
                                            john@example.com
                                        </div>
                                        <div className="col-span-3 text-sm">
                                            Admin
                                        </div>
                                        <div className="col-span-3 text-sm text-muted-foreground">
                                            5 days ago
                                        </div>
                                        <div className="col-span-1 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <MoreHorizontalIcon className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>
                                                        Resend
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-destructive">
                                                        Cancel Invitation
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-1">
                                <PlusIcon className="h-4 w-4" />
                                New Invitation
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="roles" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Roles & Permissions</CardTitle>
                            <CardDescription>
                                Configure roles and their associated
                                permissions.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="rounded-md border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-base font-medium">
                                            Owner
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Full access to all settings and
                                            administrative functions.
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-base font-medium">
                                            Admin
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Can manage team members, events, and
                                            most settings.
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-base font-medium">
                                            Member
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Can create and manage events, but
                                            cannot modify team settings.
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-base font-medium">
                                            Guest
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Can view events they are invited to,
                                            but cannot create or modify events.
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-1">
                                <PlusIcon className="h-4 w-4" />
                                Create New Role
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
