import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { month: "Jan", Projector: 20, Microphone: 15, Laptop: 10 },
    { month: "Feb", Projector: 25, Microphone: 18, Laptop: 12 },
    { month: "Mar", Projector: 22, Microphone: 20, Laptop: 15 },
    { month: "Apr", Projector: 18, Microphone: 15, Laptop: 10 },
    { month: "May", Projector: 15, Microphone: 12, Laptop: 8 },
    { month: "Jun", Projector: 12, Microphone: 10, Laptop: 5 },
    { month: "Jul", Projector: 10, Microphone: 8, Laptop: 3 },

    // Add more months...
];

export function EquipmentReservationsChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Projector"
                        stroke="#8884d8"
                    />
                    <Line
                        type="monotone"
                        dataKey="Microphone"
                        stroke="#82ca9d"
                    />
                    <Line type="monotone" dataKey="Laptop" stroke="#ffc658" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
