import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import EquipmentList from "./equipmentList";
import UserReservations from "./userReservation";

// Mock data for events
const events = [
    { id: "1", name: "Annual Conference" },
    { id: "2", name: "Team Building Workshop" },
    { id: "3", name: "Product Launch" },
];

// Mock data for venues
const venues = [
    { id: "1", name: "Main Auditorium", capacity: 500 },
    { id: "2", name: "Conference Room A", capacity: 100 },
    { id: "3", name: "Outdoor Pavilion", capacity: 300 },
];

// Form schema
const formSchema = z.object({
    eventId: z.string({
        required_error: "Please select an event.",
    }),
    venueId: z.string({
        required_error: "Please select a venue.",
    }),
    startDate: z.date({
        required_error: "Please select a start date.",
    }),
    endDate: z.date({
        required_error: "Please select an end date.",
    }),
    startTime: z.string({
        required_error: "Please enter a start time.",
    }),
    endTime: z.string({
        required_error: "Please enter an end time.",
    }),
    purpose: z.string().min(10, {
        message: "Purpose must be at least 10 characters.",
    }),
    selectedEquipment: z.array(z.string()).min(1, {
        message: "Please select at least one equipment.",
    }),
});

export default function EquipmentReservationForm() {
    const [activeTab, setActiveTab] = useState("form");
    const [showSummary, setShowSummary] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            purpose: "",
            selectedEquipment: [],
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        setShowSummary(true);
    };

    const selectedEvent = events.find(
        (event) => event.id === form.watch("eventId"),
    );

    const selectedVenue = venues.find(
        (venue) => venue.id === form.watch("venueId"),
    );

    const selectedEquipment = form.watch("selectedEquipment") || [];

    return (
        <div className="space-y-6">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="form">Reservation Form</TabsTrigger>
                    <TabsTrigger value="myReservations">
                        My Reservations
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="form" className="space-y-4 pt-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Event Information */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Event Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="eventId"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Event</FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select an event" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {events.map(
                                                                (event) => (
                                                                    <SelectItem
                                                                        key={
                                                                            event.id
                                                                        }
                                                                        value={
                                                                            event.id
                                                                        }
                                                                    >
                                                                        {
                                                                            event.name
                                                                        }
                                                                    </SelectItem>
                                                                ),
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="purpose"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Purpose
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Describe the purpose of the equipment reservation"
                                                            className="resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Venue Information */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Venue Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="venueId"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Venue</FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a venue" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {venues.map(
                                                                (venue) => (
                                                                    <SelectItem
                                                                        key={
                                                                            venue.id
                                                                        }
                                                                        value={
                                                                            venue.id
                                                                        }
                                                                    >
                                                                        {
                                                                            venue.name
                                                                        }{" "}
                                                                        (Capacity:{" "}
                                                                        {
                                                                            venue.capacity
                                                                        }
                                                                        )
                                                                    </SelectItem>
                                                                ),
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="startDate"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>
                                                            Start Date
                                                        </FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger
                                                                asChild
                                                            >
                                                                <FormControl>
                                                                    <Button
                                                                        variant={
                                                                            "outline"
                                                                        }
                                                                        className={cn(
                                                                            "w-full pl-3 text-left font-normal",
                                                                            !field.value &&
                                                                                "text-muted-foreground",
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(
                                                                                field.value,
                                                                                "PPP",
                                                                            )
                                                                        ) : (
                                                                            <span>
                                                                                Pick
                                                                                a
                                                                                date
                                                                            </span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent
                                                                className="w-auto p-0"
                                                                align="start"
                                                            >
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={
                                                                        field.value
                                                                    }
                                                                    onSelect={
                                                                        field.onChange
                                                                    }
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="endDate"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>
                                                            End Date
                                                        </FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger
                                                                asChild
                                                            >
                                                                <FormControl>
                                                                    <Button
                                                                        variant={
                                                                            "outline"
                                                                        }
                                                                        className={cn(
                                                                            "w-full pl-3 text-left font-normal",
                                                                            !field.value &&
                                                                                "text-muted-foreground",
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(
                                                                                field.value,
                                                                                "PPP",
                                                                            )
                                                                        ) : (
                                                                            <span>
                                                                                Pick
                                                                                a
                                                                                date
                                                                            </span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent
                                                                className="w-auto p-0"
                                                                align="start"
                                                            >
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={
                                                                        field.value
                                                                    }
                                                                    onSelect={
                                                                        field.onChange
                                                                    }
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="startTime"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Start Time
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="time"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="endTime"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            End Time
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="time"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Equipment Selection */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Equipment Selection</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <FormField
                                        control={form.control}
                                        name="selectedEquipment"
                                        render={() => (
                                            <FormItem>
                                                <div className="mb-4">
                                                    <FormLabel className="text-base">
                                                        Select Equipment
                                                    </FormLabel>
                                                    <FormDescription>
                                                        Select the equipment you
                                                        need for your event.
                                                        Unavailable equipment
                                                        cannot be selected.
                                                    </FormDescription>
                                                </div>
                                                <FormMessage />

                                                <EquipmentList
                                                    selectedEquipment={
                                                        selectedEquipment
                                                    }
                                                    onEquipmentChange={(
                                                        equipmentIds,
                                                    ) => {
                                                        form.setValue(
                                                            "selectedEquipment",
                                                            equipmentIds,
                                                            {
                                                                shouldValidate: true,
                                                            },
                                                        );
                                                    }}
                                                />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>

                            <Button type="submit" className="w-full">
                                Submit Reservation
                            </Button>
                        </form>
                    </Form>
                </TabsContent>

                <TabsContent value="myReservations" className="pt-4">
                    <UserReservations />
                </TabsContent>
            </Tabs>

            {/* Reservation Summary Dialog */}
            <Dialog open={showSummary} onOpenChange={setShowSummary}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Reservation Summary</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium">Event Information</h4>
                            <p>Event: {selectedEvent?.name || "N/A"}</p>
                            <p>Purpose: {form.getValues("purpose")}</p>
                        </div>

                        <div>
                            <h4 className="font-medium">Venue Information</h4>
                            <p>Venue: {selectedVenue?.name || "N/A"}</p>
                            <p>
                                Date:{" "}
                                {form.getValues("startDate")
                                    ? format(form.getValues("startDate"), "PPP")
                                    : "N/A"}{" "}
                                to{" "}
                                {form.getValues("endDate")
                                    ? format(form.getValues("endDate"), "PPP")
                                    : "N/A"}
                            </p>
                            <p>
                                Time: {form.getValues("startTime") || "N/A"} to{" "}
                                {form.getValues("endTime") || "N/A"}
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium">Selected Equipment</h4>
                            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                <EquipmentSummary
                                    selectedEquipment={selectedEquipment}
                                />
                            </ScrollArea>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setShowSummary(false)}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => {
                                setShowSummary(false);
                                form.reset();
                                setActiveTab("myReservations");
                            }}
                        >
                            Confirm Reservation
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

// Helper component to display equipment summary
function EquipmentSummary({
    selectedEquipment,
}: { selectedEquipment: string[] }) {
    // Mock equipment data - in a real app, you would fetch this based on the IDs
    const equipmentMap = {
        "msdo-camera": { name: "Camera", owner: "MSDO" },
        "msdo-speaker": { name: "Speaker", owner: "MSDO" },
        "msdo-microphone": { name: "Microphone", owner: "MSDO" },
        "msdo-extension": { name: "Extension Wire", owner: "MSDO" },
        "opc-chairs": { name: "Chairs", owner: "OPC" },
        "opc-table": { name: "Folding Table", owner: "OPC" },
        "opc-extension": { name: "Extension Wire", owner: "OPC" },
    };

    const msdoEquipment = selectedEquipment.filter((id) =>
        id.startsWith("msdo-"),
    );
    const opcEquipment = selectedEquipment.filter((id) =>
        id.startsWith("opc-"),
    );

    if (selectedEquipment.length === 0) {
        return <p>No equipment selected</p>;
    }

    return (
        <div className="space-y-4">
            {msdoEquipment.length > 0 && (
                <div>
                    <h5 className="font-medium mb-2">MSDO Equipment</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {msdoEquipment.map((id) => (
                            <li key={id}>
                                {
                                    equipmentMap[
                                        id as keyof typeof equipmentMap
                                    ]?.name
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {opcEquipment.length > 0 && (
                <div>
                    <h5 className="font-medium mb-2">OPC Equipment</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {opcEquipment.map((id) => (
                            <li key={id}>
                                {
                                    equipmentMap[
                                        id as keyof typeof equipmentMap
                                    ]?.name
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
