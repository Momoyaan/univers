import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data for cancellation rates (percentage)
const data = [
    { month: "Jan", rate: 8.2 },
    { month: "Feb", rate: 7.5 },
    { month: "Mar", rate: 9.1 },
    { month: "Apr", rate: 6.8 },
    { month: "May", rate: 5.5 },
    { month: "Jun", rate: 4.9 },
    { month: "Jul", rate: 5.2 },
    { month: "Aug", rate: 6.1 },
    { month: "Sep", rate: 7.3 },
    { month: "Oct", rate: 8.0 },
    { month: "Nov", rate: 7.2 },
    { month: "Dec", rate: 9.5 },
];

export function CancellationRateChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                        label={{
                            value: "%",
                            angle: -90,
                            position: "insideLeft",
                        }}
                        domain={[0, 12]} // Set max to a reasonable value above the highest data point
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                        }}
                        formatter={(value) => [
                            `${value}%`,
                            "Cancellation Rate",
                        ]}
                    />
                    <Area
                        type="monotone"
                        dataKey="rate"
                        stroke="#f43f5e"
                        fill="#f43f5e"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
