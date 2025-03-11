import { EventAttendanceChart } from "@/components/dashboard/eventAttendanceChart";
import { EventCategoriesChart } from "@/components/dashboard/eventCategoriesChart";
import { EventsOverviewChart } from "@/components/dashboard/eventOverviewChart";
import { RecentActivity } from "@/components/dashboard/recentActivity";
import { UpcomingEvents } from "@/components/dashboard/upcomingEvents";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Calendar, CalendarDays, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
export const Route = createFileRoute("/app/dashboard")({
    component: Dashboard,
    // beforeLoad: async ({ location }) => {
    // 	if (!isAuthenticated) {
    // 		throw redirect({
    // 			to: "/login",
    // 			search: {
    // 				// Use the current location to power a redirect after login
    // 				// (Do not use `router.state.resolvedLocation` as it can
    // 				// potentially lag behind the actual current location)
    // 				redirect: location.href,
    // 			},
    // 		});
    // 	}
    // },
});

function Dashboard() {
    const [period, setPeriod] = useState<"day" | "week" | "month" | "year">(
        "month",
    );

    // Sample stats data
    const stats = {
        totalEvents: 24,
        upcomingEvents: 8,
        totalAttendees: 3450,
        averageAttendance: 143,
        completionRate: 92,
        growthRate: 18,
    };
    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 py-3.5">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tabs
                            defaultValue="month"
                            onValueChange={(value) => setPeriod(value as any)}
                        >
                            <TabsList>
                                <TabsTrigger value="day">Day</TabsTrigger>
                                <TabsTrigger value="week">Week</TabsTrigger>
                                <TabsTrigger value="month">Month</TabsTrigger>
                                <TabsTrigger value="year">Year</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-6">
                    <div className="grid gap-6">
                        {/* Stats Overview */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Events
                                    </CardTitle>
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {stats.totalEvents}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +{stats.growthRate}% from last {period}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Upcoming Events
                                    </CardTitle>
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {stats.upcomingEvents}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Next 30 days
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Attendees
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {stats.totalAttendees.toLocaleString()}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        ~{stats.averageAttendance} per event
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Completion Rate
                                    </CardTitle>
                                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {stats.completionRate}%
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Events completed successfully
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Charts */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Events Overview</CardTitle>
                                    <CardDescription>
                                        Number of events over time
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <EventsOverviewChart />
                                </CardContent>
                            </Card>
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Event Categories</CardTitle>
                                    <CardDescription>
                                        Distribution by category
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <EventCategoriesChart />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Attendance Trends</CardTitle>
                                    <CardDescription>
                                        Average attendance by event type
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <EventAttendanceChart />
                                </CardContent>
                            </Card>
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Upcoming Events</CardTitle>
                                    <CardDescription>
                                        Your next scheduled events
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <UpcomingEvents />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>
                                    Latest updates and changes
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentActivity />
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}
