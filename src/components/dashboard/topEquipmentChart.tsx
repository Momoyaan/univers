import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data for most reserved equipment
const data = [
    { name: "Projector", count: 68 },
    { name: "Microphone", count: 52 },
    { name: "Laptop", count: 47 },
    { name: "Speaker System", count: 35 },
    { name: "Whiteboard", count: 30 },
];

export function TopEquipmentChart() {
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
                    <Bar dataKey="count" fill="#82ca9d" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
