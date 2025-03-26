import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { DeleteConfirmDialog } from "@/components/user-management/deleteConfirmDialog";
import { UserFormDialog } from "@/components/user-management/userFormDialog";
import { createFileRoute } from "@tanstack/react-router";
import type { ColumnDef } from "@tanstack/react-table";
import {
    Download,
    MoreHorizontal,
    Trash2,
    UserCog,
    UserPlus,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/user-management")({
    component: UserManagement,
});
// Sample user data
const initialUsers = [
    {
        id: 1,
        name: "John Doe",
        idNumber: "EMP-1001",
        email: "john.doe@example.com",
        role: "Administrator",
        department: "IT Department",
        status: "active",
        lastActive: "2024-05-01T10:30:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 2,
        name: "Jane Smith",
        idNumber: "EMP-1002",
        email: "jane.smith@example.com",
        role: "Manager",
        department: "Human Resources",
        status: "active",
        lastActive: "2024-05-02T14:45:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 3,
        name: "Robert Johnson",
        idNumber: "EMP-1003",
        email: "robert.johnson@example.com",
        role: "User",
        department: "Marketing",
        status: "inactive",
        lastActive: "2024-04-15T09:20:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 4,
        name: "Emily Davis",
        idNumber: "EMP-1004",
        email: "emily.davis@example.com",
        role: "User",
        department: "Finance",
        status: "active",
        lastActive: "2024-05-03T11:10:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 5,
        name: "Michael Wilson",
        idNumber: "EMP-1005",
        email: "michael.wilson@example.com",
        role: "Manager",
        department: "Operations",
        status: "active",
        lastActive: "2024-05-01T16:30:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
    },
];

// Available roles
const roles = ["Admin", "Event Manager", "User"];

// Available departments
const departments = ["IT", "Marketing", "Operations", "Sales", "Finance", "HR"];

export function UserManagement() {
    const [users, setUsers] = useState(initialUsers);
    const [roleFilter, setRoleFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>(null);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<any>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);

    // Filter users based on filters
    const filteredUsers = users.filter((user) => {
        const matchesRole = roleFilter ? user.role === roleFilter : true;
        const matchesStatus = statusFilter
            ? user.status === statusFilter
            : true;
        return matchesRole && matchesStatus;
    });

    // Handle user operations
    const handleAddUser = (userData: any) => {
        const newUser = {
            id: users.length + 1,
            ...userData,
            status: "active",
            lastActive: "Just now",
            avatar: "/placeholder.svg?height=40&width=40",
        };
        setUsers([...users, newUser]);
        setIsAddUserOpen(false);
    };

    const handleEditUser = (userData: any) => {
        setUsers(
            users.map((user) =>
                user.id === userData.id ? { ...user, ...userData } : user,
            ),
        );
        setEditingUser(null);
    };

    const handleDeleteUser = (userId: number) => {
        setUsers(users.filter((user) => user.id !== userId));
        setUserToDelete(null);
        setIsDeleteDialogOpen(false);
    };

    const handleBulkDelete = () => {
        setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
        setSelectedUsers([]);
    };

    // Status badge styling
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Active
                    </Badge>
                );
            case "inactive":
                return (
                    <Badge className="bg-gray-500/10 text-gray-500 hover:bg-gray-500/20">
                        Inactive
                    </Badge>
                );
            case "pending":
                return (
                    <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                    </Badge>
                );
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Define columns for DataTable
    const columns: ColumnDef<(typeof users)[0]>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: "User",
            cell: ({ row }) => {
                const user = row.original;
                return (
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>
                                {user.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">
                                {user.email}
                            </div>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: "idNumber",
            header: "ID Number",
        },
        {
            accessorKey: "role",
            header: "Role",
        },
        {
            accessorKey: "department",
            header: "Department",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => getStatusBadge(row.original.status),
        },
        {
            accessorKey: "lastActive",
            header: "Last Active",
            cell: ({ row }) => formatDate(row.original.lastActive),
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original;
                return (
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
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => setEditingUser(user)}
                            >
                                <UserCog className="mr-2 h-4 w-4" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => {
                                    setUserToDelete(user.id);
                                    setIsDeleteDialogOpen(true);
                                }}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 h-16 py-3.5">
                    <h1 className="text-xl font-semibold">User Management</h1>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => setIsAddUserOpen(true)}
                            size="sm"
                            className="gap-1"
                        >
                            <UserPlus className="h-4 w-4" />
                            Add User
                        </Button>
                    </div>
                </header>

                <div className="flex items-center justify-between border-b px-6 py-2">
                    <div className="flex items-center gap-2">
                        {selectedUsers.length > 0 ? (
                            <>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="gap-1 text-destructive"
                                    onClick={() => setIsDeleteDialogOpen(true)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Delete Selected
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                    {selectedUsers.length} user
                                    {selectedUsers.length > 1 ? "s" : ""}{" "}
                                    selected
                                </span>
                            </>
                        ) : (
                            <span className="text-sm text-muted-foreground">
                                {filteredUsers.length} user
                                {filteredUsers.length !== 1 ? "s" : ""}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <Select
                            value={roleFilter || ""}
                            onValueChange={(value) =>
                                setRoleFilter(value || null)
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Roles</SelectItem>
                                {roles.map((role) => (
                                    <SelectItem key={role} value={role}>
                                        {role}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={statusFilter || ""}
                            onValueChange={(value) =>
                                setStatusFilter(value || null)
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Statuses
                                </SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">
                                    Inactive
                                </SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>

                <div className="flex-1 overflow-auto p-6">
                    <DataTable
                        columns={columns}
                        data={filteredUsers}
                        searchColumn="name"
                        searchPlaceholder="Search users..."
                    />
                </div>
            </div>

            {/* Add/Edit User Dialog */}
            <UserFormDialog
                isOpen={isAddUserOpen || !!editingUser}
                onClose={() => {
                    setIsAddUserOpen(false);
                    setEditingUser(null);
                }}
                onSubmit={editingUser ? handleEditUser : handleAddUser}
                user={editingUser}
                roles={roles}
                departments={departments}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => {
                    setIsDeleteDialogOpen(false);
                    setUserToDelete(null);
                }}
                onConfirm={() => {
                    if (userToDelete) {
                        handleDeleteUser(userToDelete);
                    } else if (selectedUsers.length > 0) {
                        handleBulkDelete();
                    }
                }}
                title={userToDelete ? "Delete User" : "Delete Selected Users"}
                description={
                    userToDelete
                        ? "Are you sure you want to delete this user? This action cannot be undone."
                        : `Are you sure you want to delete ${selectedUsers.length} selected users? This action cannot be undone.`
                }
            />
        </div>
    );
}
