import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data for approval time analysis (in hours)
const data = [
    { month: "Jan", averageTime: 4.2 },
    { month: "Feb", averageTime: 3.8 },
    { month: "Mar", averageTime: 5.1 },
    { month: "Apr", averageTime: 2.9 },
    { month: "May", averageTime: 2.5 },
    { month: "Jun", averageTime: 3.2 },
    { month: "Jul", averageTime: 3.0 },
    { month: "Aug", averageTime: 2.8 },
    { month: "Sep", averageTime: 2.3 },
    { month: "Oct", averageTime: 2.0 },
    { month: "Nov", averageTime: 1.8 },
    { month: "Dec", averageTime: 2.2 },
];

export function ApprovalTimeChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                        label={{
                            value: "Hours",
                            angle: -90,
                            position: "insideLeft",
                        }}
                        domain={[0, "dataMax + 1"]}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                        }}
                        formatter={(value) => [
                            `${value} hours`,
                            "Average Time",
                        ]}
                    />
                    <Line
                        type="monotone"
                        dataKey="averageTime"
                        stroke="#ff7300"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
