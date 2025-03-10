import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample activity data
const activities = [
    {
        id: 1,
        user: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        action: "created a new event",
        target: "Annual Tech Conference",
        time: "2 hours ago",
    },
    {
        id: 2,
        user: {
            name: "Maria Garcia",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        action: "updated the details for",
        target: "Product Launch: Version 2.0",
        time: "5 hours ago",
    },
    {
        id: 3,
        user: {
            name: "Sam Lee",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        action: "added 3 team members to",
        target: "Marketing Strategy Workshop",
        time: "Yesterday",
    },
    {
        id: 4,
        user: {
            name: "Taylor Swift",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        action: "completed",
        target: "Quarterly Team Building",
        time: "2 days ago",
    },
    {
        id: 5,
        user: {
            name: "Jane Doe",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        action: "created a new workspace",
        target: "Customer Success",
        time: "3 days ago",
    },
];

export function RecentActivity() {
    return (
        <div className="space-y-4">
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback>
                            {activity.user.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm">
                            <span className="font-medium">
                                {activity.user.name}
                            </span>{" "}
                            {activity.action}{" "}
                            <span className="font-medium">
                                {activity.target}
                            </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {activity.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
