import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        month: "Jan",
        "Conference Room A": 10,
        Auditorium: 5,
        "Meeting Room B": 8,
    },
    {
        month: "Feb",
        "Conference Room A": 12,
        Auditorium: 7,
        "Meeting Room B": 6,
    },
    {
        month: "Mar",
        "Conference Room A": 15,
        Auditorium: 8,
        "Meeting Room B": 10,
    },
    // Add more months...
];

export function EventsPerVenueChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Conference Room A" fill="#8884d8" />
                    <Bar dataKey="Auditorium" fill="#82ca9d" />
                    <Bar dataKey="Meeting Room B" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
