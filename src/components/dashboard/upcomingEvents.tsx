import { CalendarClock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample upcoming events
const upcomingEvents = [
    {
        id: 1,
        title: "Annual Tech Conference",
        date: "May 15-17, 2024",
        location: "San Francisco, CA",
        status: "planning",
    },
    {
        id: 2,
        title: "Product Launch: Version 2.0",
        date: "June 5, 2024",
        location: "Virtual Event",
        status: "confirmed",
    },
    {
        id: 3,
        title: "Marketing Strategy Workshop",
        date: "May 3, 2024",
        location: "Chicago, IL",
        status: "planning",
    },
    {
        id: 4,
        title: "Customer Appreciation Day",
        date: "June 15, 2024",
        location: "Boston, MA",
        status: "planning",
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "planning":
            return "bg-blue-500/10 text-blue-500";
        case "confirmed":
            return "bg-green-500/10 text-green-500";
        case "completed":
            return "bg-purple-500/10 text-purple-500";
        default:
            return "bg-gray-500/10 text-gray-500";
    }
};

export function UpcomingEvents() {
    return (
        <div className="space-y-4">
            {upcomingEvents.map((event) => (
                <div
                    key={event.id}
                    className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-medium">{event.title}</h3>
                            <Badge className={getStatusColor(event.status)}>
                                {event.status.charAt(0).toUpperCase() +
                                    event.status.slice(1)}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarClock className="h-4 w-4" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
