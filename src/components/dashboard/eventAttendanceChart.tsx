import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data
const data = [
    { name: "Conferences", attendees: 250 },
    { name: "Team Building", attendees: 45 },
    { name: "Product Launches", attendees: 180 },
    { name: "Marketing", attendees: 120 },
    { name: "Workshops", attendees: 60 },
];

export function EventAttendanceChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-muted"
                    />
                    <XAxis
                        dataKey="name"
                        className="text-xs text-muted-foreground"
                        tick={{ fill: "currentColor" }}
                    />
                    <YAxis
                        className="text-xs text-muted-foreground"
                        tick={{ fill: "currentColor" }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                        }}
                    />
                    <Bar
                        dataKey="attendees"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
