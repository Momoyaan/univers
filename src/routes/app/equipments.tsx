import { EquipmentFormDialog } from "@/components/equipment-inventory/equipmentFormDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeleteConfirmDialog } from "@/components/user-management/deleteConfirmDialog";
import { createFileRoute } from "@tanstack/react-router";
import {
    Download,
    Edit,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    Wrench,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/equipments")({
    component: EquipmentInventory,
});

// Sample equipment data
const initialEquipment = [
    {
        id: 1,
        name: "Projector - Sony VPL-FHZ75",
        category: "Audio/Visual",
        location: "Main Conference Hall",
        status: "available",
        condition: "excellent",
        serialNumber: "SNY-2023-001",
        purchaseDate: "2023-01-15",
        lastMaintenance: "2023-10-20",
        nextMaintenance: "2024-04-20",
        notes: "4K resolution, 6500 lumens",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 2,
        name: "Wireless Microphone Set - Shure QLXD",
        category: "Audio/Visual",
        location: "Equipment Storage Room A",
        status: "in-use",
        condition: "good",
        serialNumber: "SHR-2022-045",
        purchaseDate: "2022-05-10",
        lastMaintenance: "2023-08-15",
        nextMaintenance: "2024-02-15",
        notes: "Set of 4 wireless mics with receiver",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 3,
        name: "Laptop - Dell XPS 15",
        category: "Computers",
        location: "IT Department",
        status: "available",
        condition: "good",
        serialNumber: "DLL-2022-102",
        purchaseDate: "2022-03-20",
        lastMaintenance: "2023-09-05",
        nextMaintenance: "2024-03-05",
        notes: "16GB RAM, 1TB SSD, Windows 11 Pro",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 4,
        name: "Speaker System - JBL EON ONE",
        category: "Audio/Visual",
        location: "Auditorium",
        status: "maintenance",
        condition: "fair",
        serialNumber: "JBL-2021-033",
        purchaseDate: "2021-07-12",
        lastMaintenance: "2023-11-10",
        nextMaintenance: "2024-05-10",
        notes: "Portable PA system, needs new cables",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 5,
        name: "Whiteboard - Mobile Magnetic",
        category: "Furniture",
        location: "Workshop Room B",
        status: "available",
        condition: "excellent",
        serialNumber: "WHB-2023-007",
        purchaseDate: "2023-02-28",
        lastMaintenance: "2023-10-15",
        nextMaintenance: "2024-04-15",
        notes: '72" x 48", double-sided, with wheels',
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 6,
        name: "Video Camera - Sony FX6",
        category: "Audio/Visual",
        location: "Equipment Storage Room B",
        status: "in-use",
        condition: "excellent",
        serialNumber: "SNY-2023-056",
        purchaseDate: "2023-03-15",
        lastMaintenance: "2023-09-30",
        nextMaintenance: "2024-03-30",
        notes: "4K cinema camera with accessories",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 7,
        name: "Podium with Microphone",
        category: "Furniture",
        location: "Main Conference Hall",
        status: "available",
        condition: "good",
        serialNumber: "PDM-2022-012",
        purchaseDate: "2022-01-10",
        lastMaintenance: "2023-07-20",
        nextMaintenance: "2024-01-20",
        notes: "Wooden podium with built-in mic and light",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 8,
        name: "Lighting Kit - ARRI Fresnel",
        category: "Audio/Visual",
        location: "Equipment Storage Room A",
        status: "out-of-order",
        condition: "poor",
        serialNumber: "ARI-2020-089",
        purchaseDate: "2020-11-05",
        lastMaintenance: "2023-06-15",
        nextMaintenance: "2023-12-15",
        notes: "One light not working, needs repair",
        image: "/placeholder.svg?height=80&width=80",
    },
];

// Available categories
const categories = [
    "Audio/Visual",
    "Computers",
    "Furniture",
    "Office Equipment",
    "Other",
];

// Available locations
const locations = [
    "Main Conference Hall",
    "Auditorium",
    "Workshop Room A",
    "Workshop Room B",
    "Equipment Storage Room A",
    "Equipment Storage Room B",
    "IT Department",
];

export function EquipmentInventory() {
    const [equipment, setEquipment] = useState(initialEquipment);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isAddEquipmentOpen, setIsAddEquipmentOpen] = useState(false);
    const [editingEquipment, setEditingEquipment] = useState<any>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [equipmentToDelete, setEquipmentToDelete] = useState<number | null>(
        null,
    );
    const [viewMode, setViewMode] = useState<"table" | "grid">("table");

    // Filter equipment based on search query and filters
    const filteredEquipment = equipment.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.serialNumber
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.notes.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = categoryFilter
            ? item.category === categoryFilter
            : true;
        const matchesStatus = statusFilter
            ? item.status === statusFilter
            : true;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    // Equipment statistics
    const stats = {
        total: equipment.length,
        available: equipment.filter((item) => item.status === "available")
            .length,
        inUse: equipment.filter((item) => item.status === "in-use").length,
        maintenance: equipment.filter((item) => item.status === "maintenance")
            .length,
        outOfOrder: equipment.filter((item) => item.status === "out-of-order")
            .length,
    };

    // Handle bulk selection
    const handleSelectAll = () => {
        if (selectedItems.length === filteredEquipment.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(filteredEquipment.map((item) => item.id));
        }
    };

    const handleSelectItem = (itemId: number) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    // Handle equipment operations
    const handleAddEquipment = (equipmentData: any) => {
        const newEquipment = {
            id: equipment.length + 1,
            ...equipmentData,
            image: "/placeholder.svg?height=80&width=80",
        };
        setEquipment([...equipment, newEquipment]);
        setIsAddEquipmentOpen(false);
    };

    const handleEditEquipment = (equipmentData: any) => {
        setEquipment(
            equipment.map((item) =>
                item.id === equipmentData.id
                    ? { ...item, ...equipmentData }
                    : item,
            ),
        );
        setEditingEquipment(null);
    };

    const handleDeleteEquipment = (itemId: number) => {
        setEquipment(equipment.filter((item) => item.id !== itemId));
        setEquipmentToDelete(null);
        setIsDeleteDialogOpen(false);
    };

    const handleBulkDelete = () => {
        setEquipment(
            equipment.filter((item) => !selectedItems.includes(item.id)),
        );
        setSelectedItems([]);
        setIsDeleteDialogOpen(false);
    };

    // Status badge styling
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "available":
                return (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Available
                    </Badge>
                );
            case "in-use":
                return (
                    <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                        In Use
                    </Badge>
                );
            case "maintenance":
                return (
                    <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Maintenance
                    </Badge>
                );
            case "out-of-order":
                return (
                    <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">
                        Out of Order
                    </Badge>
                );
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    // Condition badge styling
    const getConditionBadge = (condition: string) => {
        switch (condition) {
            case "excellent":
                return (
                    <Badge
                        variant="outline"
                        className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
                    >
                        Excellent
                    </Badge>
                );
            case "good":
                return (
                    <Badge
                        variant="outline"
                        className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                    >
                        Good
                    </Badge>
                );
            case "fair":
                return (
                    <Badge
                        variant="outline"
                        className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                    >
                        Fair
                    </Badge>
                );
            case "poor":
                return (
                    <Badge
                        variant="outline"
                        className="bg-red-500/10 text-red-500 hover:bg-red-500/20"
                    >
                        Poor
                    </Badge>
                );
            default:
                return <Badge variant="outline">{condition}</Badge>;
        }
    };

    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 py-3.5">
                    <h1 className="text-xl font-semibold">
                        Equipment Inventory
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search equipment..."
                                className="w-64 pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={() => setIsAddEquipmentOpen(true)}
                            size="sm"
                            className="gap-1"
                        >
                            <Plus className="h-4 w-4" />
                            Add Equipment
                        </Button>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-5 gap-4 p-6 pb-0">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Equipment
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.total}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                                Available
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-500">
                                {stats.available}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                                In Use
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-500">
                                {stats.inUse}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                                Maintenance
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-500">
                                {stats.maintenance}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">
                                Out of Order
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-500">
                                {stats.outOfOrder}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex items-center justify-between border-b px-6 py-2">
                    <div className="flex items-center gap-2">
                        {selectedItems.length > 0 ? (
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
                                    {selectedItems.length} item
                                    {selectedItems.length > 1 ? "s" : ""}{" "}
                                    selected
                                </span>
                            </>
                        ) : (
                            <span className="text-sm text-muted-foreground">
                                {filteredEquipment.length} item
                                {filteredEquipment.length !== 1 ? "s" : ""}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <Tabs
                            value={viewMode}
                            onValueChange={(value) =>
                                setViewMode(value as "table" | "grid")
                            }
                        >
                            <TabsList>
                                <TabsTrigger value="table">Table</TabsTrigger>
                                <TabsTrigger value="grid">Grid</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <Select
                            value={categoryFilter || ""}
                            onValueChange={(value) =>
                                setCategoryFilter(value || null)
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Categories
                                </SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
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
                                <SelectItem value="available">
                                    Available
                                </SelectItem>
                                <SelectItem value="in-use">In Use</SelectItem>
                                <SelectItem value="maintenance">
                                    Maintenance
                                </SelectItem>
                                <SelectItem value="out-of-order">
                                    Out of Order
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>

                <div className="flex-1 overflow-auto p-6">
                    {viewMode === "table" ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                        <Checkbox
                                            checked={
                                                selectedItems.length > 0 &&
                                                selectedItems.length ===
                                                    filteredEquipment.length
                                            }
                                            onCheckedChange={handleSelectAll}
                                        />
                                    </TableHead>
                                    <TableHead>Equipment</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Condition</TableHead>
                                    <TableHead>Serial Number</TableHead>
                                    <TableHead className="w-[80px]">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredEquipment.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedItems.includes(
                                                    item.id,
                                                )}
                                                onCheckedChange={() =>
                                                    handleSelectItem(item.id)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                                                    <img
                                                        src={
                                                            item.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-medium">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        Last maintenance:{" "}
                                                        {item.lastMaintenance}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.location}</TableCell>
                                        <TableCell>
                                            {getStatusBadge(item.status)}
                                        </TableCell>
                                        <TableCell>
                                            {getConditionBadge(item.condition)}
                                        </TableCell>
                                        <TableCell>
                                            {item.serialNumber}
                                        </TableCell>
                                        <TableCell>
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
                                                    <DropdownMenuLabel>
                                                        Actions
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            setEditingEquipment(
                                                                item,
                                                            )
                                                        }
                                                    >
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    {item.status !==
                                                        "maintenance" && (
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                handleEditEquipment(
                                                                    {
                                                                        ...item,
                                                                        status: "maintenance",
                                                                        lastMaintenance:
                                                                            new Date()
                                                                                .toISOString()
                                                                                .split(
                                                                                    "T",
                                                                                )[0],
                                                                    },
                                                                );
                                                            }}
                                                        >
                                                            <Wrench className="mr-2 h-4 w-4" />
                                                            Mark for Maintenance
                                                        </DropdownMenuItem>
                                                    )}
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        className="text-destructive"
                                                        onClick={() => {
                                                            setEquipmentToDelete(
                                                                item.id,
                                                            );
                                                            setIsDeleteDialogOpen(
                                                                true,
                                                            );
                                                        }}
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {filteredEquipment.length === 0 && (
                                    <TableRow>
                                        <TableCell
                                            colSpan={8}
                                            className="text-center py-8 text-muted-foreground"
                                        >
                                            No equipment found. Try adjusting
                                            your filters.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredEquipment.map((item) => (
                                <Card key={item.id} className="overflow-hidden">
                                    <CardHeader className="p-4 pb-2">
                                        <div className="flex justify-between">
                                            <div className="flex items-start gap-2">
                                                <Checkbox
                                                    checked={selectedItems.includes(
                                                        item.id,
                                                    )}
                                                    onCheckedChange={() =>
                                                        handleSelectItem(
                                                            item.id,
                                                        )
                                                    }
                                                />
                                                <CardTitle className="text-base">
                                                    {item.name}
                                                </CardTitle>
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
                                                            setEditingEquipment(
                                                                item,
                                                            )
                                                        }
                                                    >
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    {item.status !==
                                                        "maintenance" && (
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                handleEditEquipment(
                                                                    {
                                                                        ...item,
                                                                        status: "maintenance",
                                                                        lastMaintenance:
                                                                            new Date()
                                                                                .toISOString()
                                                                                .split(
                                                                                    "T",
                                                                                )[0],
                                                                    },
                                                                );
                                                            }}
                                                        >
                                                            <Wrench className="mr-2 h-4 w-4" />
                                                            Mark for Maintenance
                                                        </DropdownMenuItem>
                                                    )}
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        className="text-destructive"
                                                        onClick={() => {
                                                            setEquipmentToDelete(
                                                                item.id,
                                                            );
                                                            setIsDeleteDialogOpen(
                                                                true,
                                                            );
                                                        }}
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <CardDescription className="text-xs">
                                            {item.serialNumber}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                                <img
                                                    src={
                                                        item.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex flex-wrap gap-1">
                                                    {getStatusBadge(
                                                        item.status,
                                                    )}
                                                    {getConditionBadge(
                                                        item.condition,
                                                    )}
                                                </div>
                                                <div className="text-sm">
                                                    Category: {item.category}
                                                </div>
                                                <div className="text-sm">
                                                    Location: {item.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            <div>
                                                Purchase Date:{" "}
                                                {item.purchaseDate}
                                            </div>
                                            <div>
                                                Last Maintenance:{" "}
                                                {item.lastMaintenance}
                                            </div>
                                            <div>
                                                Next Maintenance:{" "}
                                                {item.nextMaintenance}
                                            </div>
                                            <div className="mt-1">
                                                {item.notes}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            {filteredEquipment.length === 0 && (
                                <div className="col-span-full text-center py-8 text-muted-foreground">
                                    No equipment found. Try adjusting your
                                    filters.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Add/Edit Equipment Dialog */}
            <EquipmentFormDialog
                isOpen={isAddEquipmentOpen || !!editingEquipment}
                onClose={() => {
                    setIsAddEquipmentOpen(false);
                    setEditingEquipment(null);
                }}
                onSubmit={
                    editingEquipment ? handleEditEquipment : handleAddEquipment
                }
                equipment={editingEquipment}
                categories={categories}
                locations={locations}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => {
                    setIsDeleteDialogOpen(false);
                    setEquipmentToDelete(null);
                }}
                onConfirm={() => {
                    if (equipmentToDelete) {
                        handleDeleteEquipment(equipmentToDelete);
                    } else if (selectedItems.length > 0) {
                        handleBulkDelete();
                    }
                }}
                title={
                    equipmentToDelete
                        ? "Delete Equipment"
                        : "Delete Selected Equipment"
                }
                description={
                    equipmentToDelete
                        ? "Are you sure you want to delete this equipment? This action cannot be undone."
                        : `Are you sure you want to delete ${selectedItems.length} selected items? This action cannot be undone.`
                }
            />
        </div>
    );
}
