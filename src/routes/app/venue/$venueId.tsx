import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { format } from "date-fns";
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    Clock,
    Download,
    FileText,
    MapPin,
    MessageSquare,
    MoreHorizontal,
    Users,
    Wifi,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/venue/$venueId")({
    component: VenueDetails,
});

// Sample venue data
const venues = [
    {
        id: "1",
        name: "Main Conference Hall",
        address: "123 Convention Center Way, New York, NY 10001",
        type: "Conference Hall",
        capacity: 500,
        status: "available",
        amenities: ["Wi-Fi", "Projector", "Sound System", "Stage", "Catering"],
        hourlyRate: 1200,
        contactPerson: "John Smith",
        contactEmail: "john@venueexample.com",
        contactPhone: "(212) 555-1234",
        description:
            "Our largest venue with state-of-the-art AV equipment and flexible seating arrangements.",
        image: "/placeholder.svg?height=400&width=800",
        bookingRate: 65,
        upcomingEvents: 3,
    },
    {
        id: "2",
        name: "Workshop Room A",
        address: "123 Convention Center Way, New York, NY 10001",
        type: "Meeting Room",
        capacity: 50,
        status: "booked",
        amenities: ["Wi-Fi", "Whiteboard", "TV Screen", "Coffee Service"],
        hourlyRate: 300,
        contactPerson: "Sarah Johnson",
        contactEmail: "sarah@venueexample.com",
        contactPhone: "(212) 555-2345",
        description:
            "Perfect for workshops, training sessions, and small group meetings.",
        image: "/placeholder.svg?height=400&width=800",
        bookingRate: 80,
        upcomingEvents: 5,
    },
    // More venues...
];

// Sample reservations data
const reservations = [
    {
        id: 1,
        eventName: "Computer Science Department Meeting",
        venue: "Main Conference Hall",
        venueId: "1",
        department: "Computer Science",
        contactNumber: "(555) 123-4567",
        userName: "Dr. Alan Turing",
        eventDate: "2024-05-15",
        startTime: "09:00",
        endTime: "12:00",
        status: "pending",
        createdAt: "2024-05-01T10:30:00Z",
        approvalLetter: "/placeholder.svg?height=800&width=600",
        remarks: {
            OPC: "No conflicts with other events",
            MSDO: "Equipment requirements noted",
            "Venue Owner": "Venue available on requested date",
            "VP Admin": "",
            VPAA: "",
            FAO: "",
            SSD: "Security arrangements confirmed",
        },
        approvers: [
            {
                name: "Jane Smith",
                department: "Office of Planning and Coordination",
                role: "OPC Director",
                dateSigned: "2024-05-02T14:20:00Z",
                status: "approved",
            },
            {
                name: "Michael Johnson",
                department: "Media Services Department",
                role: "MSDO Head",
                dateSigned: "2024-05-03T09:15:00Z",
                status: "approved",
            },
            {
                name: "Sarah Williams",
                department: "Facilities Management",
                role: "Venue Owner",
                dateSigned: "2024-05-03T11:30:00Z",
                status: "approved",
            },
            {
                name: "Dr. Robert Chen",
                department: "Administration",
                role: "VP Admin",
                dateSigned: null,
                status: "pending",
            },
            {
                name: "Dr. Elizabeth Taylor",
                department: "Academic Affairs",
                role: "VPAA",
                dateSigned: null,
                status: "pending",
            },
            {
                name: "Thomas Garcia",
                department: "Finance and Accounting",
                role: "FAO Director",
                dateSigned: null,
                status: "pending",
            },
            {
                name: "Maria Rodriguez",
                department: "Security Services",
                role: "SSD Head",
                dateSigned: "2024-05-04T16:45:00Z",
                status: "approved",
            },
        ],
    },
    {
        id: 2,
        eventName: "Annual Faculty Research Symposium",
        venue: "Auditorium",
        venueId: "5",
        department: "Research and Development",
        contactNumber: "(555) 987-6543",
        userName: "Prof. Marie Curie",
        eventDate: "2024-05-20",
        startTime: "13:00",
        endTime: "17:00",
        status: "approved",
        createdAt: "2024-04-25T08:45:00Z",
        approvalLetter: "/placeholder.svg?height=800&width=600",
        remarks: {
            OPC: "Priority event, all resources allocated",
            MSDO: "Full AV support confirmed",
            "Venue Owner": "Venue reserved and prepared",
            "VP Admin": "Approved with commendation",
            VPAA: "Academic merit recognized",
            FAO: "Budget allocation approved",
            SSD: "Enhanced security measures in place",
        },
        approvers: [
            {
                name: "Jane Smith",
                department: "Office of Planning and Coordination",
                role: "OPC Director",
                dateSigned: "2024-04-26T10:20:00Z",
                status: "approved",
            },
            {
                name: "Michael Johnson",
                department: "Media Services Department",
                role: "MSDO Head",
                dateSigned: "2024-04-26T14:15:00Z",
                status: "approved",
            },
            {
                name: "Sarah Williams",
                department: "Facilities Management",
                role: "Venue Owner",
                dateSigned: "2024-04-27T09:30:00Z",
                status: "approved",
            },
            {
                name: "Dr. Robert Chen",
                department: "Administration",
                role: "VP Admin",
                dateSigned: "2024-04-28T11:45:00Z",
                status: "approved",
            },
            {
                name: "Dr. Elizabeth Taylor",
                department: "Academic Affairs",
                role: "VPAA",
                dateSigned: "2024-04-29T13:20:00Z",
                status: "approved",
            },
            {
                name: "Thomas Garcia",
                department: "Finance and Accounting",
                role: "FAO Director",
                dateSigned: "2024-04-30T15:10:00Z",
                status: "approved",
            },
            {
                name: "Maria Rodriguez",
                department: "Security Services",
                role: "SSD Head",
                dateSigned: "2024-05-01T09:45:00Z",
                status: "approved",
            },
        ],
    },
    // More reservations...
];

export function VenueDetails({ id }: { id: string }) {
    const router = useRouter();
    const [venue, setVenue] = useState<any>(null);
    const [venueReservations, setVenueReservations] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState("overview");

    // Dialog states
    const [selectedReservation, setSelectedReservation] = useState<any>(null);
    const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
    const [isApprovalLetterDialogOpen, setIsApprovalLetterDialogOpen] =
        useState(false);
    const [isRemarksDialogOpen, setIsRemarksDialogOpen] = useState(false);
    const [isDisapprovalDialogOpen, setIsDisapprovalDialogOpen] =
        useState(false);
    const [disapprovalNote, setDisapprovalNote] = useState("");
    const [activeRemarksTab, setActiveRemarksTab] = useState("OPC");

    // Fetch venue and reservations data
    useEffect(() => {
        // In a real app, you would fetch this data from an API
        const foundVenue = venues.find((v) => v.id === id);
        if (foundVenue) {
            setVenue(foundVenue);
        }

        const filteredReservations = reservations.filter(
            (r) => r.venueId === id,
        );
        setVenueReservations(filteredReservations);
    }, [id]);

    if (venue) {
        return (
            <div className="flex h-screen bg-background">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <p>Loading venue details...</p>
                </div>
            </div>
        );
    }

    // Handle reservation operations
    const handleViewDetails = (reservation: any) => {
        setSelectedReservation(reservation);
        setIsDetailsDialogOpen(true);
    };

    const handleViewApprovalLetter = (reservation: any) => {
        setSelectedReservation(reservation);
        setIsApprovalLetterDialogOpen(true);
    };

    const handleViewRemarks = (reservation: any) => {
        setSelectedReservation(reservation);
        setIsRemarksDialogOpen(true);
    };

    const handleApproveReservation = (reservation: any) => {
        // In a real app, you would call an API to update the reservation status
        const updatedReservations = venueReservations.map((r) => {
            if (r.id === reservation.id) {
                // Update all pending approvers to approved
                const updatedApprovers = r.approvers.map((approver: any) => {
                    if (approver.status === "pending") {
                        return {
                            ...approver,
                            status: "approved",
                            dateSigned: new Date().toISOString(),
                        };
                    }
                    return approver;
                });

                return {
                    ...r,
                    status: "approved",
                    approvers: updatedApprovers,
                };
            }
            return r;
        });

        setVenueReservations(updatedReservations);
        setIsDetailsDialogOpen(false);
    };

    const handleDisapproveReservation = () => {
        if (!selectedReservation || !disapprovalNote.trim()) return;

        // In a real app, you would call an API to update the reservation status
        const updatedReservations = venueReservations.map((r) => {
            if (r.id === selectedReservation.id) {
                // Update all pending approvers to disapproved
                const updatedApprovers = r.approvers.map((approver: any) => {
                    if (approver.status === "pending") {
                        return {
                            ...approver,
                            status: "disapproved",
                            dateSigned: new Date().toISOString(),
                        };
                    }
                    return approver;
                });

                return {
                    ...r,
                    status: "disapproved",
                    disapprovalNote: disapprovalNote,
                    approvers: updatedApprovers,
                };
            }
            return r;
        });

        setVenueReservations(updatedReservations);
        setIsDisapprovalDialogOpen(false);
        setIsDetailsDialogOpen(false);
        setDisapprovalNote("");
    };

    // Status badge styling
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return (
                    <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                    </Badge>
                );
            case "approved":
                return (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Approved
                    </Badge>
                );
            case "disapproved":
                return (
                    <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">
                        Disapproved
                    </Badge>
                );
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const getApproverStatusBadge = (status: string) => {
        switch (status) {
            case "approved":
                return (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Approved
                    </Badge>
                );
            case "disapproved":
                return (
                    <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">
                        Disapproved
                    </Badge>
                );
            case "pending":
                return (
                    <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                    </Badge>
                );
            case "not_required":
                return (
                    <Badge className="bg-gray-500/10 text-gray-500 hover:bg-gray-500/20">
                        Not Required
                    </Badge>
                );
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    // Format date and time
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "MMM d, yyyy");
    };

    const formatDateTime = (dateString: string | null) => {
        if (!dateString) return "—";
        return format(new Date(dateString), "MMM d, yyyy h:mm a");
    };

    const formatTime = (timeString: string) => {
        const [hours, minutes] = timeString.split(":");
        const date = new Date();
        date.setHours(Number.parseInt(hours, 10));
        date.setMinutes(Number.parseInt(minutes, 10));
        return format(date, "h:mm a");
    };

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 py-3">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <h1 className="text-xl font-semibold">{venue.name}</h1>
                        <Badge variant="outline">{venue.type}</Badge>
                    </div>
                </header>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex-1 overflow-hidden"
                >
                    <div className="border-b px-6">
                        <TabsList className="w-full justify-start">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="reservations">
                                Reservations
                            </TabsTrigger>
                            <TabsTrigger value="calendar">Calendar</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <TabsContent value="overview" className="p-6 h-full">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-2 space-y-6">
                                    <div className="rounded-lg overflow-hidden border">
                                        <img
                                            src={
                                                venue.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={venue.name}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-lg font-semibold">
                                            Description
                                        </h2>
                                        <p className="text-muted-foreground">
                                            {venue.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-lg font-semibold">
                                            Amenities
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            {venue.amenities.map(
                                                (
                                                    amenity: string,
                                                    index: number,
                                                ) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="flex items-center gap-1"
                                                    >
                                                        <Wifi className="h-3 w-3" />
                                                        {amenity}
                                                    </Badge>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">
                                                Venue Details
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    {venue.address}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Capacity: {venue.capacity}{" "}
                                                    people
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Rate:{" "}
                                                    {formatCurrency(
                                                        venue.hourlyRate,
                                                    )}{" "}
                                                    per hour
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">
                                                Contact Information
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="text-sm">
                                                <span className="font-medium">
                                                    Contact Person:
                                                </span>{" "}
                                                {venue.contactPerson}
                                            </div>
                                            <div className="text-sm">
                                                <span className="font-medium">
                                                    Email:
                                                </span>{" "}
                                                {venue.contactEmail}
                                            </div>
                                            <div className="text-sm">
                                                <span className="font-medium">
                                                    Phone:
                                                </span>{" "}
                                                {venue.contactPhone}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">
                                                Upcoming Events
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                {venueReservations.length}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {
                                                    venueReservations.filter(
                                                        (r) =>
                                                            r.status ===
                                                            "pending",
                                                    ).length
                                                }{" "}
                                                pending approval
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="reservations"
                            className="p-6 h-full"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">
                                        Venue Reservations
                                    </h2>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-1"
                                    >
                                        <Download className="h-4 w-4" />
                                        Export
                                    </Button>
                                </div>

                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Event Name</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Time</TableHead>
                                            <TableHead>Department</TableHead>
                                            <TableHead>Requester</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Submitted</TableHead>
                                            <TableHead className="w-[100px]">
                                                Actions
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {venueReservations.length > 0 ? (
                                            venueReservations.map(
                                                (reservation) => (
                                                    <TableRow
                                                        key={reservation.id}
                                                    >
                                                        <TableCell className="font-medium">
                                                            {
                                                                reservation.eventName
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {formatDate(
                                                                reservation.eventDate,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {formatTime(
                                                                reservation.startTime,
                                                            )}{" "}
                                                            -{" "}
                                                            {formatTime(
                                                                reservation.endTime,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                reservation.department
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                reservation.userName
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            {getStatusBadge(
                                                                reservation.status,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {formatDate(
                                                                reservation.createdAt,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger
                                                                    asChild
                                                                >
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
                                                                            handleViewDetails(
                                                                                reservation,
                                                                            )
                                                                        }
                                                                    >
                                                                        <Calendar className="mr-2 h-4 w-4" />
                                                                        View
                                                                        Details
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            handleViewApprovalLetter(
                                                                                reservation,
                                                                            )
                                                                        }
                                                                    >
                                                                        <FileText className="mr-2 h-4 w-4" />
                                                                        View
                                                                        Approval
                                                                        Letter
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            handleViewRemarks(
                                                                                reservation,
                                                                            )
                                                                        }
                                                                    >
                                                                        <MessageSquare className="mr-2 h-4 w-4" />
                                                                        View
                                                                        Remarks
                                                                    </DropdownMenuItem>
                                                                    {reservation.status ===
                                                                        "pending" && (
                                                                        <>
                                                                            <DropdownMenuSeparator />
                                                                            <DropdownMenuItem
                                                                                onClick={() =>
                                                                                    handleApproveReservation(
                                                                                        reservation,
                                                                                    )
                                                                                }
                                                                            >
                                                                                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                                                                                Approve
                                                                            </DropdownMenuItem>
                                                                            <DropdownMenuItem
                                                                                onClick={() => {
                                                                                    setSelectedReservation(
                                                                                        reservation,
                                                                                    );
                                                                                    setIsDisapprovalDialogOpen(
                                                                                        true,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <X className="mr-2 h-4 w-4 text-red-500" />
                                                                                Disapprove
                                                                            </DropdownMenuItem>
                                                                        </>
                                                                    )}
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </TableCell>
                                                    </TableRow>
                                                ),
                                            )
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={8}
                                                    className="text-center py-8 text-muted-foreground"
                                                >
                                                    No reservations found for
                                                    this venue.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>

                        <TabsContent value="calendar" className="p-6 h-full">
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                                    <h3 className="text-lg font-medium">
                                        Calendar View
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Calendar integration will be available
                                        soon.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            {/* Reservation Details Dialog */}
            {selectedReservation && (
                <Dialog
                    open={isDetailsDialogOpen}
                    onOpenChange={setIsDetailsDialogOpen}
                >
                    <DialogContent className="max-w-4xl">
                        <DialogHeader>
                            <DialogTitle className="text-xl">
                                Reservation Details
                            </DialogTitle>
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Event Information
                                    </h3>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Event Name:
                                            </span>
                                            <span className="text-sm">
                                                {selectedReservation.eventName}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Date:
                                            </span>
                                            <span className="text-sm">
                                                {formatDate(
                                                    selectedReservation.eventDate,
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Time:
                                            </span>
                                            <span className="text-sm">
                                                {formatTime(
                                                    selectedReservation.startTime,
                                                )}{" "}
                                                -{" "}
                                                {formatTime(
                                                    selectedReservation.endTime,
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Duration:
                                            </span>
                                            <span className="text-sm">
                                                {(() => {
                                                    const start = new Date(
                                                        `2000-01-01T${selectedReservation.startTime}:00`,
                                                    );
                                                    const end = new Date(
                                                        `2000-01-01T${selectedReservation.endTime}:00`,
                                                    );
                                                    const diffMs =
                                                        end.getTime() -
                                                        start.getTime();
                                                    const diffHrs = Math.floor(
                                                        diffMs /
                                                            (1000 * 60 * 60),
                                                    );
                                                    const diffMins = Math.floor(
                                                        (diffMs %
                                                            (1000 * 60 * 60)) /
                                                            (1000 * 60),
                                                    );
                                                    return `${diffHrs} hour${diffHrs !== 1 ? "s" : ""} ${diffMins > 0 ? `${diffMins} minute${diffMins !== 1 ? "s" : ""}` : ""}`;
                                                })()}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Venue:
                                            </span>
                                            <span className="text-sm">
                                                {selectedReservation.venue}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Requester Information
                                    </h3>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Name:
                                            </span>
                                            <span className="text-sm">
                                                {selectedReservation.userName}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Department:
                                            </span>
                                            <span className="text-sm">
                                                {selectedReservation.department}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Contact Number:
                                            </span>
                                            <span className="text-sm">
                                                {
                                                    selectedReservation.contactNumber
                                                }
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium">
                                                Submitted On:
                                            </span>
                                            <span className="text-sm">
                                                {formatDateTime(
                                                    selectedReservation.createdAt,
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-medium text-muted-foreground">
                                            Approval Letter
                                        </h3>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="gap-1"
                                            onClick={() => {
                                                setIsDetailsDialogOpen(false);
                                                setIsApprovalLetterDialogOpen(
                                                    true,
                                                );
                                            }}
                                        >
                                            <FileText className="h-4 w-4" />
                                            View Letter
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-medium text-muted-foreground">
                                            Remarks
                                        </h3>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="gap-1"
                                            onClick={() => {
                                                setIsDetailsDialogOpen(false);
                                                setIsRemarksDialogOpen(true);
                                            }}
                                        >
                                            <MessageSquare className="h-4 w-4" />
                                            View Remarks
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">
                                        Approval Status
                                    </h3>
                                    <div className="mt-2">
                                        <div className="rounded-md border">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>
                                                            Approver
                                                        </TableHead>
                                                        <TableHead>
                                                            Department/Office
                                                        </TableHead>
                                                        <TableHead>
                                                            Role
                                                        </TableHead>
                                                        <TableHead>
                                                            Date Signed
                                                        </TableHead>
                                                        <TableHead>
                                                            Status
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {selectedReservation.approvers.map(
                                                        (
                                                            approver: any,
                                                            index: number,
                                                        ) => (
                                                            <TableRow
                                                                key={index}
                                                            >
                                                                <TableCell className="py-2">
                                                                    {
                                                                        approver.name
                                                                    }
                                                                </TableCell>
                                                                <TableCell className="py-2">
                                                                    {
                                                                        approver.department
                                                                    }
                                                                </TableCell>
                                                                <TableCell className="py-2">
                                                                    {
                                                                        approver.role
                                                                    }
                                                                </TableCell>
                                                                <TableCell className="py-2">
                                                                    {approver.dateSigned
                                                                        ? formatDateTime(
                                                                              approver.dateSigned,
                                                                          )
                                                                        : "—"}
                                                                </TableCell>
                                                                <TableCell className="py-2">
                                                                    {getApproverStatusBadge(
                                                                        approver.status,
                                                                    )}
                                                                </TableCell>
                                                            </TableRow>
                                                        ),
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>

                                {selectedReservation.status ===
                                    "disapproved" && (
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">
                                            Disapproval Note
                                        </h3>
                                        <div className="mt-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm">
                                            {
                                                selectedReservation.disapprovalNote
                                            }
                                        </div>
                                    </div>
                                )}

                                {selectedReservation.status === "pending" && (
                                    <div className="flex gap-2 mt-6">
                                        <Button
                                            className="flex-1 gap-1"
                                            onClick={() =>
                                                handleApproveReservation(
                                                    selectedReservation,
                                                )
                                            }
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                            Approve Reservation
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="flex-1 gap-1 text-red-500 border-red-200 hover:bg-red-50"
                                            onClick={() => {
                                                setIsDetailsDialogOpen(false);
                                                setIsDisapprovalDialogOpen(
                                                    true,
                                                );
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                            Disapprove Reservation
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* Approval Letter Dialog */}
            {selectedReservation && (
                <Dialog
                    open={isApprovalLetterDialogOpen}
                    onOpenChange={setIsApprovalLetterDialogOpen}
                >
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Approval Letter</DialogTitle>
                            <DialogDescription>
                                Event: {selectedReservation.eventName}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-center">
                            <img
                                src={
                                    selectedReservation.approvalLetter ||
                                    "/placeholder.svg"
                                }
                                alt="Approval Letter"
                                className="max-h-[70vh] object-contain border rounded-md"
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setIsApprovalLetterDialogOpen(false)
                                }
                            >
                                Close
                            </Button>
                            <Button>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            {/* Remarks Dialog */}
            {selectedReservation && (
                <Dialog
                    open={isRemarksDialogOpen}
                    onOpenChange={setIsRemarksDialogOpen}
                >
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Remarks</DialogTitle>
                            <DialogDescription>
                                Event: {selectedReservation.eventName}
                            </DialogDescription>
                        </DialogHeader>
                        <Tabs
                            value={activeRemarksTab}
                            onValueChange={setActiveRemarksTab}
                        >
                            <TabsList className="grid grid-cols-7 w-full">
                                <TabsTrigger value="OPC">OPC</TabsTrigger>
                                <TabsTrigger value="MSDO">MSDO</TabsTrigger>
                                <TabsTrigger value="Venue Owner">
                                    Venue
                                </TabsTrigger>
                                <TabsTrigger value="VP Admin">
                                    VP Admin
                                </TabsTrigger>
                                <TabsTrigger value="VPAA">VPAA</TabsTrigger>
                                <TabsTrigger value="FAO">FAO</TabsTrigger>
                                <TabsTrigger value="SSD">SSD</TabsTrigger>
                            </TabsList>
                            {Object.entries(selectedReservation.remarks).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className={
                                            activeRemarksTab === key
                                                ? "block"
                                                : "hidden"
                                        }
                                    >
                                        <div className="p-4 mt-4 rounded-md bg-muted">
                                            {value ? (
                                                <p className="text-sm">
                                                    {value}
                                                </p>
                                            ) : (
                                                <p className="text-sm text-muted-foreground italic">
                                                    No remarks provided
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ),
                            )}
                        </Tabs>
                        <DialogFooter>
                            <Button
                                onClick={() => setIsRemarksDialogOpen(false)}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            {/* Disapproval Dialog */}
            {selectedReservation && (
                <Dialog
                    open={isDisapprovalDialogOpen}
                    onOpenChange={setIsDisapprovalDialogOpen}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Disapprove Reservation</DialogTitle>
                            <DialogDescription>
                                Please provide a reason for disapproval. This
                                note will be sent to the requester.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">
                                    Event: {selectedReservation.eventName}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Venue: {selectedReservation.venue} | Date:{" "}
                                    {formatDate(selectedReservation.eventDate)}
                                </p>
                            </div>
                            <Textarea
                                placeholder="Enter reason for disapproval..."
                                value={disapprovalNote}
                                onChange={(e) =>
                                    setDisapprovalNote(e.target.value)
                                }
                                rows={5}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setIsDisapprovalDialogOpen(false)
                                }
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={handleDisapproveReservation}
                                disabled={!disapprovalNote.trim()}
                            >
                                Confirm Disapproval
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
