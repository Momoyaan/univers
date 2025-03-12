import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data for top venues by usage
const data = [
    { name: "Conference Room A", count: 45 },
    { name: "Auditorium", count: 38 },
    { name: "Meeting Room B", count: 32 },
    { name: "Executive Boardroom", count: 28 },
    { name: "Training Room", count: 25 },
];

export function TopVenuesChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" />
                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        width={100}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                        }}
                    />
                    <Bar dataKey="count" fill="#8884d8" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
