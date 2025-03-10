import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
    { name: "Jan", events: 4 },
    { name: "Feb", events: 3 },
    { name: "Mar", events: 5 },
    { name: "Apr", events: 7 },
    { name: "May", events: 6 },
    { name: "Jun", events: 8 },
    { name: "Jul", events: 10 },
    { name: "Aug", events: 8 },
    { name: "Sep", events: 12 },
    { name: "Oct", events: 9 },
    { name: "Nov", events: 6 },
    { name: "Dec", events: 4 },
];

export function EventsOverviewChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                    <Line
                        type="monotone"
                        dataKey="events"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
